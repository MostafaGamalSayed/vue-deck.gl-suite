import { defineComponent } from 'vue'
import { TripsLayer, type TripsLayerProps } from '@deck.gl/geo-layers'
import { useLayer } from '@/composables/useLayer.ts'
import { tripsLayerProps, tripsPropsKeys } from '@/lib/layers/trips.lib.ts'

export default defineComponent({
  name: 'TripsLayer',
  props: { ...tripsLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: TripsLayerProps, { emit, expose }) {
    // Use `useLayer` for layer lifecycle management
    const { layer } = useLayer(
      (opts) => new TripsLayer(opts as any), // Layer factory function
      props,
      tripsPropsKeys,
      emit,
    )

    // Expose the layer reference for external use
    expose({ layer })

    return () => [] // Renderless component
  },
})
