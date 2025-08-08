<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { PathLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Path Layer Example

## Dataset Used
- Bay Area Rapid Transit (BART) Lines: real transit lines with line colors.
- Source: https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-lines.json

## Map Visualization
The paths show the BART lines with widths and colors derived from the dataset:

<ClientOnly>
    <DeckGL :getTooltip="({ object }) => object && object.name">
        <Map 
            height="400px" 
            :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`" 
            :center="[-122.4, 37.74]" 
            :zoom="11" 
            :max-zoom="20" 
            :pitch="30"
        >
            <PathLayer
                id="PathLayer"
                data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-lines.json"
                :getColor="
                (d) => {
                  const hex = d.color
                  // convert to RGB
                  return hex.match(/[0-9a-f]{2}/g).map((x) => parseInt(x, 16))
                }"
                :getPath="(d) => d.path"
                :getWidth="100"
                :pickable="true"
            />
        </Map>
    </DeckGL>
</ClientOnly>

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { PathLayer } from '@vue-deckgl-suite/layers';

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';
</script>

<template>
  <DeckGL :get-tooltip="({ object }) => object && object.name">
    <Map height="100vh" :style :center="[-122.4, 37.74]" :zoom="11">
      <PathLayer
        id="PathLayer"
        data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-lines.json"
        :getColor="
        (d) => {
          const hex = d.color
          // convert to RGB
          return hex.match(/[0-9a-f]{2}/g).map((x) => parseInt(x, 16))
        }"
        :getPath="(d) => d.path"
        :getWidth="100"
        :pickable="true"
      />
    </Map>
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```