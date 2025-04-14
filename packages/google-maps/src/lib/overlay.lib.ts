import type { ComponentPropsOptions, PropType } from 'vue'
import { type MapboxOverlayProps } from '@deck.gl/mapbox'
import { Deck } from '@deck.gl/core'
import type { GoogleMapsOverlayProps } from '@deck.gl/google-maps'

export const overlayProps: ComponentPropsOptions = {
  // Add props explicitly defined in MapboxOverlayProps
  interleaved: {
    type: Boolean as PropType<MapboxOverlayProps['interleaved']>,
    default: false,
  },
  beforeId: {
    type: String as PropType<string>,
    default: undefined,
  },
  id: {
    type: String,
    default: 'deckgl-overlay',
  },
  /** Additional CSS styles for the canvas. */
  style: {
    type: Object as PropType<MapboxOverlayProps['style']>,
    default: Deck.defaultProps.style,
  },

  /** Controls the resolution of drawing buffer used for rendering.
   * @default `true` (use browser devicePixelRatio)
   */
  useDevicePixels: {
    type: [Boolean, Number] as PropType<MapboxOverlayProps['useDevicePixels']>,
    default: Deck.defaultProps.useDevicePixels,
  },
  /** Extra pixels around the pointer to include while picking.
   * @default `0`
   */
  pickingRadius: {
    type: Number as PropType<MapboxOverlayProps['pickingRadius']>,
    default: Deck.defaultProps.pickingRadius,
  },
  /** WebGL parameters to be set before each frame is rendered. */
  parameters: {
    type: Object as PropType<MapboxOverlayProps['parameters']>,
    default: Deck.defaultProps.parameters,
  },
  /** If supplied, will be called before a layer is drawn to determine whether it should be rendered. */
  layerFilter: {
    type: Function as unknown as PropType<MapboxOverlayProps['layerFilter']>,
    default: Deck.defaultProps.layerFilter,
  },
  /**
   * The array of Layer  instances to be rendered.
   * Nested arrays are accepted, as well as falsy values (`null`, `false`, `undefined`)
   */
  layers: {
    type: Array as PropType<MapboxOverlayProps['layers']>,
    default: Deck.defaultProps.layers,
  },
  /** The array of effects to be rendered. A lighting effect will be added if an empty array is supplied. */
  effects: {
    type: Array as PropType<MapboxOverlayProps['effects']>,
    default: Deck.defaultProps.effects,
  },
  /** A single View instance, or an array of `View` instances.
   * @default `new MapView()`
   */
  views: {
    type: [Object, Array] as PropType<MapboxOverlayProps['views']>,
    default: Deck.defaultProps.views,
  },
  /** Allow browser default touch actions.
   * @default `'none'`
   */
  touchAction: {
    type: String as PropType<MapboxOverlayProps['touchAction']>,
    default: Deck.defaultProps.touchAction,
  },
  /** Set Hammer.js recognizer options for gesture recognition. */
  eventRecognizerOptions: {
    type: Object as PropType<MapboxOverlayProps['eventRecognizerOptions']>,
    default: Deck.defaultProps.eventRecognizerOptions,
  },
  /** A custom callback to retrieve the cursor type. */
  getCursor: {
    type: Function as PropType<MapboxOverlayProps['getCursor']>,
    default: Deck.defaultProps.getCursor,
  },
  /** Callback that takes a hovered-over point and renders a tooltip. */
  getTooltip: {
    type: Function as unknown as PropType<MapboxOverlayProps['getTooltip']>,
    default: Deck.defaultProps.getTooltip,
  },
  /** (Debug) Flag to enable WebGL debug mode. Requires importing `@luma.gl/debug`. */
  debug: {
    type: Boolean as PropType<MapboxOverlayProps['debug']>,
    default: Deck.defaultProps.debug,
  },
}
export const overlayPropsKeys: (keyof GoogleMapsOverlayProps)[] = [
  'interleaved',
  'id',
  'style',
  'useDevicePixels',
  'pickingRadius',
  'parameters',
  'layerFilter',
  'layers',
  'effects',
  'views',
  'touchAction',
  'eventRecognizerOptions',
  'getCursor',
  'getTooltip',
  'debug',
]

