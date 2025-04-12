import { defineComponent } from 'vue'
import { pathLayerProps, pathPropsKeys } from '@/lib/layers/path.lib.ts'
import { PathLayer, type PathLayerProps } from '@deck.gl/layers'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'PathLayer',
  props: { ...pathLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: PathLayerProps, { emit, expose }) {
    // Use `useLayer` for layer lifecycle management
    const { layer } = useLayer(
      (opts) => new PathLayer(opts as any), // Layer factory function
      props,
      pathPropsKeys,
      emit,
    )

    // Expose the layer reference for external use
    expose({ layer })

    return () => [] // Renderless component
  },
})
