import { defineComponent } from 'vue'
import { useLayer } from '@/composables/useLayer.ts'
import { screenGridLayerProps, screenGridPropsKeys } from '@/lib/layers/screen-grid.lib.ts'
import { ScreenGridLayer, type ScreenGridLayerProps } from '@deck.gl/aggregation-layers'

export default defineComponent({
  name: 'ScreenGridLayer',
  props: { ...screenGridLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: ScreenGridLayerProps, { emit, expose }) {
    const { layer } = useLayer(
      (opts) => new ScreenGridLayer(opts as any),
      props as any,
      screenGridPropsKeys as any,
      emit,
    )

    expose({ layer })

    return () => []
  },
})
