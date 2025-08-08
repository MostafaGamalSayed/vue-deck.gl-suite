import { defineComponent } from 'vue'
import { useLayer } from '@/composables/useLayer.ts'
import { gridCellLayerProps, gridCellPropsKeys } from '@/lib/layers/grid-cell.lib.ts'
import { GridCellLayer, type GridCellLayerProps } from '@deck.gl/layers'

export default defineComponent({
  name: 'GridCellLayer',
  props: { ...gridCellLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: GridCellLayerProps, { emit, expose }) {
    const { layer } = useLayer(
      (opts) => new GridCellLayer(opts as any),
      props as any,
      gridCellPropsKeys as any,
      emit,
    )

    expose({ layer })

    return () => []
  },
})
