<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
import { ArcLayer, GeoJsonLayer } from '@vue-deckgl-suite/layers'
import { scaleQuantile } from 'd3-scale'
import { computed, onMounted, ref } from 'vue'

// Source data GeoJSON
const DATA_URL =
  'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/arc/counties.json'; // eslint-disable-line

const selectedCounty = ref(null)
const data = ref([])

const inFlowColors= [
  [255, 255, 204],
  [199, 233, 180],
  [127, 205, 187],
  [65, 182, 196],
  [29, 145, 192],
  [34, 94, 168],
  [12, 44, 132]
];

const outFlowColors = [
  [255, 255, 178],
  [254, 217, 118],
  [254, 178, 76],
  [253, 141, 60],
  [252, 78, 42],
  [227, 26, 28],
  [177, 0, 38]
];

function calculateArcs(data, selectedCounty) {
  if (!data || !data.length) {
    return null;
  }
  if (!selectedCounty) {
    selectedCounty = data.find(f => f.properties.name === 'Los Angeles, CA');
  }
  const {flows} = selectedCounty.properties;

  const arcs = Object.keys(flows).map(toId => {
    const f = data[Number(toId)];
    return {
      source: selectedCounty,
      target: f,
      value: flows[toId],
      quantile: 0
    };
  });

  const scale = scaleQuantile()
    .domain(arcs.map(a => Math.abs(a.value)))
    .range(inFlowColors.map((c, i) => i));

  arcs.forEach(a => {
    a.quantile = scale(Math.abs(a.value));
  });

  return arcs;
}

function selectCounty(object) {
  selectedCounty.value = object;
}

const arcs = computed(() => calculateArcs(data.value, selectedCounty.value))

onMounted(async () => {
  const resp = await fetch(DATA_URL);
  const { features } = await resp.json();

  data.value = features;
})
</script>

<template>
  <DeckGL :get-tooltip="({ object }) => object && object.properties.name">
    <Map
      height="100vh"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[-100, 40.7]"
      :zoom="3"
      :max-zoom="15"
      :pitch="30"
      :bearing="30"
    />
    <GeoJsonLayer
      id="geojson"
      :data="data"
      :stroked="false"
      :filled="true"
      :getFillColor="[0, 0, 0, 0]"
      :onClick="({object}) => selectCounty(object)"
      :pickable="true"
    />
    <ArcLayer
      id="arc"
      :data="arcs"
      :getSourcePosition="d => d.source.properties.centroid"
      :getTargetPosition="d => d.target.properties.centroid"
      :getSourceColor="d => (d.value > 0 ? inFlowColors : outFlowColors)[d.quantile]"
      :getTargetColor="d => (d.value > 0 ? outFlowColors : inFlowColors)[d.quantile]"
      :getWidth="2"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
