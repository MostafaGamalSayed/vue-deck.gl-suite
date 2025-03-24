# DeckGL (Mapbox Overlay)

The `DeckGL` component allows you to integrate **Deck.gl** layers as overlays within a **MapLibre** map. It enables seamless synchronization between Deck.gl features and the MapLibre map, offering a powerful way to create high-performance geospatial visualizations with interactive layers.

---

## Features

- Supports adding and managing multiple **Deck.gl** layers dynamically.
- Handles synchronization of the map view state with Deck.gl overlays.
- Emits various events to handle user interactions, such as clicks, hovers, drags, and more.
- Provides extensive customization options for rendering properties such as layers, effects, and tooltips.

---

## Usage

Here’s a basic example demonstrating how to use the `DeckGL` component:

```vue
<script setup>
import DeckGL from '@vue-deckgl-suite/maplibre'

const layers = [
  new ScatterplotLayer({
    id: 'scatterplot-layer',
    data: [
      { position: [-74.5, 40], color: [255, 0, 0], radius: 100 },
      { position: [-75, 41], color: [0, 0, 255], radius: 150 },
    ],
    getPosition: (d) => d.position,
    getFillColor: (d) => d.color,
    getRadius: (d) => d.radius,
  }),
]
</script>

<template>
  <DeckGL
    :layers="layers"
    :getTooltip="(info) => info.object && `Radius: ${info.object.radius}`"
    :useDevicePixels="true"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
  />
</template>
```

In the example above:
- A `ScatterplotLayer` is set up and passed into the `layers` prop of the `DeckGL` component.
- Custom tooltips are enabled via the `getTooltip` prop.
- The `DeckGL` component dynamically handles rendering within the MapLibre map.

---

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

---

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

## Advanced Options

The `DeckGL` component can be extended or customized depending on your application needs:

### Adding Layers Dynamically

Use the `layers` prop to add, update, or remove Deck.gl layers dynamically. For example:

```vue
<DeckGL :layers="[...existingLayers, new ScatterplotLayer({...})]" />
```

### Tooltips and Cursor

Customize tooltips with the `getTooltip` prop or define custom mouse cursors using the `getCursor` prop.

```vue
<DeckGL
  :getTooltip="(info) => info.object && `Clicked at ${info.object.position}`"
  :getCursor="() => 'pointer'"
/>
```

---

For further details on Deck.gl layers and their props, check the [Deck.gl documentation](https://deck.gl/docs/api-reference/layers).