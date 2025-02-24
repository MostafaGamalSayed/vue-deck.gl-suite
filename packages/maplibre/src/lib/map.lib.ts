import type { ComponentInternalInstance, ComponentPropsOptions, PropType, Raw } from 'vue'
import type { GestureOptions, Map, MapEventType, MapOptions } from 'maplibre-gl'
import type { MglEvent } from '@/types'

export type MapEventHandler<T extends keyof MapEventType> = (e: MapEventType[T]) => void

export type MapProps = MapOptions & {
  width?: number | string
  height?: number | string
}

export enum Position {
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
}

export type MapEvent = `map:${keyof MapEventType}`

export const MAP_PROPS: ComponentPropsOptions = {
  /**
   * Width of the map container
   */
  width: {
    type: [Number, String] as PropType<number | string>,
    default: '100%',
  },
  /**
   * Height of the map container
   */
  height: {
    type: [Number, String] as PropType<number | string>,
    default: '100%',
  },
  /**
   * If set, an AttributionControl will be added to the map with the provided options. To disable the attribution control, pass false. Note: showing the logo of MapLibre is not required for using MapLibre. Default Value ts compact: true, customAttribution: "MapLibre ...".
   */
  attributionControl: {
    type: [Boolean, Object] as PropType<MapOptions['attributionControl']>,
    default: undefined,
  },
  /**
   * The initial bearing (rotation) of the map, measured in degrees counter-clockwise from north. If bearing is not specified in the constructor options, MapLibre GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to 0. Default Value `0`
   * @model
   */
  bearing: {
    type: Number as PropType<MapOptions['bearing']>,
  },
  /**
   * The threshold, measured in degrees, that determines when the map's bearing will snap to north. For example, with a bearingSnap of 7, if the user rotates the map within 7 degrees of north, the map will automatically snap to exact north. Default Value `7`
   */
  bearingSnap: {
    type: Number as PropType<MapOptions['bearingSnap']>,
  },
  /**
   * The initial bounds of the map. If bounds is specified, it overrides center and zoom constructor options.
   */
  bounds: {
    type: [Array, Object] as PropType<MapOptions['bounds']>,
  },
  /**
   * If true, the "box zoom" interaction is enabled (see BoxZoomHandler). Default Value ts true
   */
  boxZoom: {
    type: Boolean as PropType<MapOptions['boxZoom']>,
    default: undefined,
  },
  /**
   *  The initial geographical centerpoint of the map. If center is not specified in the constructor options, MapLibre GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to [0, 0] Note: MapLibre GL JS uses longitude, latitude coordinate order (as opposed to latitude, longitude) to match GeoJSON. Default Value ts [0, 0]
   * @model
   */
  center: {
    type: [Array, Object] as PropType<MapOptions['center']>,
  },
  /**
   * The max number of pixels a user can shift the mouse pointer during a click for it to be considered a valid click (as opposed to a mouse drag). Default Value ts true
   */
  clickTolerance: {
    type: Number as PropType<MapOptions['clickTolerance']>,
  },
  /**
   * If true, Resource Timing API information will be collected for requests made by GeoJSON and Vector Tile web workers (this information is normally inaccessible from the main Javascript thread). Information will be returned in a resourceTiming property of relevant data events. Default Value `false`
   */
  collectResourceTiming: {
    type: Boolean as PropType<MapOptions['collectResourceTiming']>,
    default: undefined,
  },
  /**
   * If true, symbols from multiple sources can collide with each other during collision detection. If false, collision detection is run separately for the symbols in each source. Default Value `true`
   */
  crossSourceCollisions: {
    type: Boolean as PropType<MapOptions['crossSourceCollisions']>,
    default: undefined,
  },
  /**
   * If true, the "drag to pan" interaction is enabled. An Object value is passed as options to DragPanHandler#enable. Default Value `true`
   */
  dragPan: {
    type: Boolean as PropType<MapOptions['dragPan']>,
    default: undefined,
  },
  /**
   * If true, the "drag to rotate" interaction is enabled (see DragRotateHandler). Default Value `true`
   */
  dragRotate: {
    type: Boolean as PropType<MapOptions['dragRotate']>,
    default: undefined,
  },
  /**
   * If true, the "double click to zoom" interaction is enabled (see DoubleClickZoomHandler). Default Value `true`
   */
  doubleClickZoom: {
    type: Boolean as PropType<MapOptions['doubleClickZoom']>,
    default: undefined,
  },
  /**
   * If true, the map's position (zoom, center latitude, center longitude, bearing, and pitch) will be synced with the hash fragment of the page's URL. For example, http://path/to/my/page.html#2.59/39.26/53.07/-24.1/60. An additional string may optionally be provided to indicate a parameter-styled hash, e.g. http://path/to/my/page.html#map=2.59/39.26/53.07/-24.1/60&foo=bar, where foo is a custom parameter and bar is an arbitrary hash distinct from the map hash. Default Value `false`
   */
  hash: {
    type: [Boolean, String] as PropType<MapOptions['hash']>,
    default: undefined,
  },
  /**
   * Controls the duration of the fade-in/fade-out animation for label collisions after initial map load, in milliseconds. This setting affects all symbol layers. This setting does not affect the duration of runtime styling transitions or raster tile cross-fading. Default Value `300`
   */
  fadeDuration: {
    type: Number as PropType<MapOptions['fadeDuration']>,
  },
  /**
   * A FitBoundsOptions options object to use only when fitting the initial bounds provided above.
   */
  fitBoundsOptions: {
    type: Object as PropType<MapOptions['fitBoundsOptions']>,
  },
  /**
   * If false, no mouse, touch, or keyboard listeners will be attached to the map, so it will not respond to interaction. Default Value `true`
   */
  interactive: {
    type: Boolean as PropType<MapOptions['interactive']>,
    default: undefined,
  },
  /**
   * If true, keyboard shortcuts are enabled (see KeyboardHandler). Default Value `true`
   */
  keyboard: {
    type: Boolean as PropType<MapOptions['keyboard']>,
    default: undefined,
  },
  /**
   * A patch to apply to the default localization table for UI strings, e.g. control tooltips. The locale object maps namespaced UI string IDs to translated strings in the target language; see src/ui/default_locale.js for an example with all supported string IDs. The object may specify all UI strings (thereby adding support for a new translation) or only a subset of strings (thereby patching the default translation table). Default Value `null`
   */
  locale: {
    type: Object as PropType<MapOptions['locale']>,
  },
  localIdeographFontFamily: {
    type: String as PropType<MapOptions['localIdeographFontFamily']>,
  },
  /**
   * A string representing the position of the MapLibre wordmark on the map. Valid options are top-left,top-right, bottom-left, or bottom-right. Default Value 'bottom-left'
   */
  logoPosition: {
    type: [String] as PropType<MapOptions['logoPosition']>,
    validator: (val: Position) => val in Position,
  },
  /**
   * If set, the map will be constrained to the given bounds.
   */
  maxBounds: {
    type: [Array, Object] as PropType<MapOptions['maxBounds']>,
  },
  /**
   * The maximum pitch of the map (0-85). Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the MapLibre project. Default Value `60`
   */
  maxPitch: {
    type: Number as PropType<MapOptions['maxPitch']>,
  },
  /**
   * The maximum zoom level of the map (0-24). Default Value `22`
   */
  maxZoom: {
    type: Number as PropType<MapOptions['maxZoom']>,
  },
  /**
   * The minimum pitch of the map (0-85). Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the MapLibre project. Default Value `0`
   */
  minPitch: {
    type: Number as PropType<MapOptions['minPitch']>,
  },
  /**
   * The minimum zoom level of the map (0-24). Default Value `0`
   */
  minZoom: {
    type: Number as PropType<MapOptions['minZoom']>,
  },
  /**
   * The initial pitch (tilt) of the map, measured in degrees away from the plane of the screen (0-85). If pitch is not specified in the constructor options, MapLibre GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to 0. Values greater than 60 degrees are experimental and may result in rendering issues. If you encounter any, please raise an issue with details in the MapLibre project. Default Value `0`
   * @model
   */
  pitch: {
    type: Number as PropType<MapOptions['pitch']>,
  },
  /**
   * If false, the map's pitch (tilt) control with "drag to rotate" interaction will be disabled. Default Value `true`
   */
  pitchWithRotate: {
    type: Boolean as PropType<MapOptions['pitchWithRotate']>,
    default: undefined,
  },
  /**
   * Set of WebGLContextAttributes that are applied to the WebGL context of the map. See https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext for more details. contextType can be set to webgl2 or webgl to force a WebGL version. Not setting it, Maplibre will do it's best to get a suitable context.
   */
  canvasContextAttributes: {
    type: Object as PropType<MapOptions['canvasContextAttributes']>,
  },
  /**
   * If false, the map won't attempt to re-request tiles once they expire per their HTTP cacheControl/expires headers. Default Value `true`
   */
  refreshExpiredTiles: {
    type: Boolean as PropType<MapOptions['refreshExpiredTiles']>,
    default: undefined,
  },
  renderWorldCopies: {
    type: Boolean as PropType<MapOptions['renderWorldCopies']>,
    default: undefined,
  },
  scrollZoom: {
    type: Boolean as PropType<MapOptions['scrollZoom']>,
    default: undefined,
  },
  style: {
    type: [String, Object] as PropType<MapOptions['style']>,
  },
  /**
   * If `true`, the map will automatically resize when the browser window resizes.
   * Default value true
   */
  trackResize: {
    type: Boolean as PropType<MapOptions['trackResize']>,
    default: undefined,
  },
  /**
   * A callback run before the Map makes a request for an external URL. The callback can be used to modify the url, set headers, or set the credentials property for cross-origin requests.
   * Expected to return an object with a `url` property and optionally `headers` and `credentials` properties.
   */
  transformRequest: {
    type: Function as unknown as PropType<MapOptions['transformRequest']>,
  },
  /**
   * A callback run before the map's camera is moved due to user input or animation. The callback can be used to modify the new center, zoom, pitch and bearing.
   * Expected to return an object containing center, zoom, pitch or bearing values to overwrite.
   * @since 6.4.0
   */
  transformCameraUpdate: {
    type: Function as unknown as PropType<MapOptions['transformCameraUpdate']>,
  },
  /**
   * The map's TwoFingersTouchZoomRotateHandler, which allows the user to zoom or rotate the map with touch gestures.
   * Find more details and examples using `touchZoomRotate` in the TwoFingersTouchZoomRotateHandler section.
   */
  touchZoomRotate: {
    type: Boolean as PropType<MapOptions['touchZoomRotate']>,
    default: undefined,
  },
  /**
   * The map's TwoFingersTouchPitchHandler, which allows the user to pitch the map with touch gestures.
   * Find more details and examples using `touchPitch` in the TwoFingersTouchPitchHandler section.
   */
  touchPitch: {
    type: Boolean as PropType<MapOptions['touchPitch']>,
    default: undefined,
  },

  /**
   * The initial zoom level of the map. If zoom is not specified in the constructor options, MapLibre GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to 0. Default Value `0`
   * @model
   */
  zoom: {
    type: Number as PropType<MapOptions['zoom']>,
  },
  /**
   * The maximum number of tiles stored in the tile cache for a given source. If omitted, the cache will be dynamically sized based on the current viewport which can be set using `maxTileCacheZoomLevels` constructor options.
   * Default value null
   */
  maxTileCacheSize: {
    type: Number as PropType<MapOptions['maxTileCacheSize']>,
  },
  /**
   * The name or symbol to reference a map via useMap composable
   */
  mapKey: { type: [String, Symbol] as PropType<string | symbol> },
  /**
   * The pixel ratio. The canvas' width attribute will be container.clientWidth * pixelRatio and its height attribute will be container.clientHeight * pixelRatio. Defaults to devicePixelRatio if not specified.
   */
  pixelRatio: {
    type: Number as PropType<number>,
  },
  /**
   * If false, style validation will be skipped. Useful in production environment.
   * Default value true
   * @since 6.4.0
   */
  validateStyle: {
    type: Boolean as PropType<boolean>,
    default: undefined,
  },
  /**
   * The map's {@link CooperativeGesturesHandler}, which allows the user to see cooperative gesture info when user tries to zoom in/out.
   * Find more details and examples using `cooperativeGestures` in the {@link CooperativeGesturesHandler} section.
   */
  cooperativeGestures: {
    type: Object as PropType<GestureOptions>,
  },
}
export const MAP_EVENT_TYPES: Array<keyof MapEventType> = [
  'error',
  'load',
  'idle',
  'remove',
  'render',
  'resize',
  'webglcontextlost',
  'webglcontextrestored',
  'dataloading',
  'data',
  'tiledataloading',
  'sourcedataloading',
  'styledataloading',
  'sourcedata',
  'styledata',
  'styleimagemissing',
  'dataabort',
  'sourcedataabort',
  'boxzoomcancel',
  'boxzoomstart',
  'boxzoomend',
  'touchcancel',
  'touchmove',
  'touchend',
  'touchstart',
  'click',
  'contextmenu',
  'dblclick',
  'mousemove',
  'mouseup',
  'mousedown',
  'mouseout',
  'mouseover',
  'movestart',
  'move',
  'moveend',
  'zoomstart',
  'zoom',
  'zoomend',
  'rotatestart',
  'rotate',
  'rotateend',
  'dragstart',
  'drag',
  'dragend',
  'pitchstart',
  'pitch',
  'pitchend',
  'wheel',
  'terrain',
  'cooperativegestureprevented',
]

export function createEventHandler<T extends keyof MapEventType>(
  component: Raw<ComponentInternalInstance>,
  map: Map,
  ctx: {
    emit: (event: MapEvent, payload: MglEvent<T>) => void
  },
  eventName: MapEvent,
): MapEventHandler<T> {
  return (payload: MapEventType[T]) =>
    ctx.emit(eventName, {
      type: payload.type,
      map,
      component,
      event: payload,
    })
}
