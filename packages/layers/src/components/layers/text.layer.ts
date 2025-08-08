import { defineComponent } from 'vue'
import { useLayer } from '@/composables/useLayer.ts'
import { textLayerProps, textPropsKeys } from '@/lib/layers/text.lib.ts'
import { TextLayer, type TextLayerProps } from '@deck.gl/layers'

export default defineComponent({
  name: 'TextLayer',
  props: { ...textLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: TextLayerProps, { emit, expose }) {
    const { layer } = useLayer(
      (opts) => new TextLayer(opts as any),
      props as any,
      textPropsKeys as any,
      emit,
    )

    expose({ layer })

    return () => []
  },
})
