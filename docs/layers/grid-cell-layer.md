<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { GridCellLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Grid Cell Layer

The GridCellLayer renders a grid of cells (rectangles) with per-cell color and elevation.

<ClientOnly>
<DeckGL :getTooltip="({ object }) => object && `elev: ${object.elevation || 0}`">
  <Map
    height="400px"
    :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
    :center="[-122.4, 37.74]"
    :zoom="11"
    :max-zoom="20"
    :pitch="30"
    :bearing="0"
  />
  <GridCellLayer
    id="GridCellLayer"
    :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/hexagons.json'"
    :getPosition="(d) => d.centroid"
    :getFillColor="(d) => [48, 128, d.value * 255, 200]"
    :getElevation="(d) => d.value * 100"
    :cellSize="20"
    :pickable="true"
  />
</DeckGL>
</ClientOnly>

## Usage

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { GridCellLayer } from '@vue-deckgl-suite/layers';
</script>

<template>
  <DeckGL :getTooltip="({ object }) => object && `elev: ${object.elevation || 0}`">
    <Map height="500px" :style :center="[-122.4, 37.74]" :zoom="11" />
    <GridCellLayer
      id="GridCellLayer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/hexagons.json'"
      :getPosition="(d) => d.centroid"
      :getFillColor="(d) => [48, 128, d.value * 255, 200]"
      :getElevation="(d) => d.value * 100"
      :cellSize="20"
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

Below are the props available for configuring the `GridCellLayer`:

| Prop            | Type               | Default                    | Description                                                      |
|-----------------|--------------------|----------------------------|------------------------------------------------------------------|
| `cellSize`      | `Number`           | `1000`                     | The size of each cell (in meters by default).                    |
| `elevationScale`| `Number`           | `1`                        | Multiplier for cell elevation.                                   |
| `getPosition`   | `Function`         | `x => x.position`          | Accessor returning the center coordinate of each cell.           |
| `getFillColor`  | `Array\|Function`   | `[0, 0, 0, 255]`           | Fill color accessor for each cell.                               |
| `getElevation`  | `Number\|Function`  | `1000`                     | Elevation accessor/value for each cell.                          |
| `extruded`      | `Boolean`          | `false`                    | Whether to extrude cells into 3D columns.                        |
| `pickable`      | `Boolean`          | `false`                    | Whether cells are interactive for picking.                       |

## Events

The following events are emitted by the `GridCellLayer` component and can be used to handle user interactions or other layer events:

| Event       | Description                                   |
|-------------|-----------------------------------------------|
| `hover`     | Triggered when hovering over a cell.           |
| `click`     | Triggered when a cell is clicked.              |
| `drag`      | Triggered during a drag event.                 |
| `dragStart` | Triggered at the start of a drag event.        |
| `dragEnd`   | Triggered at the end of a drag event.          |
| `dataLoad`  | Triggered when layer data is loaded.           |
| `error`     | Triggered when there is an error in the layer. |
