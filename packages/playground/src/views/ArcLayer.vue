<script setup>
import { DeckGL, ArcLayer } from '@vue-deckgl-suite/layers'
import { ColumnLayer } from '@deck.gl/layers'

const layers = new ColumnLayer({
  id: 'ColumnLayer',
  data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/hexagons.json',
  diskResolution: 12,
  extruded: true,
  radius: 250,
  elevationScale: 5000,
  getElevation: (d) => d.value,
  getFillColor: (d) => [48, 128, d.value * 255, 255],
  getPosition: (d) => d.centroid,
})

const initialViewState = {
  longitude: -122.4,
  latitude: 37.74,
  zoom: 11,
}
</script>

<template>
  <DeckGL
    :initial-view-state="initialViewState"
    :controller="true"
    :layers="[layers]"
    :getTooltip="({ object }) => object && `${object.from.name} to ${object.to.name}`"
  >
    <ArcLayer
      id="2"
      data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-segments.json"
      :getSourcePosition="(d) => d.from.coordinates"
      :getTargetPosition="(d) => d.to.coordinates"
      :getSourceColor="(d) => [Math.sqrt(d.inbound), 140, 0]"
      :getTargetColor="(d) => [Math.sqrt(d.outbound), 140, 0]"
      :getWidth="12"
      :pickable="true"
      @click="(info, event) => console.log(info, event)"
    />
  </DeckGL>
</template>
