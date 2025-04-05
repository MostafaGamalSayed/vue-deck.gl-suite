<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { WMSLayer } from '@vue-deckgl-suite/layers';
import 'maplibre-gl/dist/maplibre-gl.css';

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';
</script>

# WMS Layer

The **WMS Layer** is a feature of `@vue-deckgl-suite/layers` that allows you to integrate and render data from Web Map Service (WMS) sources. It supports fetching pre-rendered raster layers over HTTP, typically used for geographic data visualization.

<ClientOnly>
  <DeckGL>
    <Map 
      height="400px"
      :style
      :center="[-122.4, 37.74]" 
      :zoom="9" 
      :min-zoom="1" 
      :max-zoom="20"
    >
      <WMSLayer
        id="demo-wms-layer"
        data="https://ows.terrestris.de/osm/service"
        :layers="['OSM-WMS']"
        service-type="wms"
      />
    </Map>
  </DeckGL>
</ClientOnly>

## Usage

To use the `WMSLayer`, import it into your Vue component and configure its props to match the desired connection to a WMS server. Below is a usage example to render WMS data on the map:

### Example

Here’s an example that demonstrates how to integrate the **WMS Layer**:

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { WMSLayer } from '@vue-deckgl-suite/layers';

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';
</script>

<template>
  <DeckGL>
    <Map height="100vh" :style :center="[-122.4, 37.74]" :zoom="9" :min-zoom="1" :max-zoom="20">
      <WMSLayer
        id="example-wms-layer"
        data="https://ows.terrestris.de/osm/service"
        :layers="['OSM-WMS']"
        service-type="wms"
      />
    </Map>
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```

## Props

Inherits from all [Base Layer](https://deck.gl/docs/api-reference/core/layer#properties) properties.

Below are the props available for configuring the `WMSLayer`:

| Prop                  | Type                 | Default                      | Description                                                                                          |
|-----------------------|----------------------|------------------------------|------------------------------------------------------------------------------------------------------|
| `data`               | `String | Object`   | `null`                       | URL for the WMS server or the dataset object providing WMS source information.                      |
| `serviceType`        | `String`            | `'auto'`                     | Specifies the service type. For WMS, set it as `'wms'`.                                             |
| `layers`             | `Array`             | `[]`                         | Array of layer names to request from the WMS service.                                               |
| `srs`                | `String`            | `'auto'`                     | Spatial Reference System to use for the map projection.                                             |
| `onMetadataLoad`     | `Function`          | `() => {}`                   | Callback triggered after metadata is successfully loaded.                                           |
| `onMetadataLoadError`| `Function`          | Logs error in console         | Callback triggered when metadata fetching results in an error.                                      |
| `onImageLoadStart`   | `Function`          | `() => {}`                   | Callback triggered when WMS image loading starts.                                                   |
| `onImageLoad`        | `Function`          | `() => {}`                   | Callback triggered when WMS image loading is completed.                                             |
| `onImageLoadError`   | `Function`          | Logs error in console         | Callback triggered when an error occurs while loading WMS image.                                    |

## Events

The `WMSLayer` emits the following events which can be used to handle user interactions or other events:

| Event         | Description                               |
|---------------|-------------------------------------------|
| `hover`       | Triggered when hovering over the WMS layer. |
| `click`       | Triggered when the WMS layer is clicked.     |
| `drag`        | Triggered during a drag event.            |
| `dragStart`   | Triggered at the start of a drag event.   |
| `dragEnd`     | Triggered at the end of a drag event.     |
| `dataLoad`    | Triggered when WMS layer data is fully loaded. |
| `error`       | Triggered when there is an error rendering or loading the WMS layer. |

---

For more details, refer to the official [`@deck.gl/geo-layers`](https://deck.gl/docs/api-reference/geo-layers/wms-layer) documentation.