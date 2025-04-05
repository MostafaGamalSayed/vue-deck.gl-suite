<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { HexagonLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

1   # Hexagon Layer

The **Hexagon Layer** is a feature of `@vue-deckgl-suite/layers` that allows for rendering and aggregating geospatial data into hexagonal bins. This layer is particularly useful in scenarios where data density visualization is required, such as showing data distributions or patterns over a region.

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
            <HexagonLayer
                id="hexagon-layer"
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
                :radius="200"
                :pickable="true"
            />
        </Map>
    </DeckGL>
</ClientOnly>

## Usage

To use the `HexagonLayer`, import it into your Vue component and set its props to customize its behavior and appearance. This layer aggregates data points into hexagonal bins, which are visualized on the map and can be customized with various attributes like height, color, radius, and more.

### Example

Below is a practical example demonstrating how to render hexagonal bins on a map using the `HexagonLayer`:

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { HexagonLayer } from '@vue-deckgl-suite/layers';

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
    <HexagonLayer
      id="HexagonLayer"
      data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json"
      :extruded="true"
      :color-range="colorRange"
      :get-position="(d) => d.COORDINATES"
      :get-color-weight="(d) => d.SPACES"
      :get-elevation-weight="(d) => d.SPACES"
      :elevation-scale="4"
      :radius="200"
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

The `HexagonLayer` has a comprehensive set of props for customization. Below are the main props that can be configured to control the layer’s behavior and appearance:

| Prop                  | Type                               | Default     | Description                                                                                   |
|-----------------------|------------------------------------|-------------|-----------------------------------------------------------------------------------------------|
| `gpuAggregation`      | `Boolean`                         | `false`     | Whether to use GPU-based aggregation for better performance with large datasets.              |
| `colorAggregation`    | `String`                          | `'SUM'`     | Aggregation mode for color calculation (e.g., `SUM`, `MEAN`, `COUNT`).                        |
| `elevationAggregation`| `String`                          | `'SUM'`     | Aggregation mode for elevation calculation.                                                   |
| `radius`              | `Number`                          | `1000`      | The radius of each hexagonal bin.                                                             |
| `elevationScale`      | `Number`                          | `1`         | Scale for the elevation of the hexagonal bins.                                                |
| `coverage`            | `Number`                          | `1`         | Ratio of how much a hexagon occupies in the cell.                                              |
| `lowerPercentile`     | `Number`                          | `0`         | Lower threshold percentile for displaying hexagons.                                           |
| `upperPercentile`     | `Number`                          | `100`       | Upper threshold percentile for displaying hexagons.                                           |
| `getPosition`         | `Function`                        | `x => x.position` | Accessor for the position of data points.                                                    |
| `getColorWeight`      | `Function or Number`              | `1`         | Accessor or value for the weight of color aggregation.                                        |
| `getColorValue`       | `Function`                        | `null`      | Accessor for custom color aggregation logic.                                                  |
| `colorRange`          | `Array`                           | `null`      | Array defining a color spectrum for hexagons.                                                |
| `elevationRange`      | `Array`                           | `[0, 1000]` | Range of the hexagon elevation.                                                              |
| `extruded`            | `Boolean`                         | `false`     | Whether the hexagons are extruded to show elevation.                                          |
| `pickable`            | `Boolean`                         | `false`     | Whether hexagons are interactive and pickable (e.g., for tooltips).                           |
| `material`            | `Object` or `Boolean`             | `true`      | Material for lighting and shading effects on the hexagons.                                   |

## Events

The `HexagonLayer` emits the following events, allowing you to handle user interactions and know about layer state changes:

| Event         | Description                               |
|---------------|-------------------------------------------|
| `hover`       | Triggered when hovering over a hexagon.   |
| `click`       | Triggered when a hexagon is clicked.      |
| `drag`        | Triggered during a drag event.            |
| `dragStart`   | Triggered at the start of a drag event.   |
| `dragEnd`     | Triggered at the end of a drag event.     |
| `dataLoad`    | Triggered when layer data is loaded.      |
| `error`       | Triggered when there is an error loading the layer. |

---

For more information, refer to the official [`@deck.gl/aggregation-layers`](https://deck.gl/docs/api-reference/aggregation-layers/hexagon-layer) documentation.