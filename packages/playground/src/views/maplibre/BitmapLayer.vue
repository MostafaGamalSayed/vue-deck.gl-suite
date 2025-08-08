<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
import { BitmapLayer } from '@vue-deckgl-suite/layers'

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
</script>

<template>
  <DeckGL>
    <Map
      height="100vh"
      :style
      :center="[-122.43, 37.76]"
      :zoom="10.5"
      :max-zoom="20"
      :pitch="0"
      :bearing="0"
    />
    <BitmapLayer
      id="bitmap-demo"
      :image="'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/bitmap/0.png'"
      :bounds="[-122.519, 37.7045, -122.355, 37.829]"
      :opacity="0.8"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
