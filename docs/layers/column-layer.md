<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ColumnLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>


# Column Layer

The **Column Layer** is a feature of `@vue-deckgl-suite/layers` that allows you to visualize data using 3D extruded columns, useful for displaying aggregated spatial information such as population density, elevation, or other granularity-based data.

<ClientOnly>
    <DeckGL
    :getTooltip="({ object }) => object && `height: ${object.value * 5000}m`"
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
      <ColumnLayer
        id="ColumnLayer"
        data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/hexagons.json"
        :diskResolution="12"
        :extruded="true"
        :radius="250"
        :elevationScale="5000"
        :getElevation="(d) => d.value"
        :getFillColor="(d) => [48, 128, d.value * 255, 255]"
        :getPosition="(d) => d.centroid"
        :pickable="true"
      />
    </Map>
  </DeckGL>
</ClientOnly>

## Usage

To use the `ColumnLayer`, import it into your Vue component and configure its props to customize the 3D column geometry and interaction.

### Example

Here’s an example that demonstrates the **Column Layer** visualizing aggregated data:

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ColumnLayer } from '@vue-deckgl-suite/layers';

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';
</script>

<template>
  <DeckGL :getTooltip="({ object }) => object && `height: ${object.value * 5000}m`">
    <Map
      height="100vh"
      :style
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    />
    <ColumnLayer
      id="ColumnLayer"
      data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/hexagons.json"
      :diskResolution="12"
      :extruded="true"
      :radius="250"
      :elevationScale="5000"
      :getElevation="(d) => d.value"
      :getFillColor="(d) => [48, 128, d.value * 255, 255]"
      :getPosition="(d) => d.centroid"
      :pickable="true"
    />
  </DeckGL>
</template>
```

## Props
Inherits from all [Base Layer](https://deck.gl/docs/api-reference/core/layer#properties) properties.

Below are the props available for configuring the `ColumnLayer`:

| Prop                 | Type               | Default                       | Description                                                                                     |
|----------------------|--------------------|-------------------------------|-------------------------------------------------------------------------------------------------|
| `diskResolution`     | `Number`          | `20`                          | Number of sides used to approximate the disk shape.                                             |
| `radius`             | `Number`          | `1000`                        | Radius of the disk in units specified by `radiusUnits`.                                         |
| `angle`              | `Number`          | `0`                           | Disk rotation, counter-clockwise in degrees.                                                   |
| `vertices`           | `Array`           | `null`                        | Geometry of the column as custom vertices.                                                     |
| `offset`             | `Array`           | `[0, 0]`                      | Disk offset from the position, relative to the radius.                                         |
| `coverage`           | `Number`          | `1`                           | Radius multiplier between 0 and 1.                                                             |
| `elevationScale`     | `Number`          | `1`                           | Elevation scale multiplier for the column's height.                                            |
| `filled`             | `Boolean`         | `true`                        | Whether to draw a filled column (solid fill).                                                  |
| `stroked`            | `Boolean`         | `false`                       | Whether to draw an outline around the edges of the column.                                     |
| `extruded`           | `Boolean`         | `true`                        | Whether to extrude the column into 3D.                                                         |
| `wireframe`          | `Boolean`         | `false`                       | Whether to enable wireframe rendering for the column.                                          |
| `flatShading`        | `Boolean`         | `false`                       | Enables flat shading for vertical surfaces if `extruded` is true.                              |
| `radiusUnits`        | `String`          | `'meters'`                    | Units used for the column radius (`'pixels'`, `'meters'`, etc.).                               |
| `lineWidthUnits`     | `String`          | `'meters'`                    | Units for the column outline's line width.                                                    |
| `lineWidthScale`     | `Number`          | `1`                           | Multiplier for the column outline's line width.                                                |
| `lineWidthMinPixels` | `Number`          | `0`                           | Minimum width of the column outline in pixels.                                                 |
| `lineWidthMaxPixels` | `Number`          | `Number.MAX_SAFE_INTEGER`     | Maximum width of the column outline in pixels.                                                 |
| `material`           | `Object\|Boolean`  | `true`                        | Material settings for lighting effects (works if `extruded` is `true`). See [Lighting Guide](https://deck.gl/docs/developer-guide/using-lighting). |
| `getPosition`        | `Function`        | `object => object.position`   | Accessor to compute the position of the column's center.                                       |
| `getFillColor`       | `Function\|Array`  | `[0, 0, 0, 255]`              | Accessor for the fill color of the column.                                                     |
| `getLineColor`       | `Function\|Array`  | `[0, 0, 0, 255]`              | Accessor for the outline color of the column.                                                  |
| `getElevation`       | `Function\|Number` | `1000`                        | Accessor for the elevation (height) of the column.                                             |
| `getLineWidth`       | `Function\|Number` | `1`                           | Accessor for the width of the column outline.                                                  |

## Events

The following events are emitted by the `ColumnLayer` component and can be used to handle user interactions or other events:

| Event         | Description                                |
|---------------|--------------------------------------------|
| `hover`       | Triggered when hovering over a column.     |
| `click`       | Triggered when a column is clicked.        |
| `drag`        | Triggered during a drag event.             |
| `dragStart`   | Triggered at the start of a drag event.    |
| `dragEnd`     | Triggered at the end of a drag event.      |
| `dataLoad`    | Triggered when layer data is loaded.       |
| `error`       | Triggered when there is an error loading the layer. |


---

For further details, refer to the official [`@deck.gl/layers`](https://deck.gl/docs/api-reference/layers/column-layer) documentation.