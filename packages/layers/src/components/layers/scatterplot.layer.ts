import { defineComponent } from 'vue'
import { scatterplotLayerProps, scatterplotPropsKeys } from '@/lib/layers/scatterplot.lib.ts'
import { ScatterplotLayer, type ScatterplotLayerProps } from '@deck.gl/layers'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'ScatterplotLayer',
  props: { ...scatterplotLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: ScatterplotLayerProps, { emit, expose }) {
    // Use `useLayer` for layer lifecycle management
    const { layer } = useLayer(
      (opts) => new ScatterplotLayer(opts), // Layer factory function
      props,
      scatterplotPropsKeys,
      emit,
    )

    // Expose the layer reference for external use
    expose({ layer })

    return () => [] // Renderless component
  },
})
