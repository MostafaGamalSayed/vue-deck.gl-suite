<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
import { WMSLayer } from '@vue-deckgl-suite/layers'

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
</script>

<template>
  <DeckGL>
    <Map height="100vh" :style :center="[-122.4, 37.74]" :zoom="9" :min-zoom="1" :max-zoom="20">
      <WMSLayer
        id="WMSLayer"
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
