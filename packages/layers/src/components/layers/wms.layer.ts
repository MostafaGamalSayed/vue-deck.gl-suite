import { defineComponent, onMounted } from 'vue'
import { wmsLayerProps, wmsPropsKeys } from '@/lib/layers/wms.lib.ts'
import { _WMSLayer, type WMSLayerProps } from '@deck.gl/geo-layers'
import { genDeckLayerOpts } from '@/utils'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'WMSLayer',
  props: { ...wmsLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: WMSLayerProps, { emit }) {
    function initialize() {
      const opts: Partial<WMSLayerProps> = genDeckLayerOpts({ ...props }, wmsPropsKeys, emit)

      useLayer(() => new _WMSLayer(opts))
    }

    onMounted(initialize)

    return () => []
  },
})
