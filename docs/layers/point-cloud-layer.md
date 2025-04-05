<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { PointCloudLayer } from '@vue-deckgl-suite/layers';
import { COORDINATE_SYSTEM } from '@deck.gl/core';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>


# Point Cloud Layer

The **Point Cloud Layer** is a feature of `@vue-deckgl-suite/layers` that allows rendering of large collections of 3D points. It is typically used for visualizing 3D data such as Lidar, photogrammetry, or 3D scanned objects.

<ClientOnly>
    <DeckGL :getTooltip="({ object }) => object && object.position.join(', ')">
      <Map
        height="400px"
        :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
        :center="[-122.4, 37.74]"
        :zoom="11"
        :max-zoom="20"
        :pitch="30"
        :bearing="0"
      >
        <PointCloudLayer
          id="PointCloudLayer"
          data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/pointcloud.json"
          :getColor="(d) => d.color"
          :getNormal="(d) => d.normal"
          :getPosition="(d) => d.position"
          :pointSize="2"
          :coordinateOrigin="[-122.4, 37.74]"
          :coordinateSystem="COORDINATE_SYSTEM.METER_OFFSETS"
          :pickable="true"
        />
      </Map>
    </DeckGL>
</ClientOnly>

## Usage

To use the `PointCloudLayer`, import it into your Vue component and configure its props to customize the visualization of 3D points.

### Example

Here’s an example that demonstrates how to use the **Point Cloud Layer** to render a 3D point cloud on a map:

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { PointCloudLayer } from '@vue-deckgl-suite/layers';
import { COORDINATE_SYSTEM } from '@deck.gl/core';

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';
</script>

<template>
  <DeckGL :getTooltip="({ object }) => object && object.position.join(', ')">
    <Map
      height="100vh"
      :style
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    />
    <PointCloudLayer
      id="PointCloudLayer"
      data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/pointcloud.json"
      :getColor="(d) => d.color"
      :getNormal="(d) => d.normal"
      :getPosition="(d) => d.position"
      :pointSize="2"
      :coordinateOrigin="[-122.4, 37.74]"
      :coordinateSystem="COORDINATE_SYSTEM.METER_OFFSETS"
      :pickable="true"
    />
  </DeckGL>
</template>
```

## Props

Inherits from all [Base Layer](https://deck.gl/docs/api-reference/core/layer#properties) properties.

Below are the props available for configuring the `PointCloudLayer`:

| Prop              | Type               | Default             | Description                                                                                   |
|-------------------|--------------------|---------------------|-----------------------------------------------------------------------------------------------|
| `sizeUnits`       | `String`          | `'pixels'`          | Units for specifying the size of points. Can be `'pixels'`, `'meters'`, or `'common'`.       |
| `pointSize`       | `Number`          | `10`                | Global size of the points, in units defined by `sizeUnits`.                                   |
| `material`        | `Object|Boolean`  | `true`              | Material settings for lighting effects. See [Lighting Guide](https://deck.gl/docs/developer-guide/using-lighting). |
| `getPosition`     | `Function`        | `object => object.position` | Accessor function for point positions in the format `[x, y, z]`.                              |
| `getNormal`       | `Function|Array`  | `[0, 0, 1]`         | Accessor or default value for the normals of the points.                                      |
| `getColor`        | `Function|Array`  | `[0, 0, 0, 255]`    | Accessor or default RGBA color for the points.                                                |
| `coordinateSystem`| `Number`          | `COORDINATE_SYSTEM.METER_OFFSETS` | Coordinate system for the layer's points.                                                    |
| `coordinateOrigin`| `Array`           | `[-122.4, 37.74]`   | Origin point for `COORDINATE_SYSTEM.METER_OFFSETS`.                                           |

## Events

The following events are emitted by the `PointCloudLayer` component and can be used to handle user interactions or layer events:

| Event         | Description                                |
|---------------|--------------------------------------------|
| `hover`       | Triggered when hovering over a point.      |
| `click`       | Triggered when a point is clicked.         |
| `drag`        | Triggered during a drag event.             |
| `dragStart`   | Triggered at the start of a drag event.    |
| `dragEnd`     | Triggered at the end of a drag event.      |
| `dataLoad`    | Triggered when the point cloud data is loaded. |
| `error`       | Triggered when there is an error loading the layer. |


---

For further details, refer to the official [`@deck.gl/layers`](https://deck.gl/docs/api-reference/layers/point-cloud-layer) documentation.