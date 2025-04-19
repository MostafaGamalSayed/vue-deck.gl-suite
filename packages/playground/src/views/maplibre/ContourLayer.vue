<script setup>
import { Map, DeckGL } from '@vue-deckgl-suite/maplibre'
import { ContourLayer } from '@vue-deckgl-suite/layers'

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
</script>

<template>
  <DeckGL :getTooltip="({object}) => object && `threshold: ${object.contour.threshold}`">
    <Map
      height="100vh"
      :style
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    />
    <ContourLayer
      id="ContourLayer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json'"
      :cellSize="200"
      :contours="[
        {threshold: 1, color: [255, 0, 0], strokeWidth: 2, zIndex: 1},
        {threshold: [3, 10], color: [55, 0, 55], zIndex: 0},
        {threshold: 5, color: [0, 255, 0], strokeWidth: 6, zIndex: 2},
        {threshold: 15, color: [0, 0, 255], strokeWidth: 4, zIndex: 3}
      ]"
      :getPosition="d => d.COORDINATES"
      :getWeight="d => d.SPACES"
      :pickable="true"
    /></DeckGL>
</template>
