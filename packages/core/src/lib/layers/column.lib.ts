import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import type { ColumnLayerProps } from '@deck.gl/layers'

export const columnLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,

  /**
   * The number of sides to render the disk as.
   * @default 20
   */
  diskResolution: {
    type: Number as PropType<ColumnLayerProps['diskResolution']>,
  },

  /**
   * isk size in units specified by `radiusUnits`.
   * @default 1000
   */
  radius: {
    type: Number as PropType<ColumnLayerProps['radius']>,
    default: 1000,
  },

  /**
   * Disk rotation, counter-clockwise in degrees.
   * @default 0
   */
  angle: {
    type: Number as PropType<ColumnLayerProps['angle']>,
    default: 0,
  },

  /**
   * Replace the default geometry (regular polygon that fits inside the unit circle) with a custom one.
   * @default null
   */
  vertices: {
    type: Array as PropType<ColumnLayerProps['vertices']>,
    default: null,
  },

  /**
   * Disk offset from the position, relative to the radius.
   * @default [0,0]
   */

  offset: {
    type: Array as unknown as PropType<ColumnLayerProps['offset']>,
    default: () => [0, 0],
  },
  /**
   * Radius multiplier, between 0 - 1
   * @default 1
   */

  coverage: {
    type: Number as PropType<ColumnLayerProps['coverage']>,
    default: 1,
  },

  /**
   * Column elevation multiplier.
   * @default 1
   */
  elevationScale: {
    type: Number as PropType<ColumnLayerProps['elevationScale']>,
    default: 1,
  },

  /**
   * Whether to draw a filled column (solid fill).
   * @default true
   */
  filled: {
    type: Boolean as PropType<ColumnLayerProps['filled']>,
    default: true,
  },
  /**
   * Whether to draw an outline around the disks.
   * @default false
   */
  stroked: {
    type: Boolean as PropType<ColumnLayerProps['stroked']>,
    default: false,
  },

  /**
   * Whether to extrude the columns. If set to `false`, all columns will be rendered as flat polygons.
   * @default true
   */
  extruded: {
    type: Boolean as PropType<ColumnLayerProps['extruded']>,
    default: true,
  },

  /**
   * Whether to generate a line wireframe of the column.
   * @default false
   */
  wireframe: {
    type: Boolean as PropType<ColumnLayerProps['wireframe']>,
    default: false,
  },

  /**
   * If `true`, the vertical surfaces of the columns use [flat shading](https://en.wikipedia.org/wiki/Shading#Flat_vs._smooth_shading).
   * @default false
   */
  flatShading: {
    type: Boolean as PropType<ColumnLayerProps['flatShading']>,
    default: false,
  },

  /**
   * The units of the radius.
   * @default 'meters'
   */
  radiusUnits: {
    type: String as PropType<ColumnLayerProps['radiusUnits']>,
    default: 'meters',
  },

  /**
   * The units of the line width.
   * @default 'meters'
   */
  lineWidthUnits: {
    type: String as PropType<ColumnLayerProps['lineWidthUnits']>,
    default: 'meters',
  },
  /**
   * The line width multiplier that multiplied to all outlines.
   * @default 1
   */
  lineWidthScale: {
    type: Number as PropType<ColumnLayerProps['lineWidthScale']>,
    default: 1,
  },

  /**
   * The minimum outline width in pixels.
   * @default 0
   */
  lineWidthMinPixels: {
    type: Number as PropType<ColumnLayerProps['lineWidthMinPixels']>,
    default: 0,
  },

  /**
   * The maximum outline width in pixels.
   * @default Number.MAX_SAFE_INTEGER
   */
  lineWidthMaxPixels: {
    type: Number as PropType<ColumnLayerProps['lineWidthMaxPixels']>,
    default: Number.MAX_SAFE_INTEGER,
  },

  /**
   * Material settings for lighting effect. Applies if `extruded: true`.
   *
   * @default true
   * @see https://deck.gl/docs/developer-guide/using-lighting
   */
  material: {
    type: [Object, Boolean] as PropType<ColumnLayerProps['material']>,
    default: () => true,
  },

  /**
   * Method called to retrieve the position of each column.
   * @default object => object.position
   */
  getPosition: {
    type: Function as PropType<ColumnLayerProps['getPosition']>,
    default: (object: any) => object.position,
  },

  /**
   * Fill color value or accessor.
   * @default [0, 0, 0, 255]
   */
  getFillColor: {
    type: [Function, Array] as unknown as PropType<ColumnLayerProps['getFillColor']>,
    default: [0, 0, 0, 255],
  },

  /**
   * Line color value or accessor.
   *
   * @default [0, 0, 0, 255]
   */
  getLineColor: {
    type: [Function, Array] as unknown as PropType<ColumnLayerProps['getLineColor']>,
    default: [0, 0, 0, 255],
  },

  /**
   * The elevation of each cell in meters.
   * @default 1000
   */
  getElevation: {
    type: [Function, Number] as unknown as PropType<ColumnLayerProps['getElevation']>,
    default: 1000,
  },

  /**
   * The width of the outline of the column, in units specified by `lineWidthUnits`.
   *
   * @default 1
   */
  getLineWidth: {
    type: [Function, Number] as PropType<ColumnLayerProps['getLineWidth']>,
    default: 1,
  },
}
export const columnPropsKeys: (keyof ColumnLayerProps)[] = [
  ...baseLayerKeys,
  'diskResolution',
  'radius',
  'angle',
  'vertices',
  'offset',
  'coverage',
  'elevationScale',
  'filled',
  'stroked',
  'extruded',
  'wireframe',
  'flatShading',
  'radiusUnits',
  'lineWidthUnits',
  'lineWidthScale',
  'lineWidthMinPixels',
  'lineWidthMaxPixels',
  'material',
  'getPosition',
  'getFillColor',
  'getLineColor',
  'getElevation',
  'getLineWidth'
]
