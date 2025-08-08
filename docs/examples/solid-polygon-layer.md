<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { SolidPolygonLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Solid Polygon Layer Example

## Map Visualization
Filled and/or extruded polygons using San Francisco zip codes data.

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