import { defineComponent } from 'vue'
import { useLayer } from '@/composables/useLayer.ts'
import { lineLayerProps, linePropsKeys } from '@/lib/layers/line.lib.ts'
import { LineLayer, type LineLayerProps } from '@deck.gl/layers'

export default defineComponent({
  name: 'LineLayer',
  props: { ...lineLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: LineLayerProps, { emit, expose }) {
    const { layer } = useLayer(
      (opts) => new LineLayer(opts as any),
      props as any,
      linePropsKeys as any,
      emit,
    )

    expose({ layer })

    return () => []
  },
})
