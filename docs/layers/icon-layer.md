<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { IconLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

const iconAtlas = new URL('icon-data/location-icon-atlas.png', import.meta.url).href;
const iconMapping = new URL('icon-data/location-icon-mapping.json', import.meta.url).href;
</script>

# Icon Layer

The **Icon Layer** is part of `@vue-deckgl-suite/layers` and provides a way to render icons at geospatial positions on a map. It is particularly useful for visualizing location-based data with custom iconography.

<ClientOnly>
<DeckGL>
    <Map
      height="400px"
      :style
      :center="[-35, 36.7]"
      :zoom="1.8"
      :max-zoom="20"
      :pitch="0"
      :bearing="0"
    />
    <icon-layer
      id="icon"
      data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/icon/meteorites.json"
      :pickable="true"
      :get-position="d => d.coordinates"
      :icon-atlas
      :icon-mapping
      :get-icon="d => 'marker'"
      size-units="meters"
      :size-scale="2000"
      :size-min-pixels="6"
    />
  </DeckGL>
</ClientOnly>

## Usage

To use the `IconLayer`, import it into your Vue component and set the props as required to customize its behavior and appearance. The `iconAtlas` and `iconMapping` are commonly used to provide customized icons.

### Example

Here’s an example of how to use the **Icon Layer**, rendering icons on a map dynamically:

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { IconLayer } from '@vue-deckgl-suite/layers';

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

const iconAtlas = new URL('icon-data/location-icon-atlas.png', import.meta.url).href;
const iconMapping = new URL('icon-data/location-icon-mapping.json', import.meta.url).href;
</script>

<template>
  <DeckGL>
    <Map
      height="100vh"
      :style
      :center="[-35, 36.7]"
      :zoom="1.8"
      :max-zoom="20"
      :pitch="0"
      :bearing="0"
    />
    <icon-layer
      id="icon"
      data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/icon/meteorites.json"
      :pickable="true"
      :get-position="d => d.coordinates"
      :icon-atlas
      :icon-mapping
      :get-icon="d => 'marker'"
      size-units="meters"
      :size-scale="2000"
      :size-min-pixels="6"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```

## Props

Below are the props available for configuring the `IconLayer`:

| Prop                  | Type                  | Default                       | Description                                                                                                  |
|-----------------------|-----------------------|-------------------------------|--------------------------------------------------------------------------------------------------------------|
| `sizeScale`           | `Number`             | `1`                           | A scaling multiplier for the size of the icons.                                                             |
| `sizeUnits`           | `String`             | `'meters'`                    | Units for size of the icons (e.g., `pixels`, `meters`).                                                     |
| `sizeMinPixels`       | `Number`             | `0`                           | Minimum size of icons in pixels, regardless of scale.                                                       |
| `sizeMaxPixels`       | `Number`             | `Number.MAX_SAFE_INTEGER`     | Maximum size of icons in pixels, regardless of scale.                                                       |
| `iconAtlas`           | `String`             | `undefined`                   | URL to the icon atlas (a single image containing multiple icons).                                            |
| `iconMapping`         | `Object | String`    | `undefined`                   | A mapping of icon identifiers to the regions of the atlas containing those icons.                           |
| `billboard`           | `Boolean`            | `true`                        | Whether the icons always face the camera.                                                                   |
| `alphaCutoff`         | `Number`             | `0.5`                         | Alpha cut-off value for discarding transparent pixels.                                                      |
| `loadOptions`         | `Object`             | `undefined`                   | Load options to pass to loaders when loading textures.                                                      |
| `textureParameters`   | `Object`             | `undefined`                   | Custom WebGL texture parameters.                                                                            |
| `getAngle`            | `Function | Number`  | `0`                           | Function or value to compute the rotation angle of icons.                                                   |
| `getPosition`         | `Function`           | `(x) => x?.position`          | Function to compute the position of each icon.                                                              |
| `getSize`             | `Function | Number`  | `1`                           | Function or value to compute the size of the icons.                                                         |
| `getColor`            | `Function | Array`   | `[255, 255, 255, 255]`        | Function or value to compute the color of the icons.                                                        |
| `getIcon`             | `Function`           | `(x) => x?.icon`              | Function to specify which icon in the atlas to display.                                                     |
| `onIconError`         | `Function`           | `undefined`                   | Callback triggered when a new icon fails to load from the atlas.                                            |

## Events

The following events are emitted by the `IconLayer` component and can be used to handle user interactions or other events:

| Event         | Description                               |
|---------------|-------------------------------------------|
| `hover`       | Triggered when hovering over an icon.     |
| `click`       | Triggered when an icon is clicked.        |
| `drag`        | Triggered during a drag event.            |
| `dragStart`   | Triggered at the start of a drag event.   |
| `dragEnd`     | Triggered at the end of a drag event.     |
| `dataLoad`    | Triggered when data for the `IconLayer` has loaded. |
| `error`       | Triggered when there is an error rendering or interacting with the layer. |

---

For more information, refer to the official [`@deck.gl/layers`](https://deck.gl/docs/api-reference/layers/icon-layer) documentation.