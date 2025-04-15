<script setup>
  import { DeckGL, Map } from '@vue-deckgl-suite/google-maps';
  import { ColumnLayer } from '@deck.gl/layers';

  const GOOGLE_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY;

  const layers = new ColumnLayer({
    id: 'ColumnLayer',
    data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/hexagons.json',
    diskResolution: 12,
    extruded: true,
    radius: 250,
    elevationScale: 5000,
    getElevation: (d) => d.value,
    getFillColor: (d) => [48, 128, d.value * 255, 255],
    getPosition: (d) => d.centroid,
  })
</script>

# DeckGL Component (GoogleMapsOverlay)

The `DeckGL` component allows you to integrate **Deck.gl** layers as overlays within a **Google Map**. It enables seamless synchronization between Deck.gl features and the Google Map, offering a powerful way to create high-performance geospatial visualizations with interactive layers.


## Usage

Here’s a basic example demonstrating how to use the `DeckGL` component:

```vue
<script>
  import { DeckGL, Map } from '@vue-deckgl-suite/google-maps'
  import { ColumnLayer } from '@deck.gl/layers'

  const layers = new ColumnLayer({
    id: 'ColumnLayer',
    data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/hexagons.json',
    diskResolution: 12,
    extruded: true,
    radius: 250,
    elevationScale: 5000,
    getElevation: (d) => d.value,
    getFillColor: (d) => [48, 128, d.value * 255, 255],
    getPosition: (d) => d.centroid,
  })
</script>

<template>
  <DeckGL
    :layers="[layers]"
    :getTooltip="({ object }) => object && `${object.from.name} to ${object.to.name}`"
  >
    <Map
      api-key="<YOUR_API_KEY>"
      height="100vh"
      :center="{ lat: 37.74, lng: -122.4 }"
      :zoom="11"
      :max-zoom="20"
    />
  </DeckGL>
</template>
```
<ClientOnly>
<DeckGL
    :layers="[layers]"
    :getTooltip="({ object }) => object && `${object.from.name} to ${object.to.name}`"
  >
    <Map
      :api-key="GOOGLE_KEY"
      height="500px"
      :center="{ lat: 37.74, lng: -122.4 }"
      :zoom="11"
      :max-zoom="20"
    />
  </DeckGL>
</ClientOnly>

## Props

The `DeckGL` component accepts the following props to customize its behavior:

| Prop                 | Type                        | Default                  | Description                                                                                      |
|----------------------|-----------------------------|--------------------------|--------------------------------------------------------------------------------------------------|
| `interleaved`        | `Boolean`                  | `false`                  | Whether layers are rendered interleaved with the map tiles.                                      |
| `id`                 | `String`                   | `'deckgl-overlay'`       | The unique ID for the overlay instance.                                                         |
| `style`              | `Object`                   | `{}`                     | Additional CSS styles for the canvas.                                                           |
| `useDevicePixels`    | `Boolean` or `Number`      | `true`                   | Controls the resolution of the drawing buffer; `true` uses `devicePixelRatio`.                  |
| `pickingRadius`      | `Number`                   | `0`                      | Extra pixels around the pointer for picking layers.                                             |
| `parameters`         | `Object`                   | `{}`                     | WebGL parameters to set before rendering.                                                       |
| `layerFilter`        | `Function`                 | `undefined`              | A callback to determine whether a layer should be rendered.                                      |
| `layers`             | `Array`                    | `[]`                     | The array of Deck.gl `Layer` instances to render.                                                |
| `effects`            | `Array`                    | `[]`                     | An array of visual effects (e.g., lighting or post-processing effects) for the rendered layers. |
| `views`              | `Object` or `Array`        | `new MapView()`          | View or array of views that define the rendering environment.                                    |
| `touchAction`        | `String`                   | `'none'`                 | Configures browser default touch gestures.                                                      |
| `eventRecognizerOptions` | `Object`                | `{}`                     | Options for gesture recognition using `Hammer.js`.                                              |
| `getCursor`          | `Function`                 | `() => 'default'`        | A callback to define the cursor type during interactions.                                        |
| `getTooltip`         | `Function`                 | `undefined`              | A callback to render a tooltip based on a hovered object.                                        |
| `debug`              | `Boolean`                  | `false`                  | Enables debug mode for WebGL rendering.                                                         |


## Events

The `DeckGL` component emits the following events, allowing you to handle user interactions and lifecycle changes:

| Event                     | Description                                                                             |
|---------------------------|-----------------------------------------------------------------------------------------|
| `load`                    | Triggered when the Deck.gl instance is fully loaded.                                    |
| `click`                   | Triggered when the user clicks on a layer.                                              |
| `hover`                   | Triggered when the user hovers over a layer.                                            |
| `drag`                    | Triggered during a drag interaction.                                                    |
| `dragStart`               | Triggered at the beginning of a layer drag event.                                       |
| `dragEnd`                 | Triggered at the end of a layer drag event.                                             |
| `deviceInitialized`       | Emitted upon successful GPU device initialization.                                       |
| `beforeRender`            | Triggered before rendering a frame.                                                     |
| `afterRender`             | Triggered after rendering a frame.                                                      |
| `interactionStateChange`  | Fired when the interaction state changes, such as during zoom or pan operations.         |
| `viewStateChange`         | Triggered when the view state (e.g., zoom, center) changes.                              |
| `error`                   | Emitted when a rendering or runtime error occurs during layer execution.                 |
| `resize`                  | Triggered when the canvas size changes.                                                 |
| `metrics`                 | (Debug) Emits performance metrics about rendering.                                       |

---

For further details, check the [Deck.gl documentation](https://deck.gl/docs/api-reference/google-maps/google-maps-overlay).