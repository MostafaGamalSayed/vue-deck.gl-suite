import { defineComponent, onMounted } from 'vue'
import { TripsLayer, type TripsLayerProps } from '@deck.gl/geo-layers'
import { genDeckLayerOpts } from '@/utils'
import { useLayer } from '@/composables/useLayer.ts'
import { tripsLayerProps, tripsPropsKeys } from '@/lib/layers/trips.lib.ts'

export default defineComponent({
  name: 'TripsLayer',
  props: { ...tripsLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: TripsLayerProps, { emit }) {
    function initialize() {
      const opts: Partial<TripsLayerProps> = genDeckLayerOpts({ ...props }, tripsPropsKeys, emit)

      useLayer(() => new TripsLayer(opts))
    }

    onMounted(initialize)

    return () => []
  },
})
