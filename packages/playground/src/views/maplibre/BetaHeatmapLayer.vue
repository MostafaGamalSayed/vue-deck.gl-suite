<script setup>
import {  Map, BetaDeckGL } from '@vue-deckgl-suite/maplibre'
import { HeatmapLayer } from '@vue-deckgl-suite/layers'

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'

</script>

<template>
  <BetaDeckGL :get-tooltip="({ object }) => object && object.name">
    <Map
      height="100vh"
      :style
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    />
    <HeatmapLayer
      id="HeatmapLayer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json'"
      :aggregation="'SUM'"
      :getPosition="d => d.COORDINATES"
      :getWeight="d => d.SPACES"
      :radiusPixels="25"
    />
  </BetaDeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
