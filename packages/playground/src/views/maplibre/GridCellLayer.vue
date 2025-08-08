<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
import { GridCellLayer } from '@vue-deckgl-suite/layers'

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
</script>

<template>
  <DeckGL :getTooltip="({ object }) => object && `elev: ${object.elevation || 0}`">
    <Map
      height="100vh"
      :style
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    />
    <GridCellLayer
      id="GridCellLayer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/hexagons.json'"
      :getPosition="(d) => d.centroid"
      :getFillColor="(d) => [48, 128, d.value * 255, 200]"
      :getElevation="(d) => d.value * 100"
      :cellSizePixels="20"
      :pickable="true"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
