<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { TripsLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>


# Trips Example

Here’s an example that demonstrates how to use the **Trips Layer** to render animated trajectories on a map:

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { TripsLayer } from '@vue-deckgl-suite/layers';

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';
</script>

<template>
  <DeckGL>
    <Map height="100vh" :style :center="[-122.4, 37.74]" :zoom="11">
      <TripsLayer
        id="TripsLayer"
        data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf.trips.json"
        :getPath="(d) => d.waypoints.map((p) => p.coordinates)"
        :getTimestamps="(d) => d.waypoints.map((p) => p.timestamp - 1554772579000)"
        :getColor="[253, 128, 93]"
        :currentTime="500"
        :trailLength="600"
        :capRounded="true"
        :jointRounded="true"
        :widthMinPixels="8"
      />
    </Map>
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
            :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
            :center="[-122.4, 37.74]"
            :zoom="11"
            :max-zoom="20"
            :pitch="30"
        >
            <TripsLayer
                id="TripsLayer"
                data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf.trips.json"
                :getPath="(d) => d.waypoints.map((p) => p.coordinates)"
                :getTimestamps="(d) => d.waypoints.map((p) => p.timestamp - 1554772579000)"
                :getColor="[253, 128, 93]"
                :currentTime="500"
                :trailLength="600"
                :capRounded="true"
                :jointRounded="true"
                :widthMinPixels="8"
            />
        </Map>
    </DeckGL>
</ClientOnly>