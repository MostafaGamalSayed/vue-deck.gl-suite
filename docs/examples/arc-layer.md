<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
import { ArcLayer, GeoJsonLayer } from '@vue-deckgl-suite/layers'
import { scaleQuantile } from 'd3-scale'
import { computed, onMounted, ref } from 'vue'
import 'maplibre-gl/dist/maplibre-gl.css'

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

# United States County-to-county Migration
People moving in and out of between 2009-2013.

<ClientOnly>
<div style="display: flex; flex-direction: column; align-items: center; width: 300px">
  <div style="display: flex; justify-content: space-between; width: 100%; margin-bottom: 10px; font-size: 12px; color: #777;">
    <span>Net Gain</span>
    <span>Net Loss</span>
  </div>
  <div style="display: flex; width: 100%; height: 12px;">
    <div style="background: rgb(12, 44, 132); flex: 1;"></div>
<div style="background: rgb(34, 94, 168); flex: 1;"></div>
<div style="background: rgb(29, 145, 192); flex: 1;"></div>
<div style="background: rgb(65, 182, 196); flex: 1;"></div>
<div style="background: rgb(127, 205, 187); flex: 1;"></div>
<div style="background: rgb(199, 233, 180); flex: 1;"></div>
<div style="background: rgb(255, 255, 204); flex: 1;"></div>
<div style="background: rgb(255, 255, 178); flex: 1;"></div>
<div style="background: rgb(254, 217, 118); flex: 1;"></div>
<div style="background: rgb(254, 178, 76); flex: 1;"></div>
<div style="background: rgb(253, 141, 60); flex: 1;"></div>
<div style="background: rgb(252, 78, 42); flex: 1;"></div>
<div style="background: rgb(227, 26, 28); flex: 1;"></div>
<div style="background: rgb(177, 0, 38); flex: 1;"></div>
  </div>
</div>
</ClientOnly>

<ClientOnly>
  <div style="margin-top: 30px; margin-bottom: 20px;">
    <div style="display: flex; justify-content: space-between; align-items: center; width: 300px;">
        <div style="text-align: center;">
            <div style="font-size: 36px; font-weight: bold;">3320</div>
            <div style="font-size: 14px; color: #777; margin-top: 5px;">Countries</div>
        </div>
        <div style="text-align: center;">
            <div style="font-size: 36px; font-weight: bold;">323.9K</div>
            <div style="font-size: 14px; color: #777; margin-top: 5px;">Arcs</div>
        </div>
    </div>
    <div style="margin-top: 20px; font-size: 14px; color: #555;">
      Data source: 
      <a href="http://www.census.gov/" 
         target="_blank" 
         style="color: #007bff; text-decoration: none;">
        US Census Bureau
      </a>
    </div>
  </div>
</ClientOnly>

<ClientOnly>
    <DeckGL :get-tooltip="({ object }) => object && object.properties.name">
    <Map
      height="400px"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[-100, 40.7]"
      :zoom="2.3"
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
</ClientOnly>


```vue
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
```