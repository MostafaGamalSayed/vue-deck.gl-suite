<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { TripsLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>


# Trips Layer

The **Trips Layer** is a feature of `@vue-deckgl-suite/layers` that lets you render animated trips or trajectories over time. This is particularly useful for visualizing vehicles, pathways, courier routes, or transportation data on a map.

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

## Usage

To use the `TripsLayer`, import it into your Vue component and configure its props to customize its appearance and animation. The `TripsLayer` animates objects along specified paths based on a given time slider or timestamp.

### Example

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

## Props

Inherits from all [Base Layer](https://deck.gl/docs/api-reference/core/layer#properties) properties.

Below are the props available for configuring the `TripsLayer`:

| Prop              | Type               | Default                   | Description                                                                                      |
|-------------------|--------------------|---------------------------|--------------------------------------------------------------------------------------------------|
| `fadeTrail`       | `Boolean`         | `true`                    | Whether the trail fades over time, allowing for smooth animation.                               |
| `trailLength`     | `Number`          | `120`                     | The length of the visible trail in milliseconds. Controls how much of the path is shown.        |
| `currentTime`     | `Number`          | `0`                       | The current time for animating the layer in milliseconds since start.                           |
| `widthUnits`      | `String`          | `'meters'`                | Specifies the units for the path width (e.g., `meters`, `pixels`).                              |
| `widthScale`      | `Number`          | `1`                       | A multiplier for the path width.                                                                |
| `widthMinPixels`  | `Number`          | `0`                       | Minimum width of the path in pixels.                                                            |
| `widthMaxPixels`  | `Number`          | `Number.MAX_SAFE_INTEGER` | Maximum width of the path in pixels.                                                            |
| `jointRounded`    | `Boolean`         | `false`                   | Whether to use rounded joints between path segments.                                            |
| `capRounded`      | `Boolean`         | `false`                   | Whether to use rounded ends for the path.                                                      |
| `getPath`         | `Function`        | `d => d.path`             | A function that specifies the coordinates of the path `[longitude, latitude]`.                  |
| `getColor`        | `Function/Array`  | `[0, 0, 0, 255]`          | Function or array that determines the color of the path.                                         |
| `getTimestamps`   | `Function`        | `d => d.timestamps`       | Function to get timestamps corresponding to each point in the path.                              |

## Events

The following events are emitted by the `TripsLayer` component and can be used to handle user interaction and debugging:

| Event         | Description                               |
|---------------|-------------------------------------------|
| `hover`       | Triggered when hovering over an animated trip.      |
| `click`       | Triggered when a trip in the layer is clicked.         |
| `drag`        | Triggered during a drag event.            |
| `dragStart`   | Triggered at the start of a drag event.   |
| `dragEnd`     | Triggered at the end of a drag event.     |
| `dataLoad`    | Triggered when layer data is successfully loaded.      |
| `error`       | Triggered when an error occurs in the layer.         |

---

For further details, refer to the official [`@deck.gl/geo-layers`](https://deck.gl/docs/api-reference/geo-layers/trips-layer) documentation.