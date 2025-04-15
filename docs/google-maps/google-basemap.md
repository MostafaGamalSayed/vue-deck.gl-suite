<script setup>
import { Map } from '@vue-deckgl-suite/google-maps';

const GOOGLE_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY;

function handleMapLoad() {
  console.log('Google Map Loaded');
}
</script>


# Google Map Component

The `Map` component in the `@vue-deckgl-suite/google-maps` package integrates **Google Maps** into Vue applications for seamless integration with Deck.gl layers. It offers a flexible interface to configure numerous map properties, handle lifecycle events, and support advanced interactions.

## Usage

Here’s an example of how to use the `Map` component:

```vue
<script setup>
import { Map } from '@vue-deckgl-suite/google-maps';

function handleMapLoad() {
  console.log('Google Map Loaded');
}
</script>

<template>
  <Map
    api-key="<YOUR_API_KEY>"
    height="500px"
    :center="{ lat: 37.7749, lng: -122.4194 }"
    :zoom="12"
    map-type-id="roadmap"
    @tilesloaded="handleMapLoad"
  >
    <template #default>
      <!-- Add layers or custom overlays here -->
    </template>
  </Map>
</template>
```
<ClientOnly>
    <Map
    :api-key="GOOGLE_KEY"
    height="500px"
    :center="{ lat: 37.7749, lng: -122.4194 }"
    :zoom="12"
    map-type-id="roadmap"
    @tilesloaded="handleMapLoad"
  >
    <template #default>
      <!-- Add layers or custom overlays here -->
    </template>
  </Map>
</ClientOnly>


## Props

The `Map` component offers a variety of props to customize the behavior, appearance, and controls of the map. These include:

| Prop                  | Type                                       | Default          | Description                                                                                  |
|-----------------------|--------------------------------------------|------------------|----------------------------------------------------------------------------------------------|
| `width`               | `String` or `Number`                      | `'100%'`         | The width of the map container.                                                              |
| `height`              | `String` or `Number`                      | `'100%'`         | The height of the map container.                                                             |
| `apiKey`              | `String`                                  | `""`             | Your Google Maps API key for initializing the map.                                           |
| `center`              | `Object`                                  | `{ lat: 0, lng: 0 }` | The initial geographical center of the map.                                                  |
| `zoom`                | `Number`                                  | `8`              | The initial zoom level of the map.                                                           |
| `mapTypeId`           | `String`                                  | `'roadmap'`      | Defines the map's type. Acceptable values: `roadmap`, `satellite`, `hybrid`, `terrain`.      |
| `disableDefaultUi`    | `Boolean`                                 | `false`          | Whether to disable all default map controls.                                                 |
| `fullscreenControl`   | `Boolean`                                 | `true`           | Enables or disables the fullscreen control.                                                  |
| `gestureHandling`     | `String`                                  | `"auto"`         | Defines how the map handles gestures (e.g., `cooperative`, `greedy`, `none`, `auto`).        |
| `zoomControl`         | `Boolean`                                 | `true`           | Enables or disables the zoom control.                                                        |
| `styles`              | `Array<google.maps.MapTypeStyle>`         | `null`           | Custom styles for the map (e.g., aesthetic map customization).                               |


## Events

The `Map` component emits various events to enable you to react to user interactions or lifecycle changes. These include:

| Event                     | Description                                                                                 |
|---------------------------|---------------------------------------------------------------------------------------------|
| `tilesloaded`             | Triggered when the map tiles have fully loaded.                                             |
| `center_changed`          | Triggered whenever the map's center changes.                                                |
| `zoom_changed`            | Triggered whenever the map's zoom level changes.                                            |
| `click`                   | Triggered when the map is clicked.                                                          |
| `drag`                    | Fired during a drag operation.                                                              |
| `idle`                    | Triggered when the map becomes idle (all animations and movements have completed).          |
| `dblclick`                | Triggered when the map is double-clicked.                                                   |
| `mouseover`               | Fired when the mouse pointer is moved over the map.                                         |
| `mouseout`                | Fired when the mouse pointer leaves the map.                                                |


## Slots

The `Map` component supports the `default` slot to customize your map by adding overlays such as layers, controls, markers, or other components. This gives you full flexibility to customize how the map is rendered.

**Example:**
```vue
<Map>
  <template #default>
    <!-- Add layers, markers, or other custom overlays here -->
  </template>
</Map>
```


## Example with Deck.gl Layers

Combine the `@vue-deckgl-suite/google-maps` and `@vue-deckgl-suite/layers` packages to overlay Deck.gl layers on a Google Maps basemap:

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/google-maps';
import { ScatterplotLayer } from '@vue-deckgl-suite/layers';

const scatterplotData = [
  { position: [37.7749, -122.4194], color: [255, 0, 0, 255], radius: 100 },
  { position: [37.8044, -122.2711], color: [0, 50, 255, 255], radius: 150 },
];
</script>

<template>
  <DeckGL>
    <Map
      height="500px"
      width="100%"
      apiKey="YOUR_GOOGLE_MAPS_API_KEY"
      :center="{ lat: 37.7749, lng: -122.4194 }"
      :zoom="12"
      mapTypeId="roadmap"
    >
    </Map>
    <ScatterplotLayer
      id="scatterplot-layer"
      :data="scatterplotData"
      :getPosition="(d) => d.position"
      :getColor="(d) => d.color"
      :getRadius="(d) => d.radius"
      :pickable="true"
    />
  </DeckGL>
</template>
```

This example renders a `ScatterplotLayer` on top of a Google Maps basemap, demonstrating the potential of combining `@vue-deckgl-suite/google-maps` with `@vue-deckgl-suite/layers`.

---

With the `@vue-deckgl-suite/google-maps` package, you can easily integrate Google Maps into Vue projects, fully customizing the map's behavior, visuals, and interactions while leveraging Deck.gl for powerful data-driven visualizations.