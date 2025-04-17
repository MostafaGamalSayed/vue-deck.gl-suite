<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ColumnLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Column Layer Example

Here’s an example that demonstrates the **Column Layer** visualizing aggregated data:

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ColumnLayer } from '@vue-deckgl-suite/layers';

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';
</script>

<template>
  <DeckGL :getTooltip="({ object }) => object && `height: ${object.value * 5000}m`">
    <Map
      height="100vh"
      :style
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    />
    <ColumnLayer
      id="ColumnLayer"
      data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/hexagons.json"
      :diskResolution="12"
      :extruded="true"
      :radius="250"
      :elevationScale="5000"
      :getElevation="(d) => d.value"
      :getFillColor="(d) => [48, 128, d.value * 255, 255]"
      :getPosition="(d) => d.centroid"
      :pickable="true"
    />
  </DeckGL>
</template>
```

<ClientOnly>
    <DeckGL
    :getTooltip="({ object }) => object && `height: ${object.value * 5000}m`"
  >
    <Map
      height="400px"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    >
      <ColumnLayer
        id="ColumnLayer"
        data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/hexagons.json"
        :diskResolution="12"
        :extruded="true"
        :radius="250"
        :elevationScale="5000"
        :getElevation="(d) => d.value"
        :getFillColor="(d) => [48, 128, d.value * 255, 255]"
        :getPosition="(d) => d.centroid"
        :pickable="true"
      />
    </Map>
  </DeckGL>
</ClientOnly>