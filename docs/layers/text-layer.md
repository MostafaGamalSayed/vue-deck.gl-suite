<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { TextLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Text Layer

The Text Layer renders text labels at given coordinates. Useful for labeling points of interest.

<ClientOnly>
<DeckGL>
  <Map
    height="400px"
    :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
    :center="[-122.4, 37.74]"
    :zoom="11"
    :max-zoom="20"
    :pitch="30"
    :bearing="0"
  />
  <TextLayer
    id="TextLayer"
    :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json'"
    :getText="(d) => d.name"
    :getPosition="(d) => d.coordinates"
    :getColor="[255, 255, 255]"
    :getSize="24"
    :sizeUnits="'pixels'"
    :billboard="true"
  />
</DeckGL>
</ClientOnly>

## Usage

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { TextLayer } from '@vue-deckgl-suite/layers';
</script>

<template>
  <DeckGL>
    <Map height="500px" :style :center="[-122.4, 37.74]" :zoom="11" />
    <TextLayer
      id="TextLayer"
      :data="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json'"
      :getText="(d) => d.name"
      :getPosition="(d) => d.coordinates"
      :getColor="[255, 255, 255]"
      :getSize="24"
      :sizeUnits="'pixels'"
      :billboard="true"
    />
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```

## Props

Inherits from all [Base Layer](https://deck.gl/docs/api-reference/core/layer#properties) properties.

Below are the props available for configuring the `TextLayer`:

| Prop            | Type               | Default     | Description                                                   |
|-----------------|--------------------|-------------|---------------------------------------------------------------|
| `getText`       | `Function`         | `required`  | Accessor returning the text string for each object.           |
| `getPosition`   | `Function`         | `required`  | Accessor returning coordinates `[lng, lat]` for each label.   |
| `getColor`      | `Array\|Function`   | `[0, 0, 0, 255]` | Text color accessor.                                    |
| `getSize`       | `Number\|Function`  | `12`        | Font size accessor/value in `sizeUnits`.                      |
| `sizeUnits`     | `'meters'\|'pixels'`| `'pixels'`  | Units used for `getSize`.                                     |
| `billboard`     | `Boolean`          | `false`     | Whether text always faces the camera.                         |

## Events

The following events are emitted by the `TextLayer` component and can be used to handle user interactions or other layer events:

| Event       | Description                                   |
|-------------|-----------------------------------------------|
| `hover`     | Triggered when hovering over a label.          |
| `click`     | Triggered when a label is clicked.             |
| `drag`      | Triggered during a drag event.                 |
| `dragStart` | Triggered at the start of a drag event.        |
| `dragEnd`   | Triggered at the end of a drag event.          |
| `dataLoad`  | Triggered when layer data is loaded.           |
| `error`     | Triggered when there is an error in the layer. |
