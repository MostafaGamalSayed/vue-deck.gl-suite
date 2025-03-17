<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
import { ArcLayer } from '@vue-deckgl-suite/layers'
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
</script>

<template>
  <DeckGL
    :layers="[layers]"
    :getTooltip="({ object }) => object && `${object.from.name} to ${object.to.name}`"
  >
    <Map
      height="100vh"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
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
    </Map>
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
