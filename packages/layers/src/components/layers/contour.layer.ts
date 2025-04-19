import { defineComponent } from 'vue'
import { contourLayerProps, contourPropsKeys } from '@/lib/layers/contour.lib.ts'
import { ContourLayer, type ContourLayerProps } from '@deck.gl/aggregation-layers'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'ContourLayer',
  props: { ...contourLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: ContourLayerProps, { emit, expose }) {
    // Use `useLayer` for layer lifecycle management
    const { layer } = useLayer(
      (opts) => new ContourLayer(opts as any), // Layer factory function
      props,
      contourPropsKeys,
      emit,
    )

    // Expose the layer reference for external use
    expose({ layer })

    return () => [] // Renderless component
  },
})
