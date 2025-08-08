import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type TextLayerProps } from '@deck.gl/layers'

export const textLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  sizeUnits: {
    type: String as PropType<TextLayerProps['sizeUnits']>,
    default: 'meters',
  },
  sizeScale: {
    type: Number as PropType<TextLayerProps['sizeScale']>,
    default: 1,
  },
  sizeMinPixels: {
    type: Number as PropType<TextLayerProps['sizeMinPixels']>,
    default: 0,
  },
  billboard: {
    type: Boolean as PropType<TextLayerProps['billboard']>,
    default: true,
  },
  fontFamily: {
    type: String as PropType<TextLayerProps['fontFamily']>,
    default: 'Monaco, monospace',
  },
  maxWidth: {
    type: Number as PropType<TextLayerProps['maxWidth']>,
    default: -1,
  },
  lineHeight: {
    type: Number as PropType<TextLayerProps['lineHeight']>,
    default: 1.0,
  },
  getText: {
    type: [Function, String] as PropType<TextLayerProps['getText']>,
    default: (x: any) => x?.text,
  },
  getPosition: {
    type: Function as unknown as PropType<TextLayerProps['getPosition']>,
    default: (x: any) => x?.position,
  },
  getColor: {
    type: [Function, Array] as unknown as PropType<TextLayerProps['getColor']>,
    default: () => [255, 255, 255, 255],
  },
  getSize: {
    type: [Function, Number] as PropType<TextLayerProps['getSize']>,
    default: 32,
  },
  getAngle: {
    type: [Function, Number] as PropType<TextLayerProps['getAngle']>,
    default: 0,
  },
  getTextAnchor: {
    type: [Function, String] as PropType<TextLayerProps['getTextAnchor']>,
    default: 'middle',
  },
  getAlignmentBaseline: {
    type: [Function, String] as PropType<TextLayerProps['getAlignmentBaseline']>,
    default: 'center',
  },
  getPixelOffset: {
    type: [Function, Array] as unknown as PropType<TextLayerProps['getPixelOffset']>,
    default: () => [0, 0],
  },
}

export const textPropsKeys: (keyof TextLayerProps)[] = [
  ...baseLayerKeys,
  'sizeUnits',
  'sizeScale',
  'sizeMinPixels',
  'billboard',
  'fontFamily',
  'maxWidth',
  'lineHeight',
  'getText',
  'getPosition',
  'getColor',
  'getSize',
  'getAngle',
  'getTextAnchor',
  'getAlignmentBaseline',
  'getPixelOffset',
]
