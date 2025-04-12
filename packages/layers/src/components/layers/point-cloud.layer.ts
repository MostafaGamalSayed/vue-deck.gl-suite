import { defineComponent } from 'vue'
import { pointCloudProps, pointCloudPropsKeys } from '@/lib/layers/point-cloud.lib.ts'
import { PointCloudLayer, type PointCloudLayerProps } from '@deck.gl/layers'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'PointCloudLayer',
  props: { ...pointCloudProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: PointCloudLayerProps, { emit, expose }) {
    // Use `useLayer` for layer lifecycle management
    const { layer } = useLayer(
      (opts) => new PointCloudLayer(opts), // Layer factory function
      props,
      pointCloudPropsKeys,
      emit,
    )

    // Expose the layer reference for external use
    expose({ layer })

    return () => [] // Renderless component
  },
})
