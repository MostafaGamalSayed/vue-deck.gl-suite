<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { HeatmapLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Heatmap Layer Example

## Dataset Used
- San Francisco Bike Parking: point locations with parking capacity (spaces).
- Source: https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json

## Map Visualization
This example renders a heat field weighted by the number of spaces at each location:

<ClientOnly>
  <DeckGL :getTooltip="({ object }) => object && object.name">
    <Map
      height="400px"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    />
    <HeatmapLayer
      id="heatmap-layer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json'"
      :aggregation="'SUM'"
      :getPosition="d => d.COORDINATES"
      :getWeight="d => d.SPACES"
      :radiusPixels="25"
    />
  </DeckGL>
</ClientOnly>

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { HeatmapLayer } from '@vue-deckgl-suite/layers';
</script>

<template>
  <DeckGL :getTooltip="({ object }) => object && object.name">
    <Map
      height="500px"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    />
    <HeatmapLayer
      id="heatmap-layer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json'"
      :aggregation="'SUM'"
      :getPosition="d => d.COORDINATES"
      :getWeight="d => d.SPACES"
      :radiusPixels="25"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```
