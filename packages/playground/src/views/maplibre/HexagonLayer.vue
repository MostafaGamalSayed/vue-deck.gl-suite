<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
import { HexagonLayer } from '@vue-deckgl-suite/layers'
import { onMounted, ref } from 'vue'

const data = ref([])
const colorRange = ref([
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78],
])
const radius = ref(200)

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
</script>

<template>
  <DeckGL :get-tooltip="({ object }) => object && `Count: ${object.elevationValue}`">
    <Map
      height="100vh"
      :style
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    />
    <HexagonLayer
      id="HexagonLayer"
      :data="`https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json`"
      :extruded="true"
      :color-range="colorRange"
      :get-position="(d) => d.COORDINATES"
      :get-color-weight="(d) => d.SPACES"
      :get-elevation-weight="(d) => d.SPACES"
      :elevation-scale="4"
      :radius
      :pickable="true"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
