<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
import { PathLayer } from '@vue-deckgl-suite/layers'

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
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
          }
        "
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
