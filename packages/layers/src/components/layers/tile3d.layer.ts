import { defineComponent, onMounted } from 'vue'
import { genDeckLayerOpts } from '@/utils'
import { useLayer } from '@/composables/useLayer.ts'
import { tile3DLayerProps, tile3DPropsKeys } from '@/lib/layers/tile3d.lib.ts'
import { type Tile3DLayerProps, Tile3DLayer } from '@deck.gl/geo-layers'

export default defineComponent({
  name: 'Tile3DLayer',
  props: { ...tile3DLayerProps },
  emits: ['hover', 'click', 'drag', 'dragStart', 'dragEnd', 'dataLoad', 'error'],
  setup(props: Tile3DLayerProps, { emit }) {
    function initialize() {
      const opts: Partial<Tile3DLayerProps> = genDeckLayerOpts({ ...props }, tile3DPropsKeys, emit)
      console.log(new Tile3DLayer(opts))
      useLayer(() => new Tile3DLayer(opts))
    }

    onMounted(initialize)

    return () => []
  },
})
