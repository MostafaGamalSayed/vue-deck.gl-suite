import {
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  provide,
  type Ref,
  ref,
  shallowRef,
  type SlotsType,
  watch,
} from 'vue'
import { deckProps, deckPropsKeys } from '../lib/deck.lib.ts'
import { Deck, type DeckProps, Layer } from '@deck.gl/core'
import { addLayerSymbol, deckInstanceSymbol, removeLayerSymbol } from '@/shared/constants.ts'
import { genDeckOpts } from '@/utils'

export default defineComponent({
  name: 'DeckGL',
  props: { ...deckProps }, // Component props derived from the shared `deckProps`
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
  setup(props: DeckProps, ctx) {
    const canvasRef = shallowRef<HTMLCanvasElement>()
    const deckInstance: Ref<Deck | null> = ref(null)
    const isInitialized = ref(false) // Reactively tracks if the Deck instance is initialized
    const layers: Ref<DeckProps['layers']> = ref([]) // Reactive state for layers

    // Provide Deck instance and helper methods to descendants
    provide(deckInstanceSymbol, deckInstance) // Share deck instance with child components
    provide(addLayerSymbol, (layer: Layer) => {
      // Function to add layers dynamically
      if (layer) layers.value?.push(layer)
    })
    provide(removeLayerSymbol, (layer: Layer) => {
      // Function to remove layers dynamically
      layers.value = layers.value?.filter((item) => item !== layer)
    })

    // Reactively updates `layers` state when the `layers` prop changes
    watch(
      () => props.layers,
      (newLayers) => {
        layers.value?.push(newLayers)
      },
      { deep: true },
    )

    // Syncs changes in `layers` to the Deck.gl instance
    watch(
      () => layers.value,
      (newLayers) => {
        if (deckInstance.value) {
          deckInstance.value.setProps({ layers: newLayers })
        }
      },
      { deep: true },
    )

    // Watches and applies changes to the `viewState` prop
    watch(
      () => props.viewState,
      (newViewState) => {
        if (deckInstance.value) {
          deckInstance.value.setProps({ viewState: newViewState })
        }
      },
      { deep: true },
    )

    // Initializes the Deck.gl instance and configures its options
    function initialize() {
      const opts: Partial<DeckProps> = genDeckOpts<DeckProps>({ ...props }, deckPropsKeys) // Normalize props into Deck.gl options
      delete opts['layers'] // Handle `layers` separately

      deckInstance.value = new Deck({
        ...opts,
        canvas: canvasRef.value,
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
      })

      isInitialized.value = true // Mark initialization as complete
      layers.value = Array.isArray(props.layers) ? props.layers : [] // Set initial layers from props
    }

    // Initialize Deck.gl instance
    onMounted(() => {
      if (!canvasRef.value) throw new Error('Canvas was not initialized')
      initialize()
    })

    // Cleans up the Deck instance on component unmount
    onBeforeUnmount(() => {
      if (deckInstance.value) {
        deckInstance.value.finalize()
        deckInstance.value = null
      }
    })

    // Expose Deck instance for external access (e.g., parent components)
    ctx.expose({
      deckInstance,
    })

    // Render function: Renders the canvas and optional slot content
    return () => [
      h('canvas', {
        id: props.id,
        ref: canvasRef,
        style: {
          width: typeof props.width === 'number' ? `${props.width}px` : props.width,
          height: typeof props.height === 'number' ? `${props.height}px` : props.height,
        },
      }),
      isInitialized.value && ctx.slots.default ? ctx.slots.default({}) : undefined,
    ]
  },
})
