<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
import { MVTLayer } from '@vue-deckgl-suite/layers'

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
</script>

<template>
  <DeckGL>
    <Map
      height="100vh"
      :style
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="0"
      :bearing="0"
    />
    <MVTLayer
      id="MVTLayer"
      :data="'https://demotiles.maplibre.org/tiles/{z}/{x}/{y}.pbf'"
      :getLineColor="[200, 200, 200]"
      :getFillColor="[80, 80, 80, 80]"
      :lineWidthMinPixels="1"
      :pickable="false"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
