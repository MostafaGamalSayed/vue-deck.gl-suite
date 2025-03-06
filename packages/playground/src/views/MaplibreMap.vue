<script setup>
import { Map, DeckGL } from '@vue-deckgl-suite/maplibre'
import { ArcLayer, GeoJsonLayer } from '@vue-deckgl-suite/layers'
import { ColumnLayer } from '@deck.gl/layers'

const style = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'
const center = [-122.4, 37.74]
const zoom = 11

const layers = new ColumnLayer({
  id: 'ColumnLayer',
  data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/hexagons.json',
  diskResolution: 12,
  extruded: true,
  radius: 250,
  elevationScale: 5000,
  pickable: true,
  getElevation: (d) => d.value,
  getFillColor: (d) => [48, 128, d.value * 255, 255],
  getPosition: (d) => d.centroid,
})
</script>

<template>
  <DeckGL
    :layers="[layers]"
    :getTooltip="
      ({ object, layer }) =>
        object &&
        (layer.id === 'ColumnLayer'
          ? `height: ${object.value * 5000}m`
          : `${object.from.name} to ${object.to.name}`)
    "
  >
    <Map height="100vh" :style :center="center" :zoom="zoom" :pitch="45" />
    <ArcLayer
      id="ArcLayer"
      data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-segments.json"
      :getSourcePosition="(d) => d.from.coordinates"
      :getTargetPosition="(d) => d.to.coordinates"
      :getSourceColor="(d) => [Math.sqrt(d.inbound), 140, 0]"
      :getTargetColor="(d) => [Math.sqrt(d.outbound), 140, 0]"
      :getWidth="12"
      :pickable="true"
    />
    <GeoJsonLayer
      id="deck-gl-geojson"
      data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart.geo.json"
      pointType="circle+text"
      :stroked="false"
      :filled="true"
      :extruded="true"
      :getElevation="30"
      :getFillColor="[160, 160, 180, 200]"
      :getLineColor="
        (f) => {
          const hex = f.properties.color
          // convert to RGB
          return hex ? hex.match(/[0-9a-f]{2}/g).map((x) => parseInt(x, 16)) : [0, 0, 0]
        }
      "
      :getLineWidth="20"
      :getPointRadius="4"
      :getText="(f) => f.properties.name"
      :getTextSize="12"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
