<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { GeoJsonLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Geojson Layer Example

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