<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ContourLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Contour Layer Example

Here’s an example that demonstrates how to use the **Contour Layer** to render contours on a map:

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ContourLayer } from '@vue-deckgl-suite/layers';
</script>

<template>
  <DeckGL :getTooltip="({ object }) => object && `threshold: ${object.contour.threshold}`">
    <Map
      height="500px"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    >
      <ContourLayer
        id="ContourLayer"
        :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json'"
        :cellSize="200"
        :contours="[
          { threshold: 1, color: [255, 0, 0], strokeWidth: 2, zIndex: 1 },
          { threshold: [3, 10], color: [55, 0, 55], zIndex: 0 },
          { threshold: 5, color: [0, 255, 0], strokeWidth: 6, zIndex: 2 },
          { threshold: 15, color: [0, 0, 255], strokeWidth: 4, zIndex: 3 }
        ]"
        :getPosition="(d) => d.COORDINATES"
        :getWeight="(d) => d.SPACES"
        :pickable="true"
      />
    </Map>
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```

<ClientOnly>
<DeckGL :getTooltip="({ object }) => object && `threshold: ${object.contour.threshold}`">
  <Map
    height="400px"
    :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
    :center="[-122.4, 37.74]"
    :zoom="11"
    :max-zoom="20"
    :pitch="30"
    :bearing="0"
  >
    <ContourLayer
      id="ContourLayer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json'"
      :cellSize="200"
      :contours="[
        { threshold: 1, color: [255, 0, 0], strokeWidth: 2, zIndex: 1 },
        { threshold: [3, 10], color: [55, 0, 55], zIndex: 0 },
        { threshold: 5, color: [0, 255, 0], strokeWidth: 6, zIndex: 2 },
        { threshold: 15, color: [0, 0, 255], strokeWidth: 4, zIndex: 3 }
      ]"
      :getPosition="(d) => d.COORDINATES"
      :getWeight="(d) => d.SPACES"
      :pickable="true"
    />
  </Map>
</DeckGL>
</ClientOnly>
````