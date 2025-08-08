<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
import { ScreenGridLayer } from '@vue-deckgl-suite/layers'

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
      :pitch="30"
      :bearing="0"
    />
    <ScreenGridLayer
      id="ScreenGridLayer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json'"
      :getPosition="(d) => d.COORDINATES"
      :getWeight="(d) => d.SPACES"
      :cellSizePixels="30"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
