import { defineComponent } from 'vue'
import { useLayer } from '@/composables/useLayer.ts'
import { mvtLayerProps, mvtPropsKeys } from '@/lib/layers/mvt.lib.ts'
import { MVTLayer, type MVTLayerProps } from '@deck.gl/geo-layers'

export default defineComponent({
  name: 'MVTLayer',
  props: { ...mvtLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: MVTLayerProps, { emit, expose }) {
    const { layer } = useLayer(
      (opts) => new MVTLayer(opts as any),
      props as any,
      mvtPropsKeys as any,
      emit,
    )

    expose({ layer })

    return () => []
  },
})
