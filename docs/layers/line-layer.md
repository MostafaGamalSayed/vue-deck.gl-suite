<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { LineLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Line Layer

The Line Layer renders straight line segments between source and target positions. Useful for flows, connections, and network diagrams.

<ClientOnly>
<DeckGL :getTooltip="({ object }) => object && `${object.inbound || ''}`">
  <Map
    height="400px"
    :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
    :center="[-122.4, 37.74]"
    :zoom="11"
    :max-zoom="20"
    :pitch="30"
    :bearing="0"
  />
  <LineLayer
    id="LineLayer"
    :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-segments.json'"
    :getSourcePosition="(d) => d.from.coordinates"
    :getTargetPosition="(d) => d.to.coordinates"
    :getColor="[255, 140, 0]"
    :getWidth="12"
    :pickable="true"
  />
</DeckGL>
</ClientOnly>

## Usage

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { LineLayer } from '@vue-deckgl-suite/layers';
</script>

<template>
  <DeckGL :getTooltip="({ object }) => object && `${object.inbound || ''}`">
    <Map height="500px" :style :center="[-122.4, 37.74]" :zoom="11" />
    <LineLayer
      id="LineLayer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-segments.json'"
      :getSourcePosition="(d) => d.from.coordinates"
      :getTargetPosition="(d) => d.to.coordinates"
      :getColor="[255, 140, 0]"
      :getWidth="12"
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

Below are the props available for configuring the `LineLayer`:

| Prop                 | Type                  | Default                    | Description                                                       |
|----------------------|-----------------------|----------------------------|-------------------------------------------------------------------|
| `widthUnits`         | `'meters'\|'pixels'`   | `'pixels'`                 | Units in which line width is measured.                            |
| `widthScale`         | `Number`              | `1`                        | Multiplier applied to computed/constant width.                    |
| `widthMinPixels`     | `Number`              | `0`                        | Minimum line width in pixels.                                     |
| `widthMaxPixels`     | `Number`              | `Number.MAX_SAFE_INTEGER`  | Maximum line width in pixels.                                     |
| `getSourcePosition`  | `Function`            | `x => x.sourcePosition`    | Accessor returning source coordinates `[lng, lat]`.               |
| `getTargetPosition`  | `Function`            | `x => x.targetPosition`    | Accessor returning target coordinates `[lng, lat]`.               |
| `getColor`           | `Array\|Function`      | `[0, 0, 0, 255]`           | Stroke color of the line segments.                                |
| `getWidth`           | `Number\|Function`     | `1`                        | Line width in units defined by `widthUnits` (or pixels if func).  |

## Events

The following events are emitted by the `LineLayer` component and can be used to handle user interactions or other layer events:

| Event       | Description                                   |
|-------------|-----------------------------------------------|
| `hover`     | Triggered when hovering over a line.           |
| `click`     | Triggered when a line is clicked.              |
| `drag`      | Triggered during a drag event.                 |
| `dragStart` | Triggered at the start of a drag event.        |
| `dragEnd`   | Triggered at the end of a drag event.          |
| `dataLoad`  | Triggered when layer data is loaded.           |
| `error`     | Triggered when there is an error in the layer. |
