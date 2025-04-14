import {
  computed,
  defineComponent,
  markRaw,
  onBeforeUnmount,
  onMounted,
  provide,
  type Ref,
  ref,
  type SlotsType, watch
} from 'vue'
import { overlayProps, overlayPropsKeys } from '../lib/overlay.lib.ts'
import { googleOverlayInstanceSymbol } from '@/shared/constants.ts'
import { type Layer } from '@deck.gl/core'
import { genDeckOpts } from '@/utils/genDeckOpts.ts'
import  { GoogleMapsOverlay, type GoogleMapsOverlayProps } from '@deck.gl/google-maps'

export default defineComponent({
  name: 'DeckGL',
  props: { ...overlayProps }, // Component props derived from the shared `deckProps`
  slots: Object as SlotsType<{ default: unknown }>, // Define default slot type for content inside the component
  emits: [
    'load', // Deck instance successfully loads
    'click', // User clicks on the deck
    'hover', // Mouse hovers over the deck
    'drag', // Drag events on the deck
    'dragStart', // Dragging begins
    'dragEnd', // Dragging ends
    'deviceInitialized', // GPU/Device successfully initialized
    'beforeRender', // Event triggered before rendering
    'afterRender', // Event triggered after rendering
    'interactionStateChange', // Triggered when interaction state updates
    'viewStateChange', // Changes in view state
    'error', // Catches runtime errors in layers
    'resize', // Canvas resize event
    'metrics', // Performance metrics reporting
  ],
  setup(props: GoogleMapsOverlayProps, ctx) {
    const overlayInstance: Ref<GoogleMapsOverlay | null> = ref(null)
    const isInitialized = ref(false)
    const layers: Ref<GoogleMapsOverlayProps['layers']> = ref([]) // Reactive state for layers

    // Provide Deck instance and helper methods to descendants
    provide(googleOverlayInstanceSymbol, overlayInstance) // Share deck instance with child components
    provide('addLayer', (layer: Layer) => {
      // Function to add layers dynamically
      // @ts-ignore
      layers.value = [...layers.value, layer]
    })
    provide('removeLayer', (layer: Layer) => {
      // Function to remove layers dynamically
      layers.value = layers.value?.filter((existingLayer) => existingLayer !== layer)
    })

    const allLayers = computed(() => {
      // @ts-ignore
      return [...layers.value, ...props.layers]
    })

    watch(allLayers, () => {
      overlayInstance.value?.setProps({ layers: allLayers.value })
    }, { deep: true })

    function initialize() {
      const opts: Partial<GoogleMapsOverlayProps> = genDeckOpts<GoogleMapsOverlayProps>(
        { ...props },
        overlayPropsKeys,
      ) // Normalize props into Deck.gl options

      overlayInstance.value = markRaw(
        new GoogleMapsOverlay({
          ...opts,
          layers: [...allLayers.value],
          onLoad: () => ctx.emit('load'),
          onClick: (info, event) => ctx.emit('click', { info, event }),
          onHover: (info, event) => ctx.emit('hover', { info, event }),
          onDrag: (info, event) => ctx.emit('drag', { info, event }),
          onDragStart: (info, event) => ctx.emit('dragStart', { info, event }),
          onDragEnd: (info, event) => ctx.emit('dragEnd', { info, event }),
          onDeviceInitialized: (device) => ctx.emit('deviceInitialized', device),
          onBeforeRender: ({ device, gl }) => ctx.emit('beforeRender', { device, gl }),
          onAfterRender: ({ device, gl }) => ctx.emit('afterRender', { device, gl }),
          onInteractionStateChange: (state) => ctx.emit('interactionStateChange', state),
          onViewStateChange: ({ viewState, oldViewState, viewId, interactionState }) =>
            ctx.emit('viewStateChange', { viewState, viewId, interactionState, oldViewState }),
          onError: (error, layer?) => ctx.emit('error', { error, layer }),
          onResize: ({ width, height }) => ctx.emit('resize', { width, height }),
          _onMetrics: (metrics) => ctx.emit('metrics', metrics),
        }),
      )

      isInitialized.value = true
    }

    onMounted(initialize)


    function destroyOverlay() {
      if (overlayInstance.value) {
        overlayInstance.value.finalize()
        overlayInstance.value = null
      }
    }

    // Cleans up the Deck instance on component unmount
    onBeforeUnmount(destroyOverlay)

    // Expose Deck instance for external access (e.g., parent components)
    ctx.expose({
      googleMapsOverlay: overlayInstance,
    })

    // Render function: Renders the canvas and optional slot content
    return () => [isInitialized.value && ctx.slots.default ? ctx.slots.default({}) : undefined]
  },
})
