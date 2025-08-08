<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { HeatmapLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Heatmap Layer

The Heatmap Layer in `@vue-deckgl-suite/layers` visualizes the density of points as a smooth heat field. It’s ideal for representing point-based intensity such as incidents, bike parking capacity, check-ins, or sensor readings.

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

## Usage

To use the `HeatmapLayer`, import it into your Vue component and configure its props to control the aggregation, radius, color range, thresholds, and accessors.

### Example (Real-life dataset)

This example uses San Francisco bike parking data from the official Deck.gl datasets. Each location’s number of spaces contributes to the heat weight.

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

## Props

Inherits from all [Base Layer](https://deck.gl/docs/api-reference/core/layer#properties) properties.

Below are the props available for configuring the `HeatmapLayer`:

| Prop                 | Type                 | Default   | Description                                                                 |
|----------------------|----------------------|-----------|-----------------------------------------------------------------------------|
| `intensity`          | `Number`             | `1`       | Global intensity multiplier for the heatmap.                                |
| `radiusPixels`       | `Number`             | `30`      | Radius of influence in pixels for each point.                               |
| `colorRange`         | `Array`              | `[]`      | Ordered array of colors defining the heatmap gradient.                      |
| `threshold`          | `Number`             | `0.05`    | Cutoff threshold; values below are rendered transparent.                    |
| `colorDomain`        | `[min, max] \| null`| `null`    | Value domain for color mapping; if null, computed from data.                |
| `aggregation`        | `'SUM'\|'MEAN'`     | `'SUM'`   | Aggregation operation used to combine point weights.                        |
| `weightsTextureSize` | `Number`             | `2048`    | Size of the internal texture used for GPU aggregation.                      |
| `debounceTimeout`    | `Number`             | `500`     | Debounce timeout (ms) to throttle re-aggregation on view changes.           |
| `getPosition`        | `Function`           | `x => x.position` | Accessor returning point coordinates `[lng, lat]`.                    |
| `getWeight`          | `Function\|Number`  | `1`       | Accessor or constant weight contributed by each point.                      |

## Events

The following events are emitted by the `HeatmapLayer` component and can be used to handle user interactions or other layer events:

| Event       | Description                                   |
|-------------|-----------------------------------------------|
| `hover`     | Triggered when hovering over the layer.        |
| `click`     | Triggered when the layer is clicked.           |
| `drag`      | Triggered during a drag event.                 |
| `dragStart` | Triggered at the start of a drag event.        |
| `dragEnd`   | Triggered at the end of a drag event.          |
| `dataLoad`  | Triggered when layer data is loaded.           |
| `error`     | Triggered when there is an error in the layer. |

---

For further details, see the official Deck.gl Heatmap layer docs: https://deck.gl/docs/api-reference/aggregation-layers/heatmap-layer
