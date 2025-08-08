<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { SolidPolygonLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Solid Polygon Layer

The SolidPolygonLayer renders filled and/or extruded polygons. Great for administrative boundaries and choropleths.

<ClientOnly>
<DeckGL :get-tooltip="({ object }) => object && `${object.zipcode}\nPopulation: ${object.population}`">
  <Map
    height="400px"
    :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
    :center="[-122.4, 37.74]"
    :zoom="11"
    :max-zoom="20"
    :pitch="30"
    :bearing="0"
  />
  <SolidPolygonLayer
    id="SolidPolygonLayer"
    :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-zipcodes.json'"
    :getPolygon="(d) => d.contour"
    :getElevation="(d) => d.population / d.area / 10"
    :getFillColor="(d) => [d.population / d.area / 60, 140, 0]"
    :getLineColor="[255, 255, 255]"
    :extruded="true"
    :wireframe="true"
    :pickable="true"
  />
</DeckGL>
</ClientOnly>

## Usage

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { SolidPolygonLayer } from '@vue-deckgl-suite/layers';
</script>

<template>
  <DeckGL :get-tooltip="({ object }) => object && `${object.zipcode}\nPopulation: ${object.population}`">
    <Map height="500px" :style :center="[-122.4, 37.74]" :zoom="11" />
    <SolidPolygonLayer
      id="SolidPolygonLayer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-zipcodes.json'"
      :getPolygon="(d) => d.contour"
      :getElevation="(d) => d.population / d.area / 10"
      :getFillColor="(d) => [d.population / d.area / 60, 140, 0]"
      :getLineColor="[255, 255, 255]"
      :extruded="true"
      :wireframe="true"
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

Below are the props available for configuring the `SolidPolygonLayer`:

| Prop          | Type               | Default                    | Description                                                   |
|---------------|--------------------|----------------------------|---------------------------------------------------------------|
| `extruded`    | `Boolean`          | `false`                    | Whether polygons are extruded into 3D.                        |
| `wireframe`   | `Boolean`          | `false`                    | Render polygon wireframes (only when extruded).               |
| `filled`      | `Boolean`          | `true`                     | Fill polygon interiors.                                       |
| `stroked`     | `Boolean`          | `false`                    | Draw polygon outlines.                                        |
| `getPolygon`  | `Function`         | `x => x.polygon`           | Accessor for polygon coordinates.                             |
| `getElevation`| `Number\|Function`  | `1000`                     | Elevation accessor/value for polygons.                         |
| `getFillColor`| `Array\|Function`   | `[0, 0, 0, 255]`           | Fill color accessor.                                          |
| `getLineColor`| `Array\|Function`   | `[0, 0, 0, 255]`           | Line color accessor.                                          |

## Events

The following events are emitted by the `SolidPolygonLayer` component and can be used to handle user interactions or other layer events:

| Event       | Description                                   |
|-------------|-----------------------------------------------|
| `hover`     | Triggered when hovering over a polygon.        |
| `click`     | Triggered when a polygon is clicked.           |
| `drag`      | Triggered during a drag event.                 |
| `dragStart` | Triggered at the start of a drag event.        |
| `dragEnd`   | Triggered at the end of a drag event.          |
| `dataLoad`  | Triggered when layer data is loaded.           |
| `error`     | Triggered when there is an error in the layer. |
