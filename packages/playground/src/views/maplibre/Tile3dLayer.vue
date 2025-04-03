<script setup>
import { Map, DeckGL } from '@vue-deckgl-suite/maplibre'
import { Tile3DLayer as Tile3dLayer } from '@vue-deckgl-suite/layers'
import { Tile3DLayer } from '@deck.gl/geo-layers'
import { I3SLoader } from '@loaders.gl/i3s'

const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
const center = [-122.4, 37.74]

const layers = new Tile3DLayer({
  id: 'tile-3d-layer',
  // Tileset entry point: Indexed 3D layer file url
  data: 'https://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/SanFrancisco_Bldgs/SceneServer/layers/0',
  loader: I3SLoader,
  loadOptions: {
    // v9 TODO use compressed textures again
    i3s: { useCompressedTextures: false },
  },
  visible: true,
  opacity: 1,
  pickable: false,
  highlightColor: [0, 0, 128, 128],
  highlightedObjectIndex: null,
  autoHighlight: false,
  coordinateSystem: -1,
  coordinateOrigin: [0, 0, 0],
  wrapLongitude: false,
  positionFormat: 'XYZ',
  colorFormat: 'RGBA',
  getPointColor: [0, 0, 0, 255],
  pointSize: 1,
})
</script>

<template>
  <DeckGL>
    <Map height="100vh" :style :center="center" :zoom="15.5" :pitch="30">
      <Tile3dLayer
        id="tile-3d"
        data="https://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/SanFrancisco_Bldgs/SceneServer/layers/0"
        :loader="I3SLoader"
        :loadOptions="{
            i3s: {useCompressedTextures: false}
          }"
      />
    </Map>
  </DeckGL>
</template>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
</style>
