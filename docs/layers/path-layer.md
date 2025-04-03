<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { PathLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Path Layer

The **Path Layer** is a feature of `@vue-deckgl-suite/layers` that lets you render paths or polylines on a map. It is useful for visualizing routes, trails, or any sequence of connected points on a map.

<ClientOnly>
    <DeckGL :getTooltip="({ object }) => object && object.name">
        <Map 
            height="400px" 
            :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`" 
            :center="[-122.4, 37.74]" 
            :zoom="11" 
            :max-zoom="20" 
            :pitch="30"
        >
            <PathLayer
                id="PathLayer"
                data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-lines.json"
                :getColor="
                (d) => {
                  const hex = d.color
                  // convert to RGB
                  return hex.match(/[0-9a-f]{2}/g).map((x) => parseInt(x, 16))
                }"
                :getPath="(d) => d.path"
                :getWidth="100"
                :pickable="true"
            />
        </Map>
    </DeckGL>
</ClientOnly>

## Usage

To use the `PathLayer`, import it into your Vue component and configure its props to customize the appearance and behavior of the paths.

### Example

Here’s an example that demonstrates how to use the **Path Layer** to render paths on a map:

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { PathLayer } from '@vue-deckgl-suite/layers';

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';
</script>

<template>
  <DeckGL :get-tooltip="({ object }) => object && object.name">
    <Map height="100vh" :style :center="[-122.4, 37.74]" :zoom="11">
      <PathLayer
        id="PathLayer"
        data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-lines.json"
        :getColor="
        (d) => {
          const hex = d.color
          // convert to RGB
          return hex.match(/[0-9a-f]{2}/g).map((x) => parseInt(x, 16))
        }"
        :getPath="(d) => d.path"
        :getWidth="100"
        :pickable="true"
      />
    </Map>
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```

## Props

Below are the props available for configuring the `PathLayer`:

| Prop              | Type               | Default                   | Description                                                                                      |
|-------------------|--------------------|---------------------------|--------------------------------------------------------------------------------------------------|
| `widthUnits`      | `String`          | `'meters'`                | Specifies units for the path width. Options include `meters` or `pixels`.                       |
| `widthScale`      | `Number`          | `1`                       | A multiplier for the path width.                                                                |
| `widthMinPixels`  | `Number`          | `0`                       | Minimum width of the path in pixels.                                                            |
| `widthMaxPixels`  | `Number`          | `Number.MAX_SAFE_INTEGER` | Maximum width of the path in pixels.                                                            |
| `jointRounded`    | `Boolean`         | `false`                   | Whether to use rounded joints between path segments.                                            |
| `capRounded`      | `Boolean`         | `false`                   | Whether to use rounded corners at the ends of the path.                                         |
| `miterLimit`      | `Number`          | `4`                       | Used in miter joins to limit the length of the join.                                             |
| `billboard`       | `Boolean`         | `false`                   | Whether the path is always facing the camera (useful for 3D scenarios).                         |
| `_pathType`       | `String`          | `null`                    | Specifies the type of path. Usually auto-handled internally.                                     |
| `getPath`         | `Function`        | `object => object.path`   | A function that specifies the coordinates of the path `[longitude, latitude]`.                  |
| `getColor`        | `Function/Array`  | `[0, 0, 0, 255]`          | Function or array that specifies the color of the path.                                          |
| `getWidth`        | `Function/Number` | `1`                       | Function or number to specify the width of the path.                                             |

## Events

The following events are emitted by the `PathLayer` component and can be used to handle user interactions:

| Event         | Description                               |
|---------------|-------------------------------------------|
| `hover`       | Triggered when hovering over a path.      |
| `click`       | Triggered when a path is clicked.         |
| `drag`        | Triggered during a drag event.            |
| `dragStart`   | Triggered at the start of a drag event.   |
| `dragEnd`     | Triggered at the end of a drag event.     |
| `dataLoad`    | Triggered when layer data is loaded.      |
| `error`       | Triggered when there is an error.         |

---

For further details, refer to the official [`@deck.gl/layers`](https://deck.gl/docs/api-reference/layers/path-layer) documentation.