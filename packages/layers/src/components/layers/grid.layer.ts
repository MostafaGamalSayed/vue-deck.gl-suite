import { defineComponent } from 'vue'
import { gridLayerProps, gridPropsKeys } from '@/lib/layers/grid.lib.ts'
import { GridLayer, type GridLayerProps } from '@deck.gl/aggregation-layers'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'GridLayer',
  props: { ...gridLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: GridLayerProps, { emit, expose }) {
    // Use `useLayer` for layer lifecycle management
    const { layer } = useLayer(
      (opts) => new GridLayer(opts as any), // Layer factory function
      props,
      gridPropsKeys,
      emit,
    )

    // Expose the layer reference for external use
    expose({ layer })

    return () => [] // Renderless component
  },
})
