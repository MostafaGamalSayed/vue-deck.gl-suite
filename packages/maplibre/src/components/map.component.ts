import {
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  markRaw,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  shallowRef,
  type SlotsType,
  watch,
} from 'vue'
import {
  type IControl,
  Map as MaplibreMap,
  type MapEventType,
  type StyleSpecification,
} from 'maplibre-gl'
import { isInitializedSymbol, isLoadedSymbol, mapSymbol } from '@/types'
import {
  MAP_EVENT_TYPES,
  createEventHandler,
  type MapEvent,
  type MapEventHandler,
  MAP_PROPS,
  type MapProps,
} from '@/lib/map.lib'
import { isLngLatEqual } from '@/utils/isLngLatEqual'
import { overlayInstanceSymbol } from '@/shared/constants.ts'

/**
 * The map component
 *
 * See [Map](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/).
 */
export default defineComponent({
  name: 'Map',
  props: {
    ...MAP_PROPS,
  },
  emits: [
    'map:error',
    'map:load',
    'map:idle',
    'map:remove',
    'map:render',
    'map:resize',
    'map:webglcontextlost',
    'map:webglcontextrestored',
    'map:dataloading',
    'map:data',
    'map:tiledataloading',
    'map:sourcedataloading',
    'map:styledataloading',
    'map:sourcedata',
    'map:styledata',
    'map:styleimagemissing',
    'map:dataabort',
    'map:sourcedataabort',
    'map:boxzoomcancel',
    'map:boxzoomstart',
    'map:boxzoomend',
    'map:touchcancel',
    'map:touchmove',
    'map:touchend',
    'map:touchstart',
    'map:click',
    'map:contextmenu',
    'map:dblclick',
    'map:mousemove',
    'map:mouseup',
    'map:mousedown',
    'map:mouseout',
    'map:mouseover',
    'map:movestart',
    'map:move',
    'map:moveend',
    'map:zoomstart',
    'map:zoom',
    'map:zoomend',
    'map:rotatestart',
    'map:rotate',
    'map:rotateend',
    'map:dragstart',
    'map:drag',
    'map:dragend',
    'map:pitchstart',
    'map:pitch',
    'map:pitchend',
    'map:wheel',
    'map:terrain',
    'map:cooperativegestureprevented',
    'map:projectiontransition',
    /**
     * Center property updated
     */
    'update:center',
    /**
     * Zoom property updated
     */
    'update:zoom',
    /**
     * Pitch property updated
     */
    'update:pitch',
    /**
     * Bearing property updated
     */
    'update:bearing',
  ],
  slots: Object as SlotsType<{ default: unknown }>,
  setup(props: MapProps, ctx) {
    const component = markRaw(getCurrentInstance()!),
      container = shallowRef<HTMLDivElement>(),
      map = shallowRef<MaplibreMap>(),
      isInitialized = ref(false),
      isLoaded = ref(false),
      boundMapEvents = new Map<
        keyof MapEventType | `__${keyof MapEventType}`,
        MapEventHandler<keyof MapEventType>
      >()

    provide(mapSymbol, map)
    provide(isLoadedSymbol, isLoaded)
    provide(isInitializedSymbol, isInitialized)

    const overlayInstance = inject(overlayInstanceSymbol)

    /*
     * bind prop watchers
     */
    watch(
      () => props.bearing,
      (v) => {
        if (v) {
          map.value?.setBearing(v)
        }
      },
    )
    watch(
      () => props.bounds,
      (v) => {
        if (v) {
          map.value?.fitBounds(v, props.fitBoundsOptions)
        }
      },
    )
    watch(
      () => props.center,
      (v) => {
        const center = map.value?.getCenter()
        if (v && center && !isLngLatEqual(v, center)) {
          map.value?.setCenter(v)
        }
      },
    )
    watch(
      () => props.maxBounds,
      (v) => {
        if (v) {
          map.value?.setMaxBounds(v)
        }
      },
    )
    watch(
      () => props.maxPitch,
      (v) => {
        if (v) {
          map.value?.setMaxPitch(v)
        }
      },
    )
    watch(
      () => props.maxZoom,
      (v) => {
        if (v) {
          map.value?.setMaxZoom(v)
        }
      },
    )
    watch(
      () => props.minPitch,
      (v) => {
        if (v) {
          map.value?.setMinPitch(v)
        }
      },
    )
    watch(
      () => props.minZoom,
      (v) => {
        if (v) {
          map.value?.setMinZoom(v)
        }
      },
    )
    watch(
      () => props.pitch,
      (v) => {
        if (v) {
          map.value?.setPitch(v)
        }
      },
    )
    watch(
      () => props.renderWorldCopies,
      (v) => {
        if (v) {
          map.value?.setRenderWorldCopies(v)
        }
      },
    )
    watch(
      () => props.style,
      (v) => {
        if (v) {
          map.value?.setStyle(v as StyleSpecification)
        }
      },
    )
    watch(
      () => props.transformRequest,
      (v) => {
        if (v) {
          map.value?.setTransformRequest(v)
        }
      },
    )
    watch(
      () => props.zoom,
      (v) => {
        if (v) {
          map.value?.setZoom(v)
        }
      },
    )
    watch(
      () => props.zoom,
      (v) => {
        if (v) {
          map.value?.setZoom(v)
        }
      },
    )

    function initialize() {
      // build options
      const opts: typeof props & {
        style?: string | StyleSpecification
        container: HTMLElement
      } = { ...props, style: props.style, container: container.value! }

      for (const opt of Object.keys(opts) as Array<keyof typeof opts>) {
        if (opts[opt] === undefined) {
          delete opts[opt]
        }
      }

      // init map
      map.value = markRaw(new MaplibreMap(opts))
      isInitialized.value = true
      boundMapEvents.set('__load', () => (isLoaded.value = true))
      map.value.on('load', boundMapEvents.get('__load')!)
      boundMapEvents.set('__moveend', () => ctx.emit('update:center', map.value!.getCenter()))
      map.value.on('moveend', boundMapEvents.get('__moveend')!)
      boundMapEvents.set('__zoomend', () => ctx.emit('update:zoom', map.value!.getZoom()))
      map.value.on('zoomend', boundMapEvents.get('__zoomend')!)
      boundMapEvents.set('__pitchend', () => ctx.emit('update:pitch', map.value!.getPitch()))
      map.value.on('pitchend', boundMapEvents.get('__pitchend')!)
      boundMapEvents.set('__rotateend', () => ctx.emit('update:bearing', map.value!.getBearing()))
      map.value.on('rotateend', boundMapEvents.get('__rotateend')!)

      map.value.on('load', () => {
        if (overlayInstance) {
          map.value?.addControl(overlayInstance.value as unknown as IControl)
        }
      })

      // bind events
      if (component.vnode.props) {
        for (const event of MAP_EVENT_TYPES) {
          if (component.vnode.props['onMap:' + event]) {
            const eventName = `map:${event}`
            const handler = createEventHandler<typeof event>(
              component,
              map.value,
              ctx,
              eventName as MapEvent,
            )
            boundMapEvents.set(event, handler)
            map.value.on(event, handler)
          }
        }
      }

      // automatic re-initialization of map on CONTEXT_LOST_WEBGL
      map.value.getCanvas().addEventListener('webglcontextlost', restart)
    }

    async function dispose() {
      isLoaded.value = false

      if (map.value) {
        // unbind events
        map.value.getCanvas().removeEventListener('webglcontextlost', restart)
        isInitialized.value = false
        boundMapEvents.forEach((func, en) => {
          map.value!.off(en.startsWith('__') ? en.substring(2) : en, func)
        })
        // destroy map
        map.value.remove()
      }
    }

    function restart() {
      dispose().then()
      nextTick(initialize).then()
    }

    /*
     * init map
     */
    onMounted(initialize)

    /*
     * Dispose component
     */
    onBeforeUnmount(dispose)

    ctx.expose({ map })

    return () => [
      h('div', {
        ref: container,
        style: { height: props.height, width: props.width },
      }),
      isInitialized.value && ctx.slots.default ? ctx.slots.default({}) : undefined,
    ]
  },

  /**
   * Slot for controls, sources, marker and popup
   * @slot default
   */
  render() {
    return null
  },
})
