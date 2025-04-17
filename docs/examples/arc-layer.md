<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ArcLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Arc Layer Example


Here’s an example that demonstrates how to use the **Arc Layer** to render arcs on a map:

```vue
<script setup>
  import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
  import { ArcLayer } from '@vue-deckgl-suite/layers'
</script>

<template>
  <DeckGL
    :getTooltip="({ object }) => object && `${object.from.name} to ${object.to.name}`"
  >
    <Map
      height="500px"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    >
      <ArcLayer
        id="2"
        data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-segments.json"
        :getSourcePosition="(d) => d.from.coordinates"
        :getTargetPosition="(d) => d.to.coordinates"
        :getSourceColor="(d) => [Math.sqrt(d.inbound), 140, 0]"
        :getTargetColor="(d) => [Math.sqrt(d.outbound), 140, 0]"
        :getWidth="12"
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

<ClientOnly>
    <DeckGL
    :getTooltip="({ object }) => object && `${object.from.name} to ${object.to.name}`"
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
      <ArcLayer
        id="arc-layer"
        data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-segments.json"
        :getSourcePosition="(d) => d.from.coordinates"
        :getTargetPosition="(d) => d.to.coordinates"
        :getSourceColor="(d) => [Math.sqrt(d.inbound), 140, 0]"
        :getTargetColor="(d) => [Math.sqrt(d.outbound), 140, 0]"
        :getWidth="12"
        :pickable="true"
        @click="(info, event) => console.log(info, event)"
      />
    </Map>
  </DeckGL>
</ClientOnly>