import { defineComponent } from 'vue'
import { heatmapLayerProps, heatmapPropsKeys } from '@/lib/layers/heatmap.lib.ts'
import { HeatmapLayer, type HeatmapLayerProps } from '@deck.gl/aggregation-layers'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'HeatmapLayer',
  props: { ...heatmapLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: HeatmapLayerProps, { emit, expose }) {
    // Use `useLayer` for layer lifecycle management
    const { layer } = useLayer(
      (opts) => new HeatmapLayer(opts as any), // Layer factory function
      props,
      heatmapPropsKeys,
      emit,
    )

    // Expose the layer reference for external use
    expose({ layer })

    return () => [] // Renderless component
  },
})
