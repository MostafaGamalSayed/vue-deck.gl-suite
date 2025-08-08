<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ScreenGridLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Screen Grid Layer

The ScreenGridLayer aggregates point data into screen-aligned grid cells and renders color by aggregated value.

<ClientOnly>
<DeckGL>
  <Map
    height="400px"
    :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
    :center="[-122.4, 37.74]"
    :zoom="11"
    :max-zoom="20"
    :pitch="30"
    :bearing="0"
  />
  <ScreenGridLayer
    id="ScreenGridLayer"
    :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json'"
    :getPosition="(d) => d.COORDINATES"
    :getWeight="(d) => d.SPACES"
    :cellSizePixels="30"
  />
</DeckGL>
</ClientOnly>

## Usage

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ScreenGridLayer } from '@vue-deckgl-suite/layers';
</script>

<template>
  <DeckGL>
    <Map height="500px" :style :center="[-122.4, 37.74]" :zoom="11" />
    <ScreenGridLayer
      id="ScreenGridLayer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json'"
      :getPosition="(d) => d.COORDINATES"
      :getWeight="(d) => d.SPACES"
      :cellSizePixels="30"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```

## Props

Inherits from all [Base Layer](https://deck.gl/docs/api-reference/core/layer#properties) properties.

Below are the props available for configuring the `ScreenGridLayer`:

| Prop             | Type                 | Default   | Description                                                        |
|------------------|----------------------|-----------|--------------------------------------------------------------------|
| `cellSizePixels` | `Number`             | `100`     | Size of each screen-aligned grid cell in pixels.                   |
| `colorRange`     | `Array`              | `[]`      | Ordered array of colors used for the grid’s color mapping.         |
| `colorDomain`    | `[min, max] \| null` | `null`    | Value domain for color mapping; if null, computed from data.       |
| `getPosition`    | `Function`           | `x => x.position` | Accessor returning coordinates for each input point.        |
| `getWeight`      | `Number\|Function`    | `1`       | Accessor/value providing the weight contributed by each point.     |
| `aggregation`    | `'SUM'\|'MEAN'`       | `'SUM'`   | Aggregation operation used to combine point weights.               |

## Events

The following events are emitted by the `ScreenGridLayer` component and can be used to handle user interactions or other layer events:

| Event       | Description                                   |
|-------------|-----------------------------------------------|
| `hover`     | Triggered when hovering over a cell.           |
| `click`     | Triggered when a cell is clicked.              |
| `drag`      | Triggered during a drag event.                 |
| `dragStart` | Triggered at the start of a drag event.        |
| `dragEnd`   | Triggered at the end of a drag event.          |
| `dataLoad`  | Triggered when layer data is loaded.           |
| `error`     | Triggered when there is an error in the layer. |
