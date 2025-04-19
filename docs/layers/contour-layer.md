<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ContourLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>


# Contour Layer

The **Contour Layer** is a feature of `@vue-deckgl-suite/layers` that allows you to render contour lines or filled contour polygons based on input data. This is useful for visualizing data distributions or heatmaps as isocontours.

<ClientOnly>
<DeckGL :getTooltip="({ object }) => object && `threshold: ${object.contour.threshold}`">
  <Map
    height="400px"
    :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
    :center="[-122.4, 37.74]"
    :zoom="11"
    :max-zoom="20"
    :pitch="30"
    :bearing="0"
  >
    <ContourLayer
      id="ContourLayer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json'"
      :cellSize="200"
      :contours="[
        {threshold: 1, color: [255, 0, 0], strokeWidth: 2, zIndex: 1},
        {threshold: [3, 10], color: [55, 0, 55], zIndex: 0},
        {threshold: 5, color: [0, 255, 0], strokeWidth: 6, zIndex: 2},
        {threshold: 15, color: [0, 0, 255], strokeWidth: 4, zIndex: 3}
      ]"
      :getPosition="(d) => d.COORDINATES"
      :getWeight="(d) => d.SPACES"
      :pickable="true"
    />
  </Map>
</DeckGL>
</ClientOnly>

## Usage

To use the `ContourLayer`, import it into your Vue component and configure its props to customize how contours are generated from the data.

### Example

Here’s an example that demonstrates how to use the **Contour Layer** to generate a contour map based on the number of bike parking spaces in San Francisco:

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ContourLayer } from '@vue-deckgl-suite/layers';
</script>

<template>
<DeckGL :getTooltip="({ object }) => object && `threshold: ${object.contour.threshold}`">
  <Map
    height="500px"
    :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
    :center="[-122.4, 37.74]"
    :zoom="11"
    :max-zoom="20"
    :pitch="30"
    :bearing="0"
  >
    <ContourLayer
      id="ContourLayer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json'"
      :cellSize="200"
      :contours="[
        {threshold: 1, color: [255, 0, 0], strokeWidth: 2, zIndex: 1},
        {threshold: [3, 10], color: [55, 0, 55], zIndex: 0},
        {threshold: 5, color: [0, 255, 0], strokeWidth: 6, zIndex: 2},
        {threshold: 15, color: [0, 0, 255], strokeWidth: 4, zIndex: 3}
      ]"
      :getPosition="(d) => d.COORDINATES"
      :getWeight="(d) => d.SPACES"
      :pickable="true"
    />
  </Map>
</DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```

## Props

Inherits from all [Base Layer](https://deck.gl/docs/api-reference/core/layer#properties) properties.

Below are the props available for configuring the `ContourLayer`:

| Prop           | Type       | Default                | Description                                                                                   |
|----------------|------------|------------------------|-----------------------------------------------------------------------------------------------|
| `cellSize`     | `Number`   | `1000`                 | Size of the grid cells where contours are calculated, in meters.                              |
| `contours`     | `Array`    | `undefined`            | An array of objects describing contour lines or filled regions to render.                     |
| `getPosition`  | `Function` | `(d) => d.position`    | A function that returns the `[longitude, latitude]` position of each point in the dataset.    |
| `getWeight`    | `Function` | `(d) => 1`             | A function that specifies the weight or intensity value at each point. Used for contouring.   |
| `pickable`     | `Boolean`  | `false`                | Allows the contour layer to be interactive (supports hover/click events, etc.).               |

### Contour Object

The `contours` prop requires an array of objects, each specifying a contour. Below are the available properties for each contour object:

| Property       | Type                  | Default                     | Description                                                                                   |
|----------------|-----------------------|-----------------------------|-----------------------------------------------------------------------------------------------|
| `threshold`    | `Number` or `Array`  | `undefined`                 | The value(s) at which to draw the contour lines or polygons.                                  |
| `color`        | `Array`              | `[0, 0, 0, 255]`            | Color of the contour line or polygon in `[r, g, b, a]` format.                                |
| `strokeWidth`  | `Number`             | `1`                         | Line width of the contour.                                                                    |
| `zIndex`       | `Number`             | `0`                         | Drawing order of the contour (higher z-index is drawn on top).                                |

## Events

The following events are emitted by the `ContourLayer` component and can be used to handle user interactions or other layer events:

| Event         | Description                               |
|---------------|-------------------------------------------|
| `hover`       | Triggered when hovering over a contour.   |
| `click`       | Triggered when a contour is clicked.      |
| `dataLoad`    | Triggered when layer data is loaded.      |
| `error`       | Triggered when there is an error loading the layer. |

---

For further details, refer to the official [`@deck.gl/aggregation-layers`](https://deck.gl/docs/api-reference/aggregation-layers/contour-layer) documentation.