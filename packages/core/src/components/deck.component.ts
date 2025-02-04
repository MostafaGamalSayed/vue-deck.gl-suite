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
import { deckProps, genDeckOpts } from '../lib/deck.lib.ts'
import { Deck, type DeckProps} from '@deck.gl/core'
import { deckInstanceSymbol } from '@/shared/constants.ts'
import type { DeckOptions } from '@/shared/types.ts'

export default defineComponent({
  name: 'DeckGL',
  props: { ...deckProps },
  slots: Object as SlotsType<{ default: unknown }>,
  emits: [
    'load',
    'click',
    'hover',
    'drag',
    'dragStart',
    'dragEnd',
    'deviceInitialized',
    'beforeRender',
    'afterRender',
    'interactionStateChange',
    'viewStateChange',
    'error',
    'resize',
    'metrics',
  ],
  setup(props: DeckOptions, ctx) {
    const canvasRef = shallowRef<HTMLCanvasElement>()
    const deckInstance: Ref<Deck | null> = ref(null)
    const isInitialized = ref(false)
    const isLoaded = ref(false)
    const layers: Ref<DeckProps['layers']> = ref([])

    provide(deckInstanceSymbol, deckInstance)
    provide('addLayer', (layer: DeckProps['layers']) => {
      layers.value?.push(layer)
    })

    watch(
      () => props.layers,
      (newLayers) => {
        layers.value?.push(newLayers)
      },
      { deep: true },
    )

    watch(
      () => layers.value,
      (newLayers) => {
        deckInstance.value?.setProps({ layers: newLayers })
        console.log('layers changed', layers.value)
      },
      { deep: true },
    )

    watch(
      () => props.viewState,
      (newViewState) => {
        deckInstance.value?.setProps({ viewState: newViewState })
      },
      { deep: true },
    )

    function initialize() {
      const opts: Partial<DeckOptions> = genDeckOpts({ ...props })

      if (opts['layers']) {
        layers.value?.push(opts['layers'])
        delete opts['layers']
      }

      deckInstance.value = new Deck({
        ...opts,
        canvas: canvasRef.value,
        layers: layers.value,
        onLoad: () => {
          ctx.emit('load')
          isLoaded.value = true
        },
        onClick: (info, event) => {
          ctx.emit('click', { info, event })
        },
        onHover: (info, event) => {
          ctx.emit('hover', { info, event })
        },
        onDrag: (info, event) => {
          ctx.emit('drag', { info, event })
        },
        onDragStart: (info, event) => {
          ctx.emit('dragStart', { info, event })
        },
        onDragEnd: (info, event) => {
          ctx.emit('dragEnd', { info, event })
        },
        onDeviceInitialized: (device) => {
          ctx.emit('deviceInitialized', device)
        },
        onBeforeRender: ({ device, gl }) => {
          ctx.emit('beforeRender', { device, gl })
        },
        onAfterRender: ({ device, gl }) => {
          ctx.emit('afterRender', { device, gl })
        },
        onInteractionStateChange: (state) => {
          ctx.emit('interactionStateChange', state)
        },
        onViewStateChange: ({ viewState, oldViewState, viewId, interactionState }) => {
          ctx.emit('viewStateChange', { viewState, viewId, interactionState, oldViewState })
        },
        onError: (error, layer?) => {
          ctx.emit('error', { error, layer })
        },
        onResize: ({ width, height }) => {
          ctx.emit('resize', { width, height })
        },
        _onMetrics: (metrics) => {
          ctx.emit('metrics', metrics)
        },
      })

      isInitialized.value = true
    }

    onMounted(() => {
      if (!canvasRef) return

      initialize()
    })

    onBeforeUnmount(() => {
      if (deckInstance.value) {
        deckInstance.value!.finalize()
        deckInstance.value = null
      }
    })

    ctx.expose({
      deckInstance,
    })

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
