<script setup>
import { DeckGL, PointCloudLayer } from '@vue-deckgl-suite/layers'
import { COORDINATE_SYSTEM } from '@deck.gl/core'

const initialViewState = {
  longitude: -122.4,
  latitude: 37.74,
  zoom: 11,
  maxZoom: 20,
  pitch: 30,
  bearing: 0,
}
</script>

<template>
  <DeckGL
    :initial-view-state="initialViewState"
    :controller="true"
    :getTooltip="({ object }) => object && object.position.join(', ')"
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
  </DeckGL>
</template>
