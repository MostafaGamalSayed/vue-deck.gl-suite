import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type ContourLayerProps } from '@deck.gl/aggregation-layers'

export const contourLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  cellSize: {
    type: Number as PropType<ContourLayerProps['cellSize']>,
    default: 1000,
  },
  gpuAggregation: {
    type: Boolean as PropType<ContourLayerProps['gpuAggregation']>,
    default: true,
  },
  aggregation: {
    type: String as PropType<ContourLayerProps['aggregation']>,
    default: 'SUM',
  },
  contours: {
    type: Array as PropType<ContourLayerProps['contours']>,
    default: () => [{ threshold: 1 }],
  },
  getPosition: {
    type: Function as unknown as PropType<ContourLayerProps['getPosition']>,
    default: (object: any) => object?.position,
  },
  getWeight: {
    type: Function as unknown as PropType<ContourLayerProps['getWeight']>,
    default: () => 1,
  },
  zOffset: {
    type: Number as PropType<ContourLayerProps['zOffset']>,
    default: 0.005,
  },
}

export const contourPropsKeys: (keyof ContourLayerProps)[] = [
  ...baseLayerKeys,
  'cellSize',
  'gpuAggregation',
  'aggregation',
  'contours',
  'getPosition',
  'getWeight',
  'zOffset',
]
