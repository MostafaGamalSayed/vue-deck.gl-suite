# Arc Layer

The **Arc Layer** is a feature of `@vue-deckgl-suite/layers` that lets you draw arcs between two points on a map. It is useful for visualizing relationships, movements, or connections between two geospatial locations.

## Features

- Supports drawing arcs or great circles by specifying source and target positions.
- Fully customizable in terms of color, width, and appearance.
- Supports curved and straight lines between points, providing rich geospatial visualization capabilities.
- Optimized for high-performance rendering with large datasets.

## Usage

To use the `ArcLayer`, import it into your Vue component and configure its props to customize the behavior and appearance of the arcs.

### Example

Here’s an example that demonstrates how to use the **Arc Layer** to render arcs on a map:

```vue
<script setup>
import ArcLayer from '@vue-deckgl-suite/layers/arc.layer'

const arcData = [
  { sourcePosition: [-122.45, 37.78], targetPosition: [-77.03, 38.91], color: [255, 0, 0] },
  { sourcePosition: [-77.03, 38.91], targetPosition: [-74.00, 40.71], color: [0, 0, 255] },
]
</script>

<template>
  <ArcLayer
    :data="arcData"
    :greatCircle="true"
    :getSourcePosition="d => d.sourcePosition"
    :getTargetPosition="d => d.targetPosition"
    :getSourceColor="d => d.color"
    :getWidth="2"
    :numSegments="100"
  />
</template>
```

---

## Props

Below are the props available for configuring the `ArcLayer`:

| Prop                | Type                     | Default                      | Description                                                                                   |
|---------------------|--------------------------|------------------------------|-----------------------------------------------------------------------------------------------|
| `greatCircle`       | `Boolean`               | `false`                      | Whether to draw the arc as a great circle curve (geodesic arc).                                |
| `numSegments`       | `Number`                | `50`                         | Number of segments to interpolate the arc curve.                                              |
| `widthUnits`        | `String`                | `'pixels'`                   | The units in which the arc width is measured (`pixels`, `meters`).                            |
| `widthScale`        | `Number`                | `1`                          | A multiplier for the arc's width.                                                             |
| `widthMinPixels`    | `Number`                | `0`                          | Minimum width of the arc in pixels.                                                           |
| `widthMaxPixels`    | `Number`                | `Number.MAX_SAFE_INTEGER`    | Maximum width of the arc in pixels.                                                           |
| `getSourcePosition` | `Function`              | `x => x.sourcePosition`      | A function that returns the source position `[longitude, latitude]`.                          |
| `getTargetPosition` | `Function`              | `x => x.targetPosition`      | A function that returns the target position `[longitude, latitude]`.                          |
| `getSourceColor`    | `Function`              | `() => [0, 0, 0, 255]`       | A function to compute the color of the source point.                                           |
| `getTargetColor`    | `Function`              | `() => [0, 0, 0, 255]`       | A function to compute the color of the target point.                                           |
| `getWidth`          | `Number`                | `1`                          | Width of the arc in pixels.                                                                   |
| `getHeight`         | `Number`                | `1`                          | The arc's height factor (controls vertical "lift" effect).                                     |
| `getTilt`           | `Number`                | `0`                          | Controls the tilt angle of the arc.                                                           |

---

## Events

The following events are emitted by the `ArcLayer` component and can be used to handle user interactions or other layer events:

| Event         | Description                               |
|---------------|-------------------------------------------|
| `hover`       | Triggered when hovering over an arc.      |
| `click`       | Triggered when an arc is clicked.         |
| `drag`        | Triggered during a drag event.            |
| `dragStart`   | Triggered at the start of a drag event.   |
| `dragEnd`     | Triggered at the end of a drag event.     |
| `dataLoad`    | Triggered when layer data is loaded.      |
| `error`       | Triggered when there is an error loading the layer. |

---

## Advanced Options

The `ArcLayer` works seamlessly with other layers in `@vue-deckgl-suite`. You can combine it with other geospatial layers for advanced visualizations, such as heatmaps or data overlays.

### Custom Styling

Customize the look and feel of the arcs by passing custom functions to props like:

- `getSourceColor` and `getTargetColor` for dynamic coloring.
- `getWidth` to control the arc width based on data.

---

For further details, refer to the official [`@deck.gl/layers`](https://deck.gl/docs/api-reference/layers/arc-layer) documentation.