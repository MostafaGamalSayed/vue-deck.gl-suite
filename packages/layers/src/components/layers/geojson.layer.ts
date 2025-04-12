import { defineComponent } from 'vue'
import { geoJsonLayerProps, geoJsonPropsKeys } from '@/lib/layers/geojson.lib.ts'
import { GeoJsonLayer, type GeoJsonLayerProps } from '@deck.gl/layers'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'GeoJsonLayer',
  props: { ...geoJsonLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props, { emit, expose }) {
    // Use `useLayer` for layer lifecycle management
    const { layer } = useLayer(
      (opts) => new GeoJsonLayer(opts), // Layer factory function
      props as GeoJsonLayerProps,
      geoJsonPropsKeys,
      emit,
    )

    // Expose the layer reference for external use
    expose({ layer })

    return () => [] // Renderless component
  },
})
