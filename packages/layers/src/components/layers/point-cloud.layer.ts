import { defineComponent, onMounted } from 'vue'
import { pointCloudProps, pointCloudPropsKeys } from '@/lib/layers/point-cloud.lib.ts'
import { PointCloudLayer, type PointCloudLayerProps } from '@deck.gl/layers'
import { genDeckLayerOpts } from '@/utils'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'PointCloudLayer',
  props: { ...pointCloudProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: PointCloudLayerProps, { emit }) {
    function initialize() {
      const opts: Partial<PointCloudLayerProps> = genDeckLayerOpts(
        { ...props },
        pointCloudPropsKeys,
        emit,
      )

      useLayer(() => new PointCloudLayer(opts))
    }

    onMounted(initialize)

    return () => []
  },
})
