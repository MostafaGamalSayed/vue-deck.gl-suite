import { defineComponent, onMounted } from 'vue'
import { gridLayerProps, gridPropsKeys } from '@/lib/layers/grid.lib.ts'
import { GridLayer, type GridLayerProps } from '@deck.gl/aggregation-layers'
import { genDeckLayerOpts } from '@/utils'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'GridLayer',
  props: { ...gridLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: GridLayerProps, { emit }) {
    function initialize() {
      const opts: Partial<GridLayerProps> = genDeckLayerOpts(
        { ...props },
        gridPropsKeys,
        emit
      )

      // @ts-ignore
      useLayer(() => new GridLayer(opts))
    }

    onMounted(initialize)

    return () => []
  },
})
