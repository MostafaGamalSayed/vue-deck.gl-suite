<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { TripsLayer } from '@vue-deckgl-suite/layers';
import { onMounted, onUnmounted, ref } from 'vue';
import 'maplibre-gl/dist/maplibre-gl.css';

// Animate currentTime for TripsLayer
const currentTime = ref(0)
let animation

onMounted(() => {
  const start = performance.now()
  const loop = (t) => {
    // progress in seconds and loop within dataset duration window
    currentTime.value = ((t - start) / 10) % 1200
    animation = requestAnimationFrame(loop)
  }
  animation = requestAnimationFrame(loop)
})

onUnmounted(() => {
  if (animation) cancelAnimationFrame(animation)
})
</script>


# Trips Layer Example

## Dataset Used
- San Francisco Uber/Lyft trips sample with waypoints and timestamps.
- Source: https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf.trips.json

## Map Visualization
Animated trajectories of trips over time with configurable trail length and color:

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
                :currentTime="currentTime"
                :trailLength="600"
                :capRounded="true"
                :jointRounded="true"
                :widthMinPixels="8"
            />
        </Map>
    </DeckGL>
</ClientOnly>

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { TripsLayer } from '@vue-deckgl-suite/layers';
import { onMounted, onUnmounted, ref } from 'vue';

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

const currentTime = ref(0);
let animation;

onMounted(() => {
  const start = performance.now();
  const loop = (t) => {
    // advance time in seconds, loop every ~1200s span in dataset
    currentTime.value = ((t - start) / 10) % 1200;
    animation = requestAnimationFrame(loop);
  };
  animation = requestAnimationFrame(loop);
});

onUnmounted(() => {
  if (animation) cancelAnimationFrame(animation);
});
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
        :currentTime="currentTime"
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