import { defineComponent, onMounted } from 'vue'
import { geoJsonLayerProps, geoJsonPropsKeys } from '@/lib/layers/geojson.lib.ts'
import { GeoJsonLayer, type GeoJsonLayerProps } from '@deck.gl/layers'
import { genDeckLayerOpts } from '@/utils'
import { useLayer } from '@/composables/useLayer.ts'

export default defineComponent({
  name: 'GeoJsonLayer',
  props: { ...geoJsonLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props, { emit }) {
    function initialize() {
      const opts: Partial<GeoJsonLayerProps> = genDeckLayerOpts(({ ...props } as GeoJsonLayerProps), geoJsonPropsKeys, emit)

      useLayer(() => new GeoJsonLayer(opts))
    }

    onMounted(initialize)

    return () => []
  },
})
