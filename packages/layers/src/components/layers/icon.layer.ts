import { iconLayerProps, iconPropsKeys } from '@/lib/layers/icon.lib.ts'
import { IconLayer, type IconLayerProps } from '@deck.gl/layers'
import { defineComponent, markRaw, onMounted } from 'vue'
import { genDeckLayerOpts } from '@/utils'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'IconLayer',
  props: { ...iconLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: IconLayerProps, { emit }) {
    function initialize() {
      const opts: Partial<IconLayerProps> = genDeckLayerOpts({ ...props }, iconPropsKeys, emit)

      useLayer(() => new IconLayer(opts))
    }

    onMounted(initialize)

    return () => []
  },
})
