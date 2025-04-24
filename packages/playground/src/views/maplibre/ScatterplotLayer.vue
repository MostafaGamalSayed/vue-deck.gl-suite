<script setup>
import { Map, DeckGL } from '@vue-deckgl-suite/maplibre'
import { ScatterplotLayer } from '@vue-deckgl-suite/layers'

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
</script>

<template>
  <DeckGL :getTooltip="({ object }) => object && object.name">
    <Map
      height="100vh"
      :style
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0" />
    <ScatterplotLayer
      id="ScatterplotLayer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json'"
      :stroked="true"
      :getPosition="(d) => d.coordinates"
      :getRadius="(d) => Math.sqrt(d.exits)"
      :getFillColor="[255, 140, 0]"
      :getLineColor="[0, 0, 0]"
      :getLineWidth="10"
      :radiusScale="6"
      :pickable="true"
  /></DeckGL>
</template>
