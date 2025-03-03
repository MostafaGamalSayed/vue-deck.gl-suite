import { defineComponent, onMounted } from 'vue'
import { columnLayerProps, columnPropsKeys } from '@/lib/layers/column.lib.ts'
import { ColumnLayer, type ColumnLayerProps } from '@deck.gl/layers'
import { genDeckLayerOpts } from '@/utils'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'ColumnLayer',
  props: { ...columnLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: ColumnLayerProps, { emit }) {
    function initialize() {
      const opts: Partial<ColumnLayerProps> = genDeckLayerOpts({ ...props }, columnPropsKeys, emit)

      useLayer(() => new ColumnLayer(opts))
    }

    onMounted(initialize)

    return () => []
  },
})
