<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import 'maplibre-gl/dist/maplibre-gl.css';

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'

const layer = new HeatmapLayer({
  id: 'HeatmapLayer',
  data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json',

  aggregation: 'SUM',
  getPosition: d => d.COORDINATES,
  getWeight: d => d.SPACES,
  radiusPixels: 25
});
</script>

# DeckGL Component (Mapbox Overlay)

The `DeckGL` component allows you to integrate **Deck.gl** layers as overlays within a **MapLibre** map. It enables seamless synchronization between Deck.gl features and the MapLibre map, offering a powerful way to create high-performance geospatial visualizations with interactive layers.


## Usage

Here’s a basic example demonstrating how to use the `DeckGL` component:

```vue
<script setup>
  import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
  import { HeatmapLayer } from '@deck.gl/aggregation-layers'

  const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'

  const layer = new HeatmapLayer({
    id: 'HeatmapLayer',
    data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json',

    aggregation: 'SUM',
    getPosition: d => d.COORDINATES,
    getWeight: d => d.SPACES,
    radiusPixels: 25
  });
</script>

<template>
  <DeckGL :layers="[layer]">
    <Map
      height="100vh"
      :style
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    />
  </DeckGL>
</template>

<style lang="scss">
  @import 'maplibre-gl/dist/maplibre-gl.css';
</style>

```
<ClientOnly>
  <DeckGL :layers="[layer]" :get-tooltip="({ object }) => object && object.name">
    <Map
      height="400px"
      :style
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
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

For further details, check the [Deck.gl documentation](https://deck.gl/docs/api-reference/mapbox/mapbox-overlay).