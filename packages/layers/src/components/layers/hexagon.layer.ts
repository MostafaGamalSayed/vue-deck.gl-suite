import { defineComponent, type Ref, ref } from 'vue'
import { hexagonLayerProps, hexagonPropsKeys } from '@/lib/layers/hexagon.lib.ts'
import { HexagonLayer, type HexagonLayerProps } from '@deck.gl/aggregation-layers'
import { useLayer } from '@/composables/useLayer.ts'
import { useTestLayer } from '@/composables/useTestLayer.ts'

export default defineComponent({
  name: 'HexagonLayer',
  props: { ...hexagonLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: HexagonLayerProps, { emit, expose }) {
    // Use `useLayer` for layer lifecycle management
    const { layer } = useTestLayer(
      (opts) => new HexagonLayer(opts as any), // Layer factory function
      props,
      hexagonPropsKeys,
      emit,
    )

    // Expose the layer reference for external use
    expose({ layer })

    return () => [] // Renderless component
  },
})
