<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { TerrainLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';

const elevationDecoder = {
  rScaler: 256,
  gScaler: 1,
  bScaler: 1 / 256,
  offset: -32768
}
</script>

# Terrain Layer Example

## Map Visualization
Photorealistic terrain using Mapzen Terrarium elevation tiles and OSM imagery.

<ClientOnly>
<DeckGL>
  <Map
    height="400px"
    :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
    :center="[-122.4, 37.74]"
    :zoom="10"
    :max-zoom="18"
    :pitch="45"
    :bearing="0"
  />
  <TerrainLayer
    id="TerrainLayer"
    :elevationData="'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'"
    :texture="'https://tile.openstreetmap.org/{z}/{x}/{y}.png'"
    :elevationDecoder="elevationDecoder"
    :bounds="[-180, -85.051129, 180, 85.051129]"
    :meshMaxError="4"
  />
</DeckGL>
</ClientOnly>

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { TerrainLayer } from '@vue-deckgl-suite/layers';

const elevationDecoder = {
  rScaler: 256,
  gScaler: 1,
  bScaler: 1 / 256,
  offset: -32768
}
</script>

<template>
  <DeckGL>
    <Map height="500px" :style :center="[-122.4, 37.74]" :zoom="10" />
    <TerrainLayer
      id="TerrainLayer"
      :elevationData="'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'"
      :texture="'https://tile.openstreetmap.org/{z}/{x}/{y}.png'"
      :elevationDecoder="elevationDecoder"
      :bounds="[-180, -85.051129, 180, 85.051129]"
      :meshMaxError="4"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```