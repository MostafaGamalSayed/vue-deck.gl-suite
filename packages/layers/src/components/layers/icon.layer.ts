import { iconLayerProps, iconPropsKeys } from '@/lib/layers/icon.lib.ts'
import { IconLayer, type IconLayerProps } from '@deck.gl/layers'
import { defineComponent } from 'vue'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'IconLayer',
  props: { ...iconLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: IconLayerProps, { emit, expose }) {
    // Use `useLayer` for layer lifecycle management
    const { layer } = useLayer(
      (opts) => new IconLayer(opts as any), // Layer factory function
      props,
      iconPropsKeys,
      emit,
    )

    // Expose the layer reference for external use
    expose({ layer })

    return () => [] // Renderless component
  },
})
