import { defineComponent } from 'vue'
import { useLayer } from '@/composables/useLayer.ts'
import { bitmapLayerProps, bitmapPropsKeys } from '@/lib/layers/bitmap.lib.ts'
import { BitmapLayer, type BitmapLayerProps } from '@deck.gl/layers'

export default defineComponent({
  name: 'BitmapLayer',
  props: { ...bitmapLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: BitmapLayerProps, { emit, expose }) {
    const { layer } = useLayer(
      (opts) => new BitmapLayer(opts as any),
      props as any,
      bitmapPropsKeys as any,
      emit,
    )

    expose({ layer })

    return () => []
  },
})
