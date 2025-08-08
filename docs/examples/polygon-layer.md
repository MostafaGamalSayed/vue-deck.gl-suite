<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { PolygonLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Polygon Layer Example

## Dataset Used
- San Francisco Zip Codes: polygons with population and area attributes.
- Source: https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-zipcodes.json

## Map Visualization
Zip code polygons styled by population density with extrusions and borders:

<ClientOnly>
<DeckGL 
  :get-tooltip="({ object }) => 
    object && `${object.zipcode}\nPopulation: ${object.population}`">
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

```vue
<script setup>
  import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
  import { PolygonLayer } from '@vue-deckgl-suite/layers';
</script>

<template>
  <DeckGL 
    :get-tooltip="({ object }) => 
      object && `${object.zipcode}\nPopulation: ${object.population}`">
    <Map
      height="100vh"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[-122.4, 37.74]"
      :zoom="11"
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