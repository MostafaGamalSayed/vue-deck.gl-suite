import { defineComponent } from 'vue'
import { useLayer } from '@/composables/useLayer.ts'
import { terrainLayerProps, terrainPropsKeys } from '@/lib/layers/terrain.lib.ts'
import { TerrainLayer, type TerrainLayerProps } from '@deck.gl/geo-layers'

export default defineComponent({
  name: 'TerrainLayer',
  props: { ...terrainLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: TerrainLayerProps, { emit, expose }) {
    const { layer } = useLayer(
      (opts) => new TerrainLayer(opts as any),
      props as any,
      terrainPropsKeys as any,
      emit,
    )

    expose({ layer })

    return () => []
  },
})
