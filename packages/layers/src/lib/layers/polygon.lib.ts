import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type PolygonLayerProps } from '@deck.gl/layers'

export const polygonLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  stroked: {
    type: Boolean as PropType<PolygonLayerProps['stroked']>,
    default: true,
  },
  filled: {
    type: Boolean as PropType<PolygonLayerProps['filled']>,
    default: true,
  },
  extruded: {
    type: Boolean as PropType<PolygonLayerProps['extruded']>,
    default: false,
  },
  elevationScale: {
    type: Number as PropType<PolygonLayerProps['elevationScale']>,
    default: 1,
  },
  wireframe: {
    type: Boolean as PropType<PolygonLayerProps['wireframe']>,
    default: false,
  },
  lineWidthUnits: {
    type: String as PropType<PolygonLayerProps['lineWidthUnits']>,
    default: 'meters',
  },
  lineWidthScale: {
    type: Number as PropType<PolygonLayerProps['lineWidthScale']>,
    default: 1,
  },
  lineWidthMinPixels: {
    type: Number as PropType<PolygonLayerProps['lineWidthMinPixels']>,
    default: 0,
  },
  lineWidthMaxPixels: {
    type: Number as PropType<PolygonLayerProps['lineWidthMaxPixels']>,
    default: Number.MAX_SAFE_INTEGER,
  },
  lineJointRounded: {
    type: Boolean as PropType<PolygonLayerProps['lineJointRounded']>,
    default: false,
  },
  lineMiterLimit: {
    type: Number as PropType<PolygonLayerProps['lineMiterLimit']>,
    default: 4,
  },
  lineDashJustified: {
    type: Boolean as PropType<PolygonLayerProps['lineDashJustified']>,
    default: undefined, // Not directly defined
  },
  getPolygon: {
    type: Function as unknown as PropType<PolygonLayerProps['getPolygon']>,
    default: (f: any) => f.polygon,
  },
  getFillColor: {
    type: [Function, Array] as unknown as PropType<PolygonLayerProps['getFillColor']>,
    default: [0, 0, 0, 255],
  },
  getLineColor: {
    type: [Function, Array] as unknown as PropType<PolygonLayerProps['getLineColor']>,
    default: [0, 0, 0, 255],
  },
  getLineWidth: {
    type: [Function, Number] as unknown as PropType<PolygonLayerProps['getLineWidth']>,
    default: 1,
  },
  getElevation: {
    type: [Function, Number] as unknown as PropType<PolygonLayerProps['getElevation']>,
    default: 1000,
  },
  material: {
    type: [Object, Boolean] as PropType<PolygonLayerProps['material']>,
    default: true,
  },
  _normalize: {
    type: Boolean as PropType<PolygonLayerProps['_normalize']>,
    default: true,
  },
  _windingOrder: {
    type: String as PropType<PolygonLayerProps['_windingOrder']>,
    default: 'CW',
  },
}

export const polygonPropsKeys: (keyof PolygonLayerProps)[] = [
  ...baseLayerKeys,
  'stroked',
  'filled',
  'extruded',
  'elevationScale',
  'wireframe',
  'lineWidthUnits',
  'lineWidthScale',
  'lineWidthMinPixels',
  'lineWidthMaxPixels',
  'lineJointRounded',
  'lineMiterLimit',
  'lineDashJustified',
  'getPolygon',
  'getFillColor',
  'getLineColor',
  'getLineWidth',
  'getElevation',
  'material',
  '_normalize',
  '_windingOrder',
]
