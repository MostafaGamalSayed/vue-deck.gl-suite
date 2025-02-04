<script setup>
import { DeckGL } from "@vue-deckgl-suite/core"
import { ColumnLayer } from '@deck.gl/layers'

const initialViewState = {
  longitude: -122.4,
  latitude: 37.74,
  zoom: 11
}

const layer = new ColumnLayer({
  id: 'ColumnLayer',
  data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/hexagons.json',
  diskResolution: 12,
  extruded: true,
  radius: 250,
  elevationScale: 5000,
  getElevation: d => d.value,
  getFillColor: d => [48, 128, d.value * 255, 255],
  getPosition: d => d.centroid,
  pickable: true
});

function printMsg(msg) {
  console.log(msg)
}
</script>

<template>
  <main>
    <DeckGL
      :initial-view-state="initialViewState"
      :layers="[layer]"
      @click="printMsg"
    />
  </main>
</template>
