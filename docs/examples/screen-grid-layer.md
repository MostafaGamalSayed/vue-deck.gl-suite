<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ScreenGridLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Screen Grid Layer Example

## Map Visualization
Aggregates point data into screen-aligned grid cells and colors them by aggregated value.

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
  <ScreenGridLayer
    id="ScreenGridLayer"
    :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json'"
    :getPosition="(d) => d.COORDINATES"
    :getWeight="(d) => d.SPACES"
    :cellSizePixels="30"
  />
</DeckGL>
</ClientOnly>

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ScreenGridLayer } from '@vue-deckgl-suite/layers';
</script>

<template>
  <DeckGL>
    <Map height="500px" :style :center="[-122.4, 37.74]" :zoom="11" />
    <ScreenGridLayer
      id="ScreenGridLayer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json'"
      :getPosition="(d) => d.COORDINATES"
      :getWeight="(d) => d.SPACES"
      :cellSizePixels="30"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```