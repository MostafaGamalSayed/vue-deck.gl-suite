<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ScatterplotLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>


# Scatterplot Layer

The **Scatterplot Layer** is a feature of `@vue-deckgl-suite/layers` that lets you render points on a map. It is useful for visualizing geospatial data like locations, clusters, or concentric size-based circle representations.

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
  >
    <ScatterplotLayer
      id="scatterplot-layer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json'"
      :stroked="true"
      :getPosition="(d) => d.coordinates"
      :getRadius="(d) => Math.sqrt(d.exits)"
      :getFillColor="[255, 140, 0]"
      :getLineColor="[0, 0, 0]"
      :getLineWidth="10"
      :radiusScale="6"
      :pickable="true"
      @click="(info, event) => console.log(info, event)"
    />
  </Map>
</DeckGL>
</ClientOnly>

## Usage

To use the `ScatterplotLayer`, import it into your Vue component and configure its props to customize the behavior and appearance of points.

### Example

Here’s an example that demonstrates how to use the **Scatterplot Layer** to render points on a map:

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ScatterplotLayer } from '@vue-deckgl-suite/layers';
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
  >
    <ScatterplotLayer
      id="scatterplot-layer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json'"
      :stroked="true"
      :getPosition="(d) => d.coordinates"
      :getRadius="(d) => Math.sqrt(d.exits)"
      :getFillColor="[255, 140, 0]"
      :getLineColor="[0, 0, 0]"
      :getLineWidth="10"
      :radiusScale="6"
      :pickable="true"
      @click="(info, event) => console.log(info, event)"
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

Below are the props available for configuring the `ScatterplotLayer`:

| Prop                 | Type                     | Default                      | Description                                                                                   |
|----------------------|--------------------------|------------------------------|-----------------------------------------------------------------------------------------------|
| `radiusUnits`        | `String`                | `'meters'`                   | The units of the radius, one of `'meters'`, `'common'`, or `'pixels'`.                        |
| `radiusScale`        | `Number`                | `1`                          | A multiplier for the radius of points.                                                        |
| `radiusMinPixels`    | `Number`                | `0`                          | The minimum radius of points in pixels.                                                       |
| `radiusMaxPixels`    | `Number`                | `Number.MAX_SAFE_INTEGER`    | The maximum radius of points in pixels.                                                       |
| `lineWidthUnits`     | `String`                | `'meters'`                   | The units of the stroke width, one of `'meters'`, `'common'`, or `'pixels'`.                  |
| `lineWidthScale`     | `Number`                | `1`                          | A multiplier for the stroke width of points.                                                  |
| `lineWidthMinPixels` | `Number`                | `0`                          | Minimum stroke width in pixels.                                                               |
| `lineWidthMaxPixels` | `Number`                | `Number.MAX_SAFE_INTEGER`    | Maximum stroke width in pixels.                                                               |
| `stroked`            | `Boolean`               | `false`                      | Whether to draw the outline of points.                                                        |
| `filled`             | `Boolean`               | `true`                       | Whether to draw the filled area of points.                                                    |
| `billboard`          | `Boolean`               | `false`                      | Whether circles face the camera or remain parallel to the ground plane.                       |
| `antialiasing`       | `Boolean`               | `true`                       | Whether circles are rendered with smoothed edges. Antialiasing may cause rendering artifacts. |
| `getPosition`        | `Function`              | `(object) => object.position`| A function to retrieve the position of each point.                                             |
| `getRadius`          | `Function`, `Number`    | `1`                          | A function or number specifying the radius of each point.                                      |
| `getFillColor`       | `Function`, `Array`     | `[0, 0, 0, 255]`             | A function or color array specifying the fill color of each point.                             |
| `getLineColor`       | `Function`, `Array`     | `[0, 0, 0, 255]`             | A function or color array specifying the stroke color of each point.                           |
| `getLineWidth`       | `Function`, `Number`    | `1`                          | A function or number specifying the stroke width of each point.                                |

## Events

The following events are emitted by the `ScatterplotLayer` component and can be used to handle user interactions or other layer events:

| Event         | Description                               |
|---------------|-------------------------------------------|
| `hover`       | Triggered when hovering over a point.     |
| `click`       | Triggered when a point is clicked.        |
| `drag`        | Triggered during a drag event.            |
| `dragStart`   | Triggered at the start of a drag event.   |
| `dragEnd`     | Triggered at the end of a drag event.     |
| `dataLoad`    | Triggered when layer data is loaded.      |
| `error`       | Triggered when there is an error loading the layer. |


---

For further details, refer to the official [`@deck.gl/layers`](https://deck.gl/docs/api-reference/layers/scatterplot-layer) documentation.