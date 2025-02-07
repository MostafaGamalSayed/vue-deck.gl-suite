import { defineComponent, onMounted } from 'vue'
import { arcLayerProps, arcPropsKeys } from '@/lib/layers/arc.lib.ts'
import { ArcLayer, type ArcLayerProps } from '@deck.gl/layers'
import { genDeckLayerOpts } from '@/utils'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'ArcLayer',
  props: { ...arcLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: ArcLayerProps, { emit }) {
    function initialize() {
      const opts: Partial<ArcLayerProps> = genDeckLayerOpts({ ...props }, arcPropsKeys, emit)

      useLayer(() => new ArcLayer(opts))
    }

    onMounted(initialize)

    return () => []
  },
})
