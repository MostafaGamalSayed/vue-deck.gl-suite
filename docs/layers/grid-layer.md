<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { GridLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Grid Layer

The **Grid Layer** is a feature of `@vue-deckgl-suite/layers` that allows for rendering and aggregating data points into rectangular grid cells. This aggregation layer is particularly useful for visualizing data density and is highly customizable with features such as elevation, color scaling, and cell size adjustments.

<ClientOnly>
    <DeckGL :getTooltip="({object}) => object && `Count: ${object.elevationValue}`">
        <Map
            height="400px"
            :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
            :center="[-122.4, 37.74]"
            :zoom="11"
            :max-zoom="20"
            :pitch="30"
            :bearing="0"
        >
            <GridLayer
                id="grid-layer"
                data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json"
                :extruded="true"
                :color-range="[
                  [1, 152, 189],
                  [73, 227, 206],
                  [216, 254, 181],
                  [254, 237, 177],
                  [254, 173, 84],
                  [209, 55, 78],
                ]"
                :get-position="(d) => d.COORDINATES"
                :get-color-weight="(d) => d.SPACES"
                :get-elevation-weight="(d) => d.SPACES"
                :elevation-scale="4"
                :cell-size="200"
                :pickable="true"
            />
        </Map>
    </DeckGL>
</ClientOnly>

## Usage

To use the `GridLayer`, import it into your Vue component and configure its props to visualize your data effectively. The layer aggregates data points into grid cells, with options to control cell size, elevation, color values, and cutoffs.

### Example

Here’s an example demonstrating how to render a grid layer on a map:

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { GridLayer } from '@vue-deckgl-suite/layers';

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

const colorRange = [
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78],
];
</script>

<template>
  <DeckGL :get-tooltip="({object}) => object && `Count: ${object.elevationValue}`">
    <Map
      height="500px"
      :style
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    />
    <GridLayer
      id="GridLayer"
      data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json"
      :extruded="true"
      :color-range="colorRange"
      :get-position="(d) => d.COORDINATES"
      :get-color-weight="(d) => d.SPACES"
      :get-elevation-weight="(d) => d.SPACES"
      :elevation-scale="4"
      :cell-size="200"
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

Below is a list of props available for customizing the `GridLayer`:

| Prop                    | Type                              | Default        | Description                                                                                   |
|-------------------------|-----------------------------------|----------------|-----------------------------------------------------------------------------------------------|
| `gpuAggregation`        | `Boolean`                        | `false`        | Enables GPU-based aggregation for better performance with large datasets.                     |
| `colorAggregation`      | `String`                         | `'SUM'`        | Aggregation mode for color calculation (e.g., `SUM`, `MEAN`, `MAX`).                          |
| `elevationAggregation`  | `String`                         | `'SUM'`        | Aggregation mode for elevation calculation.                                                   |
| `gridAggregator`        | `Function`                       | `null`         | Custom aggregation method for grid cells.                                                     |
| `colorScaleType`        | `String`                         | `'quantile'`   | The scaling method used for coloring the grid (e.g., `quantile`, `ordinal`).                  |
| `cellSize`              | `Number`                         | `1000`         | The size of each grid cell.                                                                   |
| `colorDomain`           | `Array`                          | `null`         | The color scale’s domain.                                                                     |
| `colorRange`            | `Array`                          | `null`         | The color range used for grid coloring.                                                       |
| `coverage`              | `Number`                         | `1`            | A ratio between 0 and 1 showing the coverage of grid cells.                                   |
| `elevationScale`        | `Number`                         | `1`            | A multiplier for the height of each cell.                                                     |
| `elevationScaleType`    | `String`                         | `'linear'`     | Elevation scaling type (`linear`, etc.).                                                      |
| `elevationRange`        | `Array`                          | `[0, 1000]`    | The range of elevation values for grid cells.                                                 |
| `extruded`              | `Boolean`                        | `true`         | If set to true, cells are extruded to show elevation.                                          |
| `upperPercentile`       | `Number`                         | `100`          | Upper percentile cutoff for displaying cells.                                                 |
| `lowerPercentile`       | `Number`                         | `0`            | Lower percentile threshold for displaying cells.                                              |
| `elevationUpperPercentile` | `Number`                      | `100`          | Upper percentile threshold for elevation values.                                              |
| `elevationLowerPercentile` | `Number`                      | `0`            | Lower percentile threshold for elevation values.                                              |
| `getPosition`           | `Function`                       | `x => x.position` | Access data points’ positions.                                                              |
| `getColorWeight`        | `Function/Number`                | `1`            | Grid cell color weight accessor.                                                              |
| `getColorValue`         | `Function`                       | `null`         | Function to compute grid cell color aggregation result.                                       |
| `getElevationWeight`    | `Function/Number`                | `1`            | Grid cell elevation weight accessor.                                                          |
| `getElevationValue`     | `Function`                       | `null`         | Function to compute grid cell elevation aggregation result.                                   |
| `material`              | `Boolean`                        | `true`         | If true, lighting and shading effects apply to grid cells.                                    |
| `onSetColorDomain`      | `Function`                       | `null`         | Callback when the `colorDomain` is set dynamically.                                           |
| `onSetElevationDomain`  | `Function`                       | `null`         | Callback when the `elevationDomain` is set dynamically.                                       |

---

## Events

The following events are emitted by the `GridLayer` component and can be used to handle user interactions:

| Event         | Description                               |
|---------------|-------------------------------------------|
| `hover`       | Triggered when hovering over a grid cell. |
| `click`       | Triggered when a grid cell is clicked.    |
| `drag`        | Triggered during a drag event.            |
| `dragStart`   | Triggered at the beginning of a drag event.|
| `dragEnd`     | Triggered at the end of a drag event.     |
| `dataLoad`    | Triggered when the layer has loaded its data.|
| `error`       | Triggered when an error occurs.           |

---

For further details, refer to the official [`@deck.gl/aggregation-layers`](https://deck.gl/docs/api-reference/aggregation-layers/grid-layer) documentation.