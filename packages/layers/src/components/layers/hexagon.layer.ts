import { defineComponent, onMounted } from 'vue'
import { hexagonLayerProps, hexagonPropsKeys } from '@/lib/layers/hexagon.lib.ts'
import { HexagonLayer, type HexagonLayerProps } from '@deck.gl/aggregation-layers'
import { genDeckLayerOpts } from '@/utils'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'HexagonLayer',
  props: { ...hexagonLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: HexagonLayerProps, { emit }) {
    function initialize() {
      const opts: any = genDeckLayerOpts({ ...props }, hexagonPropsKeys, emit)

      useLayer(() => new HexagonLayer(opts))
    }

    onMounted(initialize)

    return () => []
  },
})
