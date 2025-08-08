<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { BitmapLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Bitmap Layer

The Bitmap Layer overlays a static image over specified geographic bounds.

<ClientOnly>
<DeckGL :getTooltip="({ bitmap }) => bitmap && `${bitmap.pixel}`">
  <Map
    height="400px"
    :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
    :center="[-122.4, 37.74]"
    :zoom="11"
  />
  <BitmapLayer
    id="BitmapLayer"
    :bounds="[-122.519, 37.7045, -122.355, 37.829]"
    :image="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-districts.png'"
    :pickable="true"
  />
</DeckGL>
</ClientOnly>

## Usage

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { BitmapLayer } from '@vue-deckgl-suite/layers';
</script>

<template>
  <DeckGL :getTooltip="({ bitmap }) => bitmap && `${bitmap.pixel}`">
    <Map height="500px" :style :center="[-122.4, 37.74]" :zoom="11" />
    <BitmapLayer
      id="BitmapLayer"
      :bounds="[-122.519, 37.7045, -122.355, 37.829]"
      :image="'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-districts.png'"
      :pickable="true"
    />
  </DeckGL>
</template>
```

## Props

Inherits from all [Base Layer](https://deck.gl/docs/api-reference/core/layer#properties) properties.

Below are the props available for configuring the `BitmapLayer`:

| Prop               | Type                                        | Default            | Description                                                              |
|--------------------|---------------------------------------------|--------------------|--------------------------------------------------------------------------|
| `image`            | `String\|HTMLImageElement\|ImageBitmap\|Texture` | `required`         | Image source to render as a bitmap.                                      |
| `bounds`           | `[minX, minY, maxX, maxY]`                  | `required`         | Long/lat bounds of the image, mapped to the corners of the bitmap.       |
| `opacity`          | `Number`                                     | `1`                | Opacity of the bitmap.                                                   |
| `desaturate`       | `Number`                                     | `0`                | Amount of desaturation applied to the image (0-1).                       |
| `transparentColor` | `[r, g, b, a]`                               | `[0, 0, 0, 0]`     | Color to treat as fully transparent.                                     |
| `tintColor`        | `[r, g, b]`                                  | `[255, 255, 255]`  | Multiplicative tint applied to the image.                                 |

## Events

The following events are emitted by the `BitmapLayer` component and can be used to handle user interactions or other layer events:

| Event       | Description                                   |
|-------------|-----------------------------------------------|
| `hover`     | Triggered when hovering over the layer.        |
| `click`     | Triggered when the layer is clicked.           |
| `drag`      | Triggered during a drag event.                 |
| `dragStart` | Triggered at the start of a drag event.        |
| `dragEnd`   | Triggered at the end of a drag event.          |
| `dataLoad`  | Triggered when layer data is loaded.           |
| `error`     | Triggered when there is an error in the layer. |
