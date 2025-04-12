import { defineComponent } from 'vue'
import { arcLayerProps, arcPropsKeys } from '@/lib/layers/arc.lib.ts'
import { ArcLayer, type ArcLayerProps } from '@deck.gl/layers'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'ArcLayer',
  props: { ...arcLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: ArcLayerProps, { emit, expose }) {
    // Use `useLayer` for layer lifecycle management
    const { layer } = useLayer(
      (opts) => new ArcLayer(opts), // Layer factory function
      props,
      arcPropsKeys,
      emit,
    )

    // Expose the layer reference for external use
    expose({ layer })

    return () => [] // Renderless component
  },
})
