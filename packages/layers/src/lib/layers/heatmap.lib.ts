import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type HeatmapLayerProps } from '@deck.gl/aggregation-layers'

export const heatmapLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  intensity: {
    type: Number as PropType<HeatmapLayerProps['intensity']>,
    default: 1,
  },
  radiusPixels: {
    type: Number as PropType<HeatmapLayerProps['radiusPixels']>,
    default: 30,
  },
  colorRange: {
    type: Array as unknown as PropType<HeatmapLayerProps['colorRange']>
  },
  threshold: {
    type: Number as PropType<HeatmapLayerProps['threshold']>,
    default: 0.05,
  },
  colorDomain: {
    type: Array as unknown as PropType<HeatmapLayerProps['colorDomain']>,
    default: null,
  },
  aggregation: {
    type: String as PropType<HeatmapLayerProps['aggregation']>,
    default: 'SUM',
  },
  weightsTextureSize: {
    type: Number as PropType<HeatmapLayerProps['weightsTextureSize']>,
    default: 2048,
  },
  debounceTimeout: {
    type: Number as PropType<HeatmapLayerProps['debounceTimeout']>,
    default: 500,
  },
  getPosition: {
    type: Function as PropType<HeatmapLayerProps['getPosition']>,
    default: (x: any) => x?.position,
  },
  getWeight: {
    type: [Function, Number] as PropType<HeatmapLayerProps['getWeight']>,
    default: 1,
  },
}

export const heatmapPropsKeys: (keyof HeatmapLayerProps)[] = [
  ...baseLayerKeys,
  'intensity',
  'radiusPixels',
  'colorRange',
  'threshold',
  'colorDomain',
  'aggregation',
  'weightsTextureSize',
  'debounceTimeout',
  'getPosition',
  'getWeight',
]
