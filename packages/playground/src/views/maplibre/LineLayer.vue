<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
import { LineLayer } from '@vue-deckgl-suite/layers'

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
</script>

<template>
  <DeckGL :getTooltip="({ object }) => object && `${object.inbound || ''}`">
    <Map
      height="100vh"
      :style
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    />
    <LineLayer
      id="LineLayer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-segments.json'"
      :getSourcePosition="(d) => d.from.coordinates"
      :getTargetPosition="(d) => d.to.coordinates"
      :getColor="[255, 140, 0]"
      :getWidth="12"
      :pickable="true"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
