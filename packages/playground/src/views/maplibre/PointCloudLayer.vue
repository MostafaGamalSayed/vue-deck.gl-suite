<script setup>
import { Map, DeckGL } from '@vue-deckgl-suite/maplibre'
import { PointCloudLayer } from '@vue-deckgl-suite/layers'
import { COORDINATE_SYSTEM } from '@deck.gl/core'

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'

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
