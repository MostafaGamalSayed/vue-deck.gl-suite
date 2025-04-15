<script setup>
import { Map, DeckGL } from '@vue-deckgl-suite/google-maps'
import { HexagonLayer, ArcLayer } from '@vue-deckgl-suite/layers'
import { ref } from 'vue'

const data = ref([])
const colorRange = ref([
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78],
])
const radius = ref(200)
const GOOGLE_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY
</script>

<template>
  <DeckGL :get-tooltip="({object}) => object && `Count: ${object.elevationValue}`">
    <Map
      height="100vh"
      :center="{ lat: 37.74, lng: -122.4 }"
      :zoom="11"
      :api-key="GOOGLE_KEY"
    />
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
    <HexagonLayer
      id="HexagonLayer"
      :data="`https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json`"
      :extruded="true"
      :color-range="colorRange"
      :get-position="(d) => d.COORDINATES"
      :get-color-weight="(d) => d.SPACES"
      :get-elevation-weight="(d) => d.SPACES"
      :elevation-scale="4"
      :radius
      :pickable="true"
    />
  </DeckGL>
</template>
