import { defineComponent } from 'vue'
import { columnLayerProps, columnPropsKeys } from '@/lib/layers/column.lib.ts'
import { ColumnLayer, type ColumnLayerProps } from '@deck.gl/layers'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'ColumnLayer',
  props: { ...columnLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: ColumnLayerProps, { emit, expose }) {
    // Use `useLayer` for layer lifecycle management
    const { layer } = useLayer(
      (opts) => new ColumnLayer(opts), // Layer factory function
      props,
      columnPropsKeys,
      emit,
    )

    // Expose the layer reference for external use
    expose({ layer })

    return () => [] // Renderless component
  },
})
