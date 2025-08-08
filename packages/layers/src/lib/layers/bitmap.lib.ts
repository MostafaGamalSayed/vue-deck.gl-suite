import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type BitmapLayerProps } from '@deck.gl/layers'

export const bitmapLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  image: {
    type: [String, Object] as PropType<BitmapLayerProps['image']>,
    required: true,
  },
  bounds: {
    type: Array as unknown as PropType<BitmapLayerProps['bounds']>,
    required: true,
  },
  desaturate: {
    type: Number as PropType<BitmapLayerProps['desaturate']>,
    default: 0,
  },
  transparentColor: {
    type: Array as unknown as PropType<BitmapLayerProps['transparentColor']>,
    default: () => [0, 0, 0, 0],
  },
  tintColor: {
    type: Array as unknown as PropType<BitmapLayerProps['tintColor']>,
    default: () => [255, 255, 255],
  },
}

export const bitmapPropsKeys: (keyof BitmapLayerProps)[] = [
  ...baseLayerKeys,
  'image',
  'bounds',
  'desaturate',
  'transparentColor',
  'tintColor',
]
