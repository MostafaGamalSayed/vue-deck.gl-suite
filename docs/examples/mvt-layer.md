<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { MVTLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# MVT Layer Example

## Map Visualization
Renders Mapbox Vector Tiles from a public demo source.

<ClientOnly>
<DeckGL :getTooltip="({ object }) => object && (object.properties?.name || object.properties?.layerName)">
  <Map
    height="400px"
    :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
    :center="[-122.4, 37.74]"
    :zoom="11"
    :max-zoom="20"
    :pitch="0"
    :bearing="0"
  />
  <MVTLayer
    id="MVTLayer"
    :data="[
      'https://tiles-a.basemaps.cartocdn.com/vectortiles/carto.streets/v1/{z}/{x}/{y}.mvt'
    ]"
    :minZoom="0"
    :maxZoom="14"
    :getFillColor="f => {
      switch (f.properties.layerName) {
        case 'poi':
          return [255, 0, 0]
        case 'water':
          return [120, 150, 180]
        case 'building':
          return [218, 218, 218]
        default:
          return [240, 240, 240]
      }
    }"
    :getLineWidth="f => {
      switch (f.properties.class) {
        case 'street':
          return 6
        case 'motorway':
          return 10
        default:
          return 1
      }
    }"
    :getLineColor="[192, 192, 192]"
    :getPointRadius="2"
    pointRadiusUnits="pixels"
    :stroked="false"
    :pickable="true"
  />
</DeckGL>
</ClientOnly>

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { MVTLayer } from '@vue-deckgl-suite/layers';
</script>

<template>
  <DeckGL :getTooltip="({ object }) => object && (object.properties?.name || object.properties?.layerName)">
    <Map height="500px" :style :center="[-122.4, 37.74]" :zoom="11" />
    <MVTLayer
      id="MVTLayer"
      :data="[
        'https://tiles-a.basemaps.cartocdn.com/vectortiles/carto.streets/v1/{z}/{x}/{y}.mvt'
      ]"
      :minZoom="0"
      :maxZoom="14"
      :getFillColor="f => {
        switch (f.properties.layerName) {
          case 'poi':
            return [255, 0, 0]
          case 'water':
            return [120, 150, 180]
          case 'building':
            return [218, 218, 218]
          default:
            return [240, 240, 240]
        }
      }"
      :getLineWidth="f => {
        switch (f.properties.class) {
          case 'street':
            return 6
          case 'motorway':
            return 10
          default:
            return 1
        }
      }"
      :getLineColor="[192, 192, 192]"
      :getPointRadius="2"
      pointRadiusUnits="pixels"
      :stroked="false"
      :pickable="true"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```