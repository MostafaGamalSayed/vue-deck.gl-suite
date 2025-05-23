<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
import { HexagonLayer } from '@vue-deckgl-suite/layers'
import { AmbientLight, LightingEffect, PointLight } from '@deck.gl/core'
import { onMounted, ref } from 'vue'
import { CSVLoader } from '@loaders.gl/csv'
import { load } from '@loaders.gl/core'

const data = ref(null)
const elevationScale = ref(0) // Elevation scale starts at 0 for animation

const colorRange = [
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78],
]

const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0,
})

const pointLight1 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-0.144528, 49.739968, 80000],
})

const pointLight2 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-3.807751, 54.104682, 8000],
})

const lightingEffect = new LightingEffect({ ambientLight, pointLight1, pointLight2 })

function getTooltip({ object }) {
  if (!object) {
    return null
  }
  const lat = object.position[1]
  const lng = object.position[0]
  const count = object.count

  return `\
    latitude: ${Number.isFinite(lat) ? lat.toFixed(6) : ''}
    longitude: ${Number.isFinite(lng) ? lng.toFixed(6) : ''}
    ${count} Accidents`
}

onMounted(async () => {
  const DATA_URL =
    'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/3d-heatmap/heatmap-data.csv'
  const fetchedData = (await load(DATA_URL, CSVLoader)).data

  data.value = fetchedData
    .map((d) => (Number.isFinite(d.lng) ? [d.lng, d.lat] : null))
    .filter(Boolean)

  setTimeout(() => {
    elevationScale.value = 50
  }, 1000)
})
</script>

<template>
  <DeckGL :get-tooltip="getTooltip" :effects="[lightingEffect]">
    <Map
      height="100vh"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[-1.415727, 52.232395]"
      :zoom="6.6"
      :min-zoom="5"
      :max-zoom="15"
      :pitch="40.5"
      :bearing="-27"
    />
    <HexagonLayer
      id="heatmap"
      :gpu-aggregation="true"
      :color-range="colorRange"
      :coverage="0.8"
      :data
      :elevation-range="[0, 3000]"
      :elevation-scale="elevationScale"
      :extruded="true"
      :get-position="(d) => d"
      :pickable="true"
      :radius="2000"
      :upper-percentile="100"
      :material="{
        ambient: 0.64,
        diffuse: 0.6,
        shininess: 32,
        specularColor: [51, 51, 51],
      }"
      :transitions="{
        elevationScale: 3000,
      }"
      @dataLoad="console.log('data loaded')"
    />
  </DeckGL>
</template>
