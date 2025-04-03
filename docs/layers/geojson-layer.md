<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { GeoJsonLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# GeoJson Layer

The **GeoJson Layer** is a feature of `@vue-deckgl-suite/layers` that lets you visualize GeoJSON data on a map. It supports rendering points, lines, and polygons with various styling options, as well as elevation and extrusion for 3D visualizations.

<ClientOnly>
    <DeckGL :getTooltip="({ object }) => object && object.name">
        <Map 
            height="400px"
            :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
            :center="[-122.4, 37.74]"
            :zoom="11"
            :max-zoom="18"
            :pitch="30"
        >
            <GeoJsonLayer
                id="deck-gl-geojson"
                data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart.geo.json"
                pointType="circle+text"
                :stroked="false"
                :filled="true"
                :extruded="true"
                :getElevation="30"
                :getFillColor="[160, 160, 180, 200]"
                :getLineColor="
                (f) => {
                    const hex = f.properties.color
                    // convert to RGB
                    return hex ? hex.match(/[0-9a-f]{2}/g).map((x) => parseInt(x, 16)) : [0, 0, 0]
                }"
                :getLineWidth="40"
                :getPointRadius="4"
                :getText="(f) => f.properties.name"
                :getTextSize="12"
            />
        </Map>
    </DeckGL>
</ClientOnly>

## Usage

To use the `GeoJsonLayer`, import it into your Vue component and configure its props. The `GeoJsonLayer` component can handle complex GeoJSON data structures, enabling visualization of points, lines, and polygons with highly customizable styling options.

### Example

Here’s an example demonstrating how to render a GeoJSON layer on a map:

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { GeoJsonLayer } from '@vue-deckgl-suite/layers';

const style = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json';
</script>

<template>
  <DeckGL :get-tooltip="({ object }) => object && object.name">
    <Map height="100vh" :style :center="[-122.4, 37.74]" :zoom="11" />
    <GeoJsonLayer
      id="deck-gl-geojson"
      data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart.geo.json"
      pointType="circle+text"
      :stroked="false"
      :filled="true"
      :extruded="true"
      :getElevation="30"
      :getFillColor="[160, 160, 180, 200]"
      :getLineColor="
        (f) => {
          const hex = f.properties.color
          // convert to RGB
          return hex ? hex.match(/[0-9a-f]{2}/g).map((x) => parseInt(x, 16)) : [0, 0, 0]
        }
      "
      :getLineWidth="40"
      :getPointRadius="4"
      :getText="(f) => f.properties.name"
      :getTextSize="12"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```

## Props

Below is a table of props you can use to configure the `GeoJsonLayer`:

| Prop                  | Type             | Default                     | Description                                                                                                |
|-----------------------|------------------|-----------------------------|------------------------------------------------------------------------------------------------------------|
| `pointType`           | `String`        | `'circle'`                  | Specifies how points are rendered. Options include `circle`, `icon`, `text`, or combinations (e.g., `circle+text`). |
| `filled`              | `Boolean`       | `true`                      | Whether polygons and circles are filled with a solid color.                                                 |
| `stroked`             | `Boolean`       | `true`                      | Whether to render borders for polygons and lines.                                                          |
| `extruded`            | `Boolean`       | `false`                     | Whether to extrude polygons into 3D. Enables elevation for polygons.                                        |
| `wireframe`           | `Boolean`       | `false`                     | Whether to draw a wireframe of the polygon or extruded structure.                                           |
| `elevationScale`      | `Number`        | `1`                         | Scale factor for elevation extrusion.                                                                      |
| `lineWidthUnits`      | `String`        | `'meters'`                  | The units in which line widths are measured (`meters`, `pixels`).                                           |
| `lineWidthScale`      | `Number`        | `1`                         | A multiplier for line width.                                                                               |
| `lineWidthMinPixels`  | `Number`        | `0`                         | Minimum width of lines in pixels.                                                                          |
| `lineWidthMaxPixels`  | `Number`        | `Number.MAX_SAFE_INTEGER`   | Maximum width of lines in pixels.                                                                          |
| `lineCapRounded`      | `Boolean`       | `false`                     | Whether to use rounded caps for lines.                                                                     |
| `lineJointRounded`    | `Boolean`       | `false`                     | Whether to use rounded joints for line segments.                                                           |
| `getFillColor`        | `Function/Array`| `[0, 0, 0, 255]`            | Function or array that specifies the fill color for polygons and points.                                    |
| `getLineColor`        | `Function/Array`| `[0, 0, 0, 255]`            | Function or array that specifies the line color for lines and polygon outlines.                             |
| `getElevation`        | `Function/Number`| `() => 1000`               | Function or number to specify the elevation of polygons and points.                                         |
| `getLineWidth`        | `Function/Number`| `() => 1`                  | Function or number that specifies the width of lines.                                                      |
| `getPointRadius`      | `Function/Number`| `() => 1`                  | Function or number to specify the radius of points.                                                        |
| `pointRadiusUnits`    | `String`        | `'meters'`                  | Units for measuring the point radius (`meters`, `pixels`).                                                 |
| `getText`             | `Function`      | `() => ''`                  | Function that provides a text label for features.                                                          |
| `getTextColor`        | `Function/Array`| `[0, 0, 0, 255]`            | Function or array specifying the text color.                                                               |
| `getTextSize`         | `Function/Number`| `12`                       | Function or number to set the text size.                                                                   |

## Events

The following events are emitted by the `GeoJsonLayer` component and can be used to handle user interactions:

| Event         | Description                               |
|---------------|-------------------------------------------|
| `hover`       | Triggered when hovering over a feature.   |
| `click`       | Triggered when a feature is clicked.      |
| `drag`        | Triggered during a drag event.            |
| `dragStart`   | Triggered at the start of a drag event.   |
| `dragEnd`     | Triggered at the end of a drag event.     |
| `dataLoad`    | Triggered when the layer data is loaded.  |
| `error`       | Triggered when there is an error.         |

---

For further details, refer to the official [`@deck.gl/layers`](https://deck.gl/docs/api-reference/layers/geojson-layer) documentation.