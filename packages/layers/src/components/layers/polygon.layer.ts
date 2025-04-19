import { defineComponent } from 'vue'
import { polygonLayerProps, polygonPropsKeys } from '@/lib/layers/polygon.lib.ts'
import { PolygonLayer, type PolygonLayerProps } from '@deck.gl/layers'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'PolygonLayer',
  props: { ...polygonLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: PolygonLayerProps, { emit, expose }) {
    // Use `useLayer` for layer lifecycle management
    const { layer } = useLayer(
      (opts) => new PolygonLayer(opts), // Layer factory function
      props,
      polygonPropsKeys,
      emit,
    )

    // Expose the layer reference for external use
    expose({ layer })

    return () => [] // Renderless component
  },
})
