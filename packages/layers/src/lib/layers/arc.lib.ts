import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type ArcLayerProps } from '@deck.gl/layers'

export const arcLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  greatCircle: {
    type: Boolean as PropType<ArcLayerProps['greatCircle']>,
    default: false,
  },
  numSegments: {
    type: Number as PropType<ArcLayerProps['numSegments']>,
    default: 50,
  },
  widthUnits: {
    type: String as PropType<ArcLayerProps['widthUnits']>,
    default: 'pixels',
  },
  widthScale: {
    type: Number as PropType<ArcLayerProps['widthScale']>,
    default: 1,
  },
  widthMinPixels: {
    type: Number as PropType<ArcLayerProps['widthMinPixels']>,
    default: 0,
  },
  widthMaxPixels: {
    type: Number as PropType<ArcLayerProps['widthMaxPixels']>,
    default: Number.MAX_SAFE_INTEGER,
  },
  getSourcePosition: {
    type: Function as unknown as PropType<ArcLayerProps['getSourcePosition']>,
    default: (x: any) => x?.sourcePosition,
  },
  getTargetPosition: {
    type: Function as unknown as PropType<ArcLayerProps['getTargetPosition']>,
    default: (x: any) => x?.targetPosition,
  },
  getSourceColor: {
    type: Function as unknown as PropType<ArcLayerProps['getSourceColor']>,
    default: () => [0, 0, 0, 255],
  },
  getTargetColor: {
    type: Function as unknown as PropType<ArcLayerProps['getTargetColor']>,
    default: () => [0, 0, 0, 255],
  },
  getWidth: {
    type: Number as PropType<ArcLayerProps['getWidth']>,
    default: 1,
  },
  getHeight: {
    type: Number as PropType<ArcLayerProps['getHeight']>,
    default: 1,
  },
  getTilt: {
    type: Number as PropType<ArcLayerProps['getTilt']>,
    default: 0,
  },
}
export const arcPropsKeys: (keyof ArcLayerProps)[] = [
  ...baseLayerKeys,
  'greatCircle',
  'numSegments',
  'widthUnits',
  'widthScale',
  'widthMinPixels',
  'widthMaxPixels',
  'getSourcePosition',
  'getTargetPosition',
  'getSourceColor',
  'getTargetColor',
  'getWidth',
  'getHeight',
  'getTilt',
]
