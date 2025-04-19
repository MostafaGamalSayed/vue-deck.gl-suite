import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type ScatterplotLayerProps } from '@deck.gl/layers'

export const scatterplotLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  radiusUnits: {
    type: String as PropType<ScatterplotLayerProps['radiusUnits']>,
    default: 'meters',
  },
  radiusScale: {
    type: Number as PropType<ScatterplotLayerProps['radiusScale']>,
    default: 1,
  },
  radiusMinPixels: {
    type: Number as PropType<ScatterplotLayerProps['radiusMinPixels']>,
    default: 0,
  },
  radiusMaxPixels: {
    type: Number as PropType<ScatterplotLayerProps['radiusMaxPixels']>,
    default: Number.MAX_SAFE_INTEGER,
  },
  lineWidthUnits: {
    type: String as PropType<ScatterplotLayerProps['lineWidthUnits']>,
    default: 'meters',
  },
  lineWidthScale: {
    type: Number as PropType<ScatterplotLayerProps['lineWidthScale']>,
    default: 1,
  },
  lineWidthMinPixels: {
    type: Number as PropType<ScatterplotLayerProps['lineWidthMinPixels']>,
    default: 0,
  },
  lineWidthMaxPixels: {
    type: Number as PropType<ScatterplotLayerProps['lineWidthMaxPixels']>,
    default: Number.MAX_SAFE_INTEGER,
  },
  stroked: {
    type: Boolean as PropType<ScatterplotLayerProps['stroked']>,
    default: false,
  },
  filled: {
    type: Boolean as PropType<ScatterplotLayerProps['filled']>,
    default: true,
  },
  billboard: {
    type: Boolean as PropType<ScatterplotLayerProps['billboard']>,
    default: false,
  },
  antialiasing: {
    type: Boolean as PropType<ScatterplotLayerProps['antialiasing']>,
    default: true,
  },
  getPosition: {
    type: Function as unknown as PropType<ScatterplotLayerProps['getPosition']>,
    default: (object: any) => object?.position,
  },
  getRadius: {
    type: [Function, Number] as unknown as PropType<ScatterplotLayerProps['getRadius']>,
    default: 1,
  },
  getFillColor: {
    type: [Function, Array] as unknown as PropType<ScatterplotLayerProps['getFillColor']>,
    default: [0, 0, 0, 255],
  },
  getLineColor: {
    type: [Function, Array] as unknown as PropType<ScatterplotLayerProps['getLineColor']>,
    default: [0, 0, 0, 255],
  },
  getLineWidth: {
    type: [Function, Number] as unknown as PropType<ScatterplotLayerProps['getLineWidth']>,
    default: 1,
  },
}

export const scatterplotPropsKeys: (keyof ScatterplotLayerProps)[] = [
  ...baseLayerKeys,
  'radiusUnits',
  'radiusScale',
  'radiusMinPixels',
  'radiusMaxPixels',
  'lineWidthUnits',
  'lineWidthScale',
  'lineWidthMinPixels',
  'lineWidthMaxPixels',
  'stroked',
  'filled',
  'billboard',
  'antialiasing',
  'getPosition',
  'getRadius',
  'getFillColor',
  'getLineColor',
  'getLineWidth',
]
