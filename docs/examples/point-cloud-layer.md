<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { PointCloudLayer } from '@vue-deckgl-suite/layers';
import { COORDINATE_SYSTEM } from '@deck.gl/core';
import 'maplibre-gl/dist/maplibre-gl.css';
</script>

# Point Cloud Example

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