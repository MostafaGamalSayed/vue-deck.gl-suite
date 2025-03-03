import {
  defineComponent,
  h,
  markRaw,
  onBeforeUnmount,
  onMounted,
  provide,
  type Ref,
  ref,
  type SlotsType,
  watch,
} from 'vue'
import { overlayProps, overlayPropsKeys } from '../lib/overlay.lib.ts'
import { MapboxOverlay, type MapboxOverlayProps } from '@deck.gl/mapbox'
import { overlayInstanceSymbol } from '@/shared/constants.ts'
import type { Layer } from '@deck.gl/core'
import { genDeckOpts } from '@/utils/genDeckOpts.ts'

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
  setup(props: MapboxOverlayProps, ctx) {
    const overlayInstance: Ref<MapboxOverlay | null> = ref(null)
    const isInitialized = ref(false)
    const layers: Ref<MapboxOverlayProps['layers']> = ref([]) // Reactive state for layers

    // Provide Deck instance and helper methods to descendants
    provide(overlayInstanceSymbol, overlayInstance) // Share deck instance with child components
    provide('addLayer', (layer: Layer) => {
      console.log('adding layer...', layer)
      // Function to add layers dynamically
      if (layer) layers.value?.push(layer)
      console.log('layers state after adding', layers.value)
    })
    provide('removeLayer', (layer: Layer) => {
      // Function to remove layers dynamically
      layers.value = layers.value?.filter((item) => item !== layer)
    })

    // Reactively updates `layers` state when the `layers` prop changes
    watch(
      () => props.layers,
      (newLayers) => {
        layers.value?.push(newLayers)
      },
    )

    // Syncs changes in `layers` to the Deck.gl instance
    watch(
      () => layers.value,
      (newLayers) => {
        if (overlayInstance.value) {
          console.log('updating overlay instance...', layers.value, newLayers)
          overlayInstance.value.setProps({ layers: newLayers })
          console.log('overlay instance after updated', overlayInstance.value)
        }
      },
    )

    // Initializes the Deck.gl instance and configures its options
    function initialize() {
      const opts: Partial<MapboxOverlayProps> = genDeckOpts<MapboxOverlayProps>(
        { ...props },
        overlayPropsKeys,
      ) // Normalize props into Deck.gl options
      delete opts['layers'] // Handle `layers` separately
      console.log('initializing overlayInstance (layers should be empty)...', layers.value)
      console.log('opts of overlayInstance (shouldn\'t have layers prop)...', opts)

      overlayInstance.value = markRaw(
        new MapboxOverlay({
          ...opts,
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

      isInitialized.value = true // Mark initialization as complete
      console.log('overlay is initialized (layers should be empty if layers not provided to the overlayInstance)', layers.value)
      layers.value = Array.isArray(props.layers) ? props.layers : [] // Set initial layers from props
    }

    // Initialize MapboxOverlay instance
    onMounted(initialize)

    // Cleans up the Deck instance on component unmount
    onBeforeUnmount(() => {
      if (overlayInstance.value) {
        overlayInstance.value.finalize()
        overlayInstance.value = null
      }
    })

    // Expose Deck instance for external access (e.g., parent components)
    ctx.expose({
      overlayInstance,
    })

    // Render function: Renders the canvas and optional slot content
    return () => [isInitialized.value && ctx.slots.default ? ctx.slots.default({}) : undefined]
  },
})
