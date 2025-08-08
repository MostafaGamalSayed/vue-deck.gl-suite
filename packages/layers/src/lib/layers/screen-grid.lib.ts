import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type ScreenGridLayerProps } from '@deck.gl/aggregation-layers'

export const screenGridLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  cellSizePixels: {
    type: Number as PropType<ScreenGridLayerProps['cellSizePixels']>,
    default: 20,
  },
  colorRange: {
    type: Array as unknown as PropType<ScreenGridLayerProps['colorRange']>,
  },
  colorDomain: {
    type: Array as unknown as PropType<ScreenGridLayerProps['colorDomain']>,
  },
  getPosition: {
    type: Function as unknown as PropType<ScreenGridLayerProps['getPosition']>,
    default: (x: any) => x?.position,
  },
  getWeight: {
    type: [Function, Number] as PropType<ScreenGridLayerProps['getWeight']>,
    default: 1,
  },
}

export const screenGridPropsKeys: (keyof ScreenGridLayerProps)[] = [
  ...baseLayerKeys,
  'cellSizePixels',
  'colorRange',
  'colorDomain',
  'getPosition',
  'getWeight',
]
