<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { IconLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

const iconAtlas = new URL('icon-data/location-icon-atlas.png', import.meta.url).href;
const iconMapping = new URL('icon-data/location-icon-mapping.json', import.meta.url).href;
</script>

# Icon Layer Example

Here’s an example of how to use the **Icon Layer**, rendering icons on a map dynamically:

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { IconLayer } from '@vue-deckgl-suite/layers';

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

const iconAtlas = new URL('icon-data/location-icon-atlas.png', import.meta.url).href;
const iconMapping = new URL('icon-data/location-icon-mapping.json', import.meta.url).href;
</script>

<template>
  <DeckGL>
    <Map
      height="100vh"
      :style
      :center="[-35, 36.7]"
      :zoom="1.8"
      :max-zoom="20"
      :pitch="0"
      :bearing="0"
    />
    <icon-layer
      id="icon"
      data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/icon/meteorites.json"
      :pickable="true"
      :get-position="d => d.coordinates"
      :icon-atlas
      :icon-mapping
      :get-icon="d => 'marker'"
      size-units="meters"
      :size-scale="2000"
      :size-min-pixels="6"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```

<ClientOnly>
<DeckGL>
    <Map
      height="400px"
      :style
      :center="[-35, 36.7]"
      :zoom="1.8"
      :max-zoom="20"
      :pitch="0"
      :bearing="0"
    />
    <icon-layer
      id="icon"
      data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/icon/meteorites.json"
      :pickable="true"
      :get-position="d => d.coordinates"
      :icon-atlas
      :icon-mapping
      :get-icon="d => 'marker'"
      size-units="meters"
      :size-scale="2000"
      :size-min-pixels="6"
    />
  </DeckGL>
</ClientOnly>