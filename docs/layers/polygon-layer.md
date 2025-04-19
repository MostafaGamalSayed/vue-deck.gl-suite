<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { PolygonLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Polygon Layer

The **Polygon Layer** in `@vue-deckgl-suite/layers` is a versatile layer designed for rendering and visualizing polygons on a map. With various customization options like fill color, line color, elevation, and interactivity, it provides a powerful tool for visualizing geospatial polygon data in both 2D and 3D.

---

<ClientOnly>
<DeckGL :get-tooltip="({ object }) => object && `${object.zipcode}\nPopulation: ${object.population}`">
  <Map
    height="400px"
    :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
    :center="[-122.4, 37.74]"
    :zoom="11"
    :maxZoom="20"
    :pitch="30"
    :bearing="0"
  />
  <PolygonLayer
    id="PolygonLayer"
    :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-zipcodes.json'"
    :getPolygon="(d) => d.contour"
    :getElevation="(d) => d.population / d.area / 10"
    :getFillColor="(d) => [d.population / d.area / 60, 140, 0]"
    :getLineColor="[255, 255, 255]"
    :getLineWidth="20"
    :lineWidthMinPixels="1"
    :pickable="true"
  />
</DeckGL>
</ClientOnly>

---

## Usage

To use the `PolygonLayer`, import it into your Vue component and define the necessary props to customize the rendering of polygons on a map.

### Example

Here’s an example that demonstrates how to use the **Polygon Layer** to render interactive polygons on a map:

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { PolygonLayer } from '@vue-deckgl-suite/layers';
</script>

<template>
  <DeckGL :get-tooltip="({ object }) => object && `${object.zipcode}\nPopulation: ${object.population}`">
    <Map
      height="100vh"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[-122.4, 37.74]"
      :zoom="11"
      :maxZoom="20"
      :pitch="30"
      :bearing="0"
    />
    <PolygonLayer
      id="PolygonLayer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-zipcodes.json'"
      :getPolygon="(d) => d.contour"
      :getElevation="(d) => d.population / d.area / 10"
      :getFillColor="(d) => [d.population / d.area / 60, 140, 0]"
      :getLineColor="[255, 255, 255]"
      :getLineWidth="20"
      :lineWidthMinPixels="1"
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

The **Polygon Layer** supports several props for customization, including inherited props from the Base Layer and additional options specific to polygons.

| **Prop**                  | **Type**           | **Default**               | **Description**                                                                                   |
|---------------------------|--------------------|---------------------------|---------------------------------------------------------------------------------------------------|
| `data`                    | `String|Array`     | `undefined`               | URL or array of polygon data.                                                                    |
| `getPolygon`              | `Function`         | `(f) => f.polygon`        | Specifies how to access polygon coordinates from the data.                                       |
| `getFillColor`            | `Function|Array`   | `[0, 0, 0, 255]`          | Sets the fill color of the polygons.                                                             |
| `getLineColor`            | `Function|Array`   | `[0, 0, 0, 255]`          | Sets the color of the polygon outline.                                                           |
| `getLineWidth`            | `Function|Number`  | `1`                       | Specifies the width of the polygon's border.                                                     |
| `getElevation`            | `Function|Number`  | `1000`                    | Specifies the height of the polygon when `extruded` is enabled.                                  |
| `stroked`                 | `Boolean`          | `true`                    | Determines whether the polygon's outline is rendered.                                            |
| `filled`                  | `Boolean`          | `true`                    | Determines whether the polygon is filled.                                                        |
| `extruded`                | `Boolean`          | `false`                   | Enables 3D extrusion of the polygons.                                                            |
| `elevationScale`          | `Number`           | `1`                       | Scaling factor for polygon elevations.                                                           |
| `wireframe`               | `Boolean`          | `false`                   | If true, renders the 3D polygons as a wireframe.                                                 |
| `pickable`                | `Boolean`          | `true`                    | Enables user interaction events like hover and click.                                            |
| `lineWidthUnits`          | `String`           | `'meters'`                | Unit for line width (`pixels` or `meters`).                                                      |
| `lineWidthScale`          | `Number`           | `1`                       | A scaling multiplier for the line width.                                                         |
| `lineWidthMinPixels`      | `Number`           | `0`                       | Minimum pixel width of the line.                                                                 |
| `lineWidthMaxPixels`      | `Number`           | `Number.MAX_SAFE_INTEGER` | Maximum pixel width of the line.                                                                 |

## Events

The **Polygon Layer** emits the following events for handling user interactions:

| **Event**     | **Description**                             |
|---------------|---------------------------------------------|
| `hover`       | Triggered when a polygon is hovered over.   |
| `click`       | Triggered when a polygon is clicked.        |
| `drag`        | Triggered during a drag event.              |
| `dragStart`   | Triggered at the beginning of a drag event. |
| `dragEnd`     | Triggered at the end of a drag event.       |
| `dataLoad`    | Triggered when the layer successfully loads data. |
| `error`       | Triggered when an error occurs.             |

---

For further details, refer to the official [Deck.gl PolygonLayer Documentation](https://deck.gl/docs/api-reference/layers/polygon-layer).