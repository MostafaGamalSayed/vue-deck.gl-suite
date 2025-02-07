import { Deck, type DeckProps } from '@deck.gl/core'
import type { ComponentPropsOptions, PropType } from 'vue'
import type { DeckOptions } from '@/shared/types.ts'

export const deckProps: ComponentPropsOptions = {
  id: {
    type: String,
    default: 'deckgl-overlay',
  },
  /** Width of the canvas, a number in pixels or a valid CSS string.
   * @default `'100%'`
   */
  width: {
    type: [String, Number] as PropType<DeckProps['width']>,
    default: Deck.defaultProps.width,
  },
  /** Height of the canvas, a number in pixels or a valid CSS string.
   * @default `'100%'`
   */
  height: {
    type: [String, Number] as PropType<DeckProps['height']>,
    default: Deck.defaultProps.height,
  },
  /** Additional CSS styles for the canvas. */
  style: {
    type: Object as PropType<DeckProps['style']>,
    default: Deck.defaultProps.style,
  },

  /** Controls the resolution of drawing buffer used for rendering.
   * @default `true` (use browser devicePixelRatio)
   */
  useDevicePixels: {
    type: [Boolean, Number] as PropType<DeckProps['useDevicePixels']>,
    default: Deck.defaultProps.useDevicePixels,
  },
  /** Extra pixels around the pointer to include while picking.
   * @default `0`
   */
  pickingRadius: {
    type: Number as PropType<DeckProps['pickingRadius']>,
    default: Deck.defaultProps.pickingRadius,
  },
  /** WebGL parameters to be set before each frame is rendered. */
  parameters: {
    type: Object as PropType<DeckProps['parameters']>,
    default: Deck.defaultProps.parameters,
  },
  /** If supplied, will be called before a layer is drawn to determine whether it should be rendered. */
  layerFilter: {
    type: Function as unknown as PropType<DeckProps['layerFilter']>,
    default: Deck.defaultProps.layerFilter,
  },

  /** The container to append the auto-created canvas to.
   * @default `document.body`
   */
  parent: {
    type: Object as PropType<DeckProps['parent']>,
    default: Deck.defaultProps.parent,
  },
  /**
   * The array of Layer  instances to be rendered.
   * Nested arrays are accepted, as well as falsy values (`null`, `false`, `undefined`)
   */
  layers: {
    type: Array as PropType<DeckProps['layers']>,
    default: Deck.defaultProps.layers,
  },
  /** The array of effects to be rendered. A lighting effect will be added if an empty array is supplied. */
  effects: {
    type: Array as PropType<DeckProps['effects']>,
    default: Deck.defaultProps.effects,
  },
  /** A single View instance, or an array of `View` instances.
   * @default `new MapView()`
   */
  views: {
    type: [Object, Array] as PropType<DeckProps['views']>,
    default: Deck.defaultProps.views,
  },
  /** Options for viewport interactivity, e.g. pan, rotate and zoom with mouse, touch and keyboard. */
  controller: {
    type: [Object, Boolean] as PropType<DeckProps['controller']>,
    default: Deck.defaultProps.controller,
  },
  /**
   * An object that describes the view state for each view in the `views` prop.
   * Use if the camera state should be managed external to the `Deck` instance.
   */
  viewState: {
    type: Object as PropType<DeckProps['viewState']>,
    default: Deck.defaultProps.viewState,
  },
  /**
   * If provided, the `Deck` instance will track camera state changes automatically,
   * with `initialViewState` as its initial settings.
   */
  initialViewState: {
    type: Object as PropType<DeckProps['initialViewState']>,
    default: Deck.defaultProps.initialViewState,
  },
  /** Allow browser default touch actions.
   * @default `'none'`
   */
  touchAction: {
    type: String as PropType<DeckProps['touchAction']>,
    default: Deck.defaultProps.touchAction,
  },
  /** Set Hammer.js recognizer options for gesture recognition. */
  eventRecognizerOptions: {
    type: Object as PropType<DeckProps['eventRecognizerOptions']>,
    default: Deck.defaultProps.eventRecognizerOptions,
  },
  /** A custom callback to retrieve the cursor type. */
  getCursor: {
    type: Function as PropType<DeckProps['getCursor']>,
    default: Deck.defaultProps.getCursor,
  },
  /** Callback that takes a hovered-over point and renders a tooltip. */
  getTooltip: {
    type: Function as unknown as PropType<DeckProps['getTooltip']>,
    default: Deck.defaultProps.getTooltip,
  },
  /** (Debug) Flag to enable WebGL debug mode. Requires importing `@luma.gl/debug`. */
  debug: {
    type: Boolean as PropType<DeckProps['debug']>,
    default: Deck.defaultProps.debug,
  },
}

export const deckPropsKeys: Array<keyof DeckOptions> = [
  'id',
  'width',
  'height',
  'style',
  'useDevicePixels',
  'pickingRadius',
  'parameters',
  'layerFilter',
  'parent',
  'canvas',
  'layers',
  'effects',
  'views',
  'controller',
  'viewState',
  'initialViewState',
  'touchAction',
  'eventRecognizerOptions',
  'widgets',
  'getCursor',
  'getTooltip',
  'debug',
]
