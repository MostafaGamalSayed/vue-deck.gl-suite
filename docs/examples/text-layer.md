<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { TextLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Text Layer Example

## Map Visualization
Renders station names as labels at given coordinates.

<ClientOnly>
<DeckGL>
  <Map
    height="400px"
    :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
    :center="[-122.4, 37.74]"
    :zoom="11"
    :max-zoom="20"
    :pitch="30"
    :bearing="0"
  />
  <TextLayer
    id="TextLayer"
    :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json'"
    :getText="(d) => d.name"
    :getPosition="(d) => d.coordinates"
    :getColor="[255, 255, 255]"
    :getSize="24"
    :sizeUnits="'pixels'"
    :billboard="true"
  />
</DeckGL>
</ClientOnly>

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { TextLayer } from '@vue-deckgl-suite/layers';
</script>

<template>
  <DeckGL>
    <Map height="500px" :style :center="[-122.4, 37.74]" :zoom="11" />
    <TextLayer
      id="TextLayer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json'"
      :getText="(d) => d.name"
      :getPosition="(d) => d.coordinates"
      :getColor="[255, 255, 255]"
      :getSize="24"
      :sizeUnits="'pixels'"
      :billboard="true"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```