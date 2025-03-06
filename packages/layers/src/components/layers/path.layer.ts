import { defineComponent, onMounted } from 'vue'
import { pathLayerProps, pathPropsKeys } from '@/lib/layers/path.lib.ts'
import { PathLayer, type PathLayerProps } from '@deck.gl/layers'
import { genDeckLayerOpts } from '@/utils'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'PathLayer',
  props: { ...pathLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: PathLayerProps, { emit }) {
    function initialize() {
      const opts: Partial<PathLayerProps> = genDeckLayerOpts({ ...props }, pathPropsKeys, emit)

      useLayer(() => new PathLayer(opts))
    }

    onMounted(initialize)

    return () => []
  },
})
