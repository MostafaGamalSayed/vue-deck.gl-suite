<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { TerrainLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';

// Terrain uses Mapzen Terrarium tiles (public)
const elevationDecoder = {
  rScaler: 256,
  gScaler: 1,
  bScaler: 1 / 256,
  offset: -32768
}
</script>

# Terrain Layer

The TerrainLayer renders photorealistic terrain by draping a texture over a mesh generated from elevation tiles.

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

## Usage

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

## Props

Inherits from all [Base Layer](https://deck.gl/docs/api-reference/core/layer#properties) properties.

Below are the props available for configuring the `TerrainLayer`:

| Prop              | Type                      | Default    | Description                                                                |
|-------------------|---------------------------|------------|----------------------------------------------------------------------------|
| `elevationData`   | `String`                  | `required` | URL template to Mapzen Terrarium elevation tiles.                          |
| `texture`         | `String`                  | `required` | URL template to imagery tiles draped over the terrain.                     |
| `elevationDecoder`| `{rScaler,gScaler,bScaler,offset}` | `{ rScaler:256, gScaler:1, bScaler:1/256, offset:-32768 }` | Decoder object for Terrarium RGB elevation. |
| `bounds`          | `[minX, minY, maxX, maxY]`| `[-180, -85.051129, 180, 85.051129]` | World bounds for mesh generation.                           |
| `meshMaxError`    | `Number`                  | `4`        | Maximum allowed mesh error; lower values increase mesh detail.             |

## Events

The following events are emitted by the `TerrainLayer` component and can be used to handle user interactions or other layer events:

| Event       | Description                                   |
|-------------|-----------------------------------------------|
| `hover`     | Triggered when hovering over the layer.        |
| `click`     | Triggered when the layer is clicked.           |
| `drag`      | Triggered during a drag event.                 |
| `dragStart` | Triggered at the start of a drag event.        |
| `dragEnd`   | Triggered at the end of a drag event.          |
| `dataLoad`  | Triggered when layer data is loaded.           |
| `error`     | Triggered when there is an error in the layer. |
