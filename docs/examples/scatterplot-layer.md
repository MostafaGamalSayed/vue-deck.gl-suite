<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ScatterplotLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Scatterplot Layer Example

## Dataset Used
- Bay Area Rapid Transit (BART) Stations: real station locations in the San Francisco Bay Area.
- Source: https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json

## Map Visualization
Here’s a live example rendering BART stations as circles, with radius based on station exits:

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
    >
      <ScatterplotLayer
        id="scatterplot-layer"
        :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json'"
        :stroked="true"
        :getPosition="(d) => d.coordinates"
        :getRadius="(d) => Math.sqrt(d.exits)"
        :getFillColor="[255, 140, 0]"
        :getLineColor="[0, 0, 0]"
        :getLineWidth="10"
        :radiusScale="6"
        :pickable="true"
        @click="(info, event) => console.log(info, event)"
      />
    </Map>
  </DeckGL>
</ClientOnly>

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ScatterplotLayer } from '@vue-deckgl-suite/layers';
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
  >
    <ScatterplotLayer
      id="scatterplot-layer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json'"
      :stroked="true"
      :getPosition="(d) => d.coordinates"
      :getRadius="(d) => Math.sqrt(d.exits)"
      :getFillColor="[255, 140, 0]"
      :getLineColor="[0, 0, 0]"
      :getLineWidth="10"
      :radiusScale="6"
      :pickable="true"
      @click="(info, event) => console.log(info, event)"
    />
  </Map>
</DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```