<script setup>
import { DeckGL, ColumnLayer } from '@vue-deckgl-suite/core'

const initialViewState = {
  longitude: -122.4,
  latitude: 37.74,
  zoom: 11,
  maxZoom: 20,
  pitch: 30,
  bearing: 0,
}
</script>

<template>
  <DeckGL
    :initial-view-state="initialViewState"
    :controller="true"
    :getTooltip="({ object }) => object && `height: ${object.value * 5000}m`"
  >
    <ColumnLayer
      id="ColumnLayer"
      data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/hexagons.json"
      :diskResolution="12"
      :extruded="true"
      :radius="250"
      :elevationScale="5000"
      :getElevation="(d) => d.value"
      :getFillColor="(d) => [48, 128, d.value * 255, 255]"
      :getPosition="(d) => d.centroid"
      :pickable="true"
    />
  </DeckGL>
</template>
