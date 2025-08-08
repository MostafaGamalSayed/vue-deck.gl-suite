import { defineComponent } from 'vue'
import { useLayer } from '@/composables/useLayer.ts'
import { solidPolygonLayerProps, solidPolygonPropsKeys } from '@/lib/layers/solid-polygon.lib.ts'
import { SolidPolygonLayer, type SolidPolygonLayerProps } from '@deck.gl/layers'

export default defineComponent({
  name: 'SolidPolygonLayer',
  props: { ...solidPolygonLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: SolidPolygonLayerProps, { emit, expose }) {
    const { layer } = useLayer(
      (opts) => new SolidPolygonLayer(opts as any),
      props as any,
      solidPolygonPropsKeys as any,
      emit,
    )

    expose({ layer })

    return () => []
  },
})
