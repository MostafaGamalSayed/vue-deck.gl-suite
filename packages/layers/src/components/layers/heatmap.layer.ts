import { defineComponent, onMounted } from 'vue'
import { heatmapLayerProps, heatmapPropsKeys } from '@/lib/layers/heatmap.lib.ts'
import { HeatmapLayer, type HeatmapLayerProps } from '@deck.gl/aggregation-layers'
import { genDeckLayerOpts } from '@/utils'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'HeatmapLayer',
  props: { ...heatmapLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: HeatmapLayerProps, { emit }) {
    function initialize() {
      const opts: any = genDeckLayerOpts(
        { ...props },
        heatmapPropsKeys,
        emit,
      )

      useLayer(() => new HeatmapLayer(opts))
    }

    onMounted(initialize)

    return () => []
  },
})
