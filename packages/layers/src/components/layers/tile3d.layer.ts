import { defineComponent } from 'vue'
import { useLayer } from '@/composables/useLayer.ts'
import { tile3DLayerProps, tile3DPropsKeys } from '@/lib/layers/tile3d.lib.ts'
import { type Tile3DLayerProps, Tile3DLayer } from '@deck.gl/geo-layers'

export default defineComponent({
  name: 'Tile3DLayer',
  props: { ...tile3DLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: Tile3DLayerProps, { emit, expose }) {
    // Use `useLayer` for layer lifecycle management
    const { layer } = useLayer(
      (opts) => new Tile3DLayer(opts as any), // Layer factory function
      props,
      tile3DPropsKeys,
      emit,
    )

    // Expose the layer reference for external use
    expose({ layer })

    return () => [] // Renderless component
  },
})
