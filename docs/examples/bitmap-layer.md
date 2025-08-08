<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { BitmapLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Bitmap Layer Example

## Dataset Used
- Raster image of San Francisco districts used by deck.gl website examples
- Source: https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-districts.png

## Map Visualization

<ClientOnly>
  <DeckGL :getTooltip="({ bitmap }) => bitmap && `${bitmap.pixel}`">
    <Map
      height="400px"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[-122.4, 37.74]"
      :zoom="11"
    />
    <BitmapLayer
      id="BitmapLayer"
      :bounds="[-122.519, 37.7045, -122.355, 37.829]"
      :image="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-districts.png'"
      :pickable="true"
    />
  </DeckGL>
</ClientOnly>

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { BitmapLayer } from '@vue-deckgl-suite/layers';
</script>

<template>
  <DeckGL :getTooltip="({ bitmap }) => bitmap && `${bitmap.pixel}`">
    <Map height="500px" :style :center="[-122.4, 37.74]" :zoom="11" />
    <BitmapLayer
      id="BitmapLayer"
      :bounds="[-122.519, 37.7045, -122.355, 37.829]"
      :image="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-districts.png'"
      :pickable="true"
    />
  </DeckGL>
</template>
```
