import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type LineLayerProps } from '@deck.gl/layers'

export const lineLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  widthUnits: {
    type: String as PropType<LineLayerProps['widthUnits']>,
    default: 'meters',
  },
  widthScale: {
    type: Number as PropType<LineLayerProps['widthScale']>,
    default: 1,
  },
  widthMinPixels: {
    type: Number as PropType<LineLayerProps['widthMinPixels']>,
    default: 0,
  },
  widthMaxPixels: {
    type: Number as PropType<LineLayerProps['widthMaxPixels']>,
    default: Number.MAX_SAFE_INTEGER,
  },
  getSourcePosition: {
    type: Function as unknown as PropType<LineLayerProps['getSourcePosition']>,
    default: (x: any) => x?.sourcePosition,
  },
  getTargetPosition: {
    type: Function as unknown as PropType<LineLayerProps['getTargetPosition']>,
    default: (x: any) => x?.targetPosition,
  },
  getColor: {
    type: [Function, Array] as unknown as PropType<LineLayerProps['getColor']>,
    default: () => [0, 0, 0, 255],
  },
  getWidth: {
    type: [Function, Number] as PropType<LineLayerProps['getWidth']>,
    default: 1,
  },
}

export const linePropsKeys: (keyof LineLayerProps)[] = [
  ...baseLayerKeys,
  'widthUnits',
  'widthScale',
  'widthMinPixels',
  'widthMaxPixels',
  'getSourcePosition',
  'getTargetPosition',
  'getColor',
  'getWidth',
]
