import { defineComponent } from 'vue'
import { wmsLayerProps, wmsPropsKeys } from '@/lib/layers/wms.lib.ts'
import { _WMSLayer, type WMSLayerProps } from '@deck.gl/geo-layers'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'WMSLayer',
  props: { ...wmsLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: WMSLayerProps, { emit, expose }) {
    // Use `useLayer` for layer lifecycle management
    const { layer } = useLayer(
      (opts) => new _WMSLayer(opts as any), // Layer factory function
      props,
      wmsPropsKeys,
      emit,
    )

    // Expose the layer reference for external use
    expose({ layer })

    return () => [] // Renderless component
  },
})
