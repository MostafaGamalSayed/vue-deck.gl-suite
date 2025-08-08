<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { MVTLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# MVT Layer

The MVTLayer renders vector tiles (Mapbox Vector Tile format), enabling efficient display of large datasets.

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

## Usage

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

## Props

Inherits from all [Base Layer](https://deck.gl/docs/api-reference/core/layer#properties) properties.

Below are the props available for configuring the `MVTLayer`:

| Prop                | Type                           | Default   | Description                                                           |
|---------------------|--------------------------------|-----------|-----------------------------------------------------------------------|
| `data`              | `String\|String[]\|TileJSON\|Function` | `required`| URL template(s), TileJSON, or function returning tile URLs.           |
| `uniqueIdProperty`  | `String`                       | `undefined` | Property name that uniquely identifies features.                     |
| `getLineColor`      | `Array\|Function`               | `[0, 0, 0, 255]` | Line color accessor.                                            |
| `getFillColor`      | `Array\|Function`               | `[0, 0, 0, 255]` | Fill color accessor.                                            |
| `lineWidthMinPixels`| `Number`                       | `1`         | Minimum line width in pixels.                                        |
| `pickable`          | `Boolean`                      | `false`     | Whether features are interactive for picking.                        |

## Events

The following events are emitted by the `MVTLayer` component and can be used to handle user interactions or other layer events:

| Event       | Description                                   |
|-------------|-----------------------------------------------|
| `hover`     | Triggered when hovering over a feature.        |
| `click`     | Triggered when a feature is clicked.           |
| `drag`      | Triggered during a drag event.                 |
| `dragStart` | Triggered at the start of a drag event.        |
| `dragEnd`   | Triggered at the end of a drag event.          |
| `dataLoad`  | Triggered when layer data is loaded.           |
| `error`     | Triggered when there is an error in the layer. |
