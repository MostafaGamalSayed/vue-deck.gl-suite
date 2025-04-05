<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ArcLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>


# Arc Layer

The **Arc Layer** is a feature of `@vue-deckgl-suite/layers` that lets you draw arcs between two points on a map. It is useful for visualizing relationships, movements, or connections between two geospatial locations.

<ClientOnly>
    <DeckGL
    :getTooltip="({ object }) => object && `${object.from.name} to ${object.to.name}`"
  >
    <Map
      height="400px"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    >
      <ArcLayer
        id="arc-layer"
        data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-segments.json"
        :getSourcePosition="(d) => d.from.coordinates"
        :getTargetPosition="(d) => d.to.coordinates"
        :getSourceColor="(d) => [Math.sqrt(d.inbound), 140, 0]"
        :getTargetColor="(d) => [Math.sqrt(d.outbound), 140, 0]"
        :getWidth="12"
        :pickable="true"
        @click="(info, event) => console.log(info, event)"
      />
    </Map>
  </DeckGL>
</ClientOnly>

## Usage

To use the `ArcLayer`, import it into your Vue component and configure its props to customize the behavior and appearance of the arcs.

### Example

Here’s an example that demonstrates how to use the **Arc Layer** to render arcs on a map:

```vue
<script setup>
  import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
  import { ArcLayer } from '@vue-deckgl-suite/layers'
</script>

<template>
  <DeckGL
    :getTooltip="({ object }) => object && `${object.from.name} to ${object.to.name}`"
  >
    <Map
      height="500px"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    >
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
    </Map>
  </DeckGL>
</template>

<style lang="scss">
  @import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```

## Props

Inherits from all [Base Layer](https://deck.gl/docs/api-reference/core/layer#properties) properties.

Below are the props available for configuring the `ArcLayer`:

| Prop                | Type                     | Default                      | Description                                                                                   |
|---------------------|--------------------------|------------------------------|-----------------------------------------------------------------------------------------------|
| `greatCircle`       | `Boolean`               | `false`                      | Whether to draw the arc as a great circle curve (geodesic arc).                                |
| `numSegments`       | `Number`                | `50`                         | Number of segments to interpolate the arc curve.                                              |
| `widthUnits`        | `String`                | `'pixels'`                   | The units in which the arc width is measured (`pixels`, `meters`).                            |
| `widthScale`        | `Number`                | `1`                          | A multiplier for the arc's width.                                                             |
| `widthMinPixels`    | `Number`                | `0`                          | Minimum width of the arc in pixels.                                                           |
| `widthMaxPixels`    | `Number`                | `Number.MAX_SAFE_INTEGER`    | Maximum width of the arc in pixels.                                                           |
| `getSourcePosition` | `Function`              | `x => x.sourcePosition`      | A function that returns the source position `[longitude, latitude]`.                          |
| `getTargetPosition` | `Function`              | `x => x.targetPosition`      | A function that returns the target position `[longitude, latitude]`.                          |
| `getSourceColor`    | `Function`              | `() => [0, 0, 0, 255]`       | A function to compute the color of the source point.                                           |
| `getTargetColor`    | `Function`              | `() => [0, 0, 0, 255]`       | A function to compute the color of the target point.                                           |
| `getWidth`          | `Number`                | `1`                          | Width of the arc in pixels.                                                                   |
| `getHeight`         | `Number`                | `1`                          | The arc's height factor (controls vertical "lift" effect).                                     |
| `getTilt`           | `Number`                | `0`                          | Controls the tilt angle of the arc.                                                           |


## Events

The following events are emitted by the `ArcLayer` component and can be used to handle user interactions or other layer events:

| Event         | Description                               |
|---------------|-------------------------------------------|
| `hover`       | Triggered when hovering over an arc.      |
| `click`       | Triggered when an arc is clicked.         |
| `drag`        | Triggered during a drag event.            |
| `dragStart`   | Triggered at the start of a drag event.   |
| `dragEnd`     | Triggered at the end of a drag event.     |
| `dataLoad`    | Triggered when layer data is loaded.      |
| `error`       | Triggered when there is an error loading the layer. |


---

For further details, refer to the official [`@deck.gl/layers`](https://deck.gl/docs/api-reference/layers/arc-layer) documentation.