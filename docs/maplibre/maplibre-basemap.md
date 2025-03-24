# Map Component

The `Map` component provides a lightweight, Vue-compatible wrapper for **MapLibre GL** maps. It enables easy integration, event handling, and customization of MapLibre maps in Vue projects.

---

## Features

- Provides a Vue-compatible interface for configuring **MapLibre GL** maps.
- Supports a wide range of props for defining map behavior, style, and interaction.
- Emits events for every major map interaction and lifecycle (e.g., `load`, `zoom`, `drag`, etc.).
- Allows dynamic updates to map state properties like `center`, `zoom`, `bearing`, and `pitch`.
- Enables extension with custom layers, popups, markers, and other overlays via slots.

---

## Usage

Here’s an example of how to use the `Map` component:

```vue
<script setup>
import { ref } from 'vue'
import Map from '@vue-deckgl-suite/maplibre'

const mapCenter = ref([0, 0])
const mapZoom = ref(3)

function handleMapLoad() {
  console.log('Map Loaded')
}
</script>

<template>
  <Map
    :center="mapCenter"
    :zoom="mapZoom"
    style="width: 100%; height: 500px;"
    @map:load="handleMapLoad"
  >
    <template #default>
      <!-- Add layers, sources, markers, or popups here -->
    </template>
  </Map>
</template>
```

In the example:
- The map is centered on `[0, 0]` with an initial zoom level of `3`.
- The `@map:load` event is used to trigger custom logic once the map has fully loaded.
- A default slot is used for adding custom content (e.g., layers, popups, markers).

---

## Props

The `Map` component accepts numerous props that align with **MapLibre GL**'s options to customize the map's behavior, appearance, and interactions:

| Prop                  | Type                      | Default     | Description                                                                                       |
|-----------------------|---------------------------|-------------|---------------------------------------------------------------------------------------------------|
| `width`               | `String` or `Number`     | `'100%'`    | Width of the map container.                                                                      |
| `height`              | `String` or `Number`     | `'100%'`    | Height of the map container.                                                                     |
| `center`              | `Array` or `Object`      | `[0, 0]`    | Sets the initial geographical centerpoint for the map.                                            |
| `zoom`                | `Number`                 | `0`         | Defines the initial zoom level of the map.                                                       |
| `style`               | `String` or `Object`     | `undefined` | Map's style URL or JSON object for custom styling.                                               |
| `bearing`             | `Number`                 | `0`         | Sets the initial map bearing (rotation).                                                         |
| `pitch`               | `Number`                 | `0`         | Controls the map tilt, measured in degrees away from the screen's plane.                         |
| `bounds`              | `Array`                  | `undefined` | Specifies the map's geographical bounds, overriding `center` and `zoom`.                         |
| `interactive`         | `Boolean`                | `true`      | Enables or disables map interactions (e.g., zoom, drag, rotate).                                 |
| `boxZoom`             | `Boolean`                | `true`      | Enables the "box zoom" functionality.                                                            |
| `dragRotate`          | `Boolean`                | `true`      | Enables drag-to-rotate behavior.                                                                 |
| `scrollZoom`          | `Boolean`                | `true`      | Enables scroll wheel zoom interaction.                                                           |
| `renderWorldCopies`   | `Boolean`                | `true`      | Determines whether the map renders multiple world copies when zoomed out.                        |
| `doubleClickZoom`     | `Boolean`                | `true`      | Enables or disables zooming via double-click.                                                    |
| `keyboard`            | `Boolean`                | `true`      | Enables keyboard controls (e.g., arrow keys for panning).                                        |
| `hash`                | `Boolean` or `String`    | `false`     | Syncs the map state with the URL hash fragment.                                                  |
| `fitBoundsOptions`    | `Object`                 | `undefined` | Options to use when fitting the map to specific bounds.                                          |
| `attributionControl`  | `Boolean` or `Object`    | `undefined` | Enables or configures an attribution control with MapLibre branding.                             |

These and other props make it easier to configure the map's settings based on project needs.

---

## Events

The `Map` component emits an extensive range of events, allowing you to handle user interactions and map lifecycle changes seamlessly. These include:

| Event                     | Description                                                                                 |
|---------------------------|---------------------------------------------------------------------------------------------|
| `map:load`                | Triggered when the map has fully loaded all resources.                                      |
| `map:click`               | Fired when the user clicks on the map.                                                      |
| `map:dblclick`            | Fired when the user double-clicks on the map.                                               |
| `map:mousemove`           | Triggered when the mouse moves over the map.                                                |
| `map:resize`              | Triggered when the map's container size changes.                                            |
| `map:zoom`                | Fired while the map is zooming.                                                             |
| `map:zoomend`             | Fired when the zooming operation ends.                                                      |
| `map:dragstart`           | Triggered at the start of a drag operation.                                                 |
| `map:drag`                | Fired continuously while dragging.                                                          |
| `map:dragend`             | Triggered when the drag operation ends.                                                     |
| `map:movestart`           | Fired when a pan operation begins.                                                          |
| `map:moveend`             | Fired when a pan operation ends.                                                            |
| `map:pitchstart`          | Triggered at the start of a pitch operation.                                                |
| `map:pitchend`            | Triggered when a pitch operation ends.                                                      |
| `map:render`              | Fired after each render frame is completed.                                                 |
| `map:data`                | Fired when a data source or style is changed.                                               |
| `update:center`           | Emitted whenever the `center` prop changes.                                                 |
| `update:zoom`             | Emitted whenever the `zoom` prop changes.                                                   |
| `update:bearing`          | Emitted when the `bearing` (rotation) changes.                                              |
| `update:pitch`            | Emitted when the `pitch` (tilt) property changes.                                            |

For a complete list of events, refer to the [MapLibre GL Events Documentation](https://maplibre.org/maplibre-gl-js-docs/api/map/).

---

## Slots

The `Map` component provides a `default` slot for adding custom content like layers, controls, popups, or markers. Example:

```vue
<Map>
  <template #default>
    <!-- Add layers, popups, or controls here -->
  </template>
</Map>
```

---

## Advanced Usage

### Binding Props Dynamically

Most map state properties like `zoom`, `center`, `bearing`, and `pitch` can be two-way bound using the `v-model` syntax:

```vue
<script setup>
import { ref } from 'vue'

const mapCenter = ref([40, -70])
const mapZoom = ref(10)
</script>

<template>
  <Map v-model:center="mapCenter" v-model:zoom="mapZoom" style="width: 100%; height: 400px;" />
</template>
```

In this example:
- Both the map's center and zoom values are dynamically updated as the user interacts with the map.
- Changes to the `mapCenter` or `mapZoom` props programmatically update the map accordingly.

---

For additional configuration options, refer to the [MapLibre GL JS API Reference](https://maplibre.org/).