import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type HexagonLayerProps } from '@deck.gl/aggregation-layers'

export const hexagonLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  gpuAggregation: {
    type: Boolean as PropType<HexagonLayerProps['gpuAggregation']>,
    default: false,
  },
  colorAggregation: {
    type: String as PropType<HexagonLayerProps['colorAggregation']>,
    default: 'SUM',
  },
  elevationAggregation: {
    type: String as PropType<HexagonLayerProps['elevationAggregation']>,
    default: 'SUM',
  },
  hexagonAggregator: {
    type: Function as unknown as PropType<HexagonLayerProps['hexagonAggregator']>,
    default: null,
  },
  radius: {
    type: Number as PropType<HexagonLayerProps['radius']>,
    default: 1000,
  },
  elevationScale: {
    type: Number as PropType<HexagonLayerProps['elevationScale']>,
    default: 1,
  },
  coverage: {
    type: Number as PropType<HexagonLayerProps['coverage']>,
    default: 1,
  },
  lowerPercentile: {
    type: Number as PropType<HexagonLayerProps['lowerPercentile']>,
    default: 0,
  },
  upperPercentile: {
    type: Number as PropType<HexagonLayerProps['upperPercentile']>,
    default: 100,
  },
  getPosition: {
    type: Function as unknown as PropType<HexagonLayerProps['getPosition']>,
    default: (x: any) => x?.position,
  },
  getColorWeight: {
    type: [Function, Number] as PropType<HexagonLayerProps['getColorWeight']>,
    default: 1,
  },
  getColorValue: {
    type: Function as unknown as PropType<HexagonLayerProps['getColorValue']>,
    default: null,
  },
  colorScaleType: {
    type: String as PropType<HexagonLayerProps['colorScaleType']>,
    default: 'quantile',
  },
  colorDomain: {
    type: Array as unknown as PropType<HexagonLayerProps['colorDomain']>,
    default: null,
  },
  colorRange: {
    type: Array as unknown as PropType<HexagonLayerProps['colorRange']>
  },
  elevationScaleType: {
    type: String as PropType<HexagonLayerProps['elevationScaleType']>,
    default: 'linear',
  },
  elevationDomain: {
    type: Array as unknown as PropType<HexagonLayerProps['elevationDomain']>,
    default: null,
  },
  elevationRange: {
    type: Array as unknown as PropType<HexagonLayerProps['elevationRange']>,
    default: [0, 1000],
  },
  elevationUpperPercentile: {
    type: Number as PropType<HexagonLayerProps['elevationUpperPercentile']>,
    default: 100,
  },
  elevationLowerPercentile: {
    type: Number as PropType<HexagonLayerProps['elevationLowerPercentile']>,
    default: 0,
  },
  material: {
    type: [Object, Boolean] as PropType<HexagonLayerProps['material']>,
    default: true
  },

}

export const hexagonPropsKeys: (keyof HexagonLayerProps)[] = [
  ...baseLayerKeys,
  'gpuAggregation',
  'colorAggregation',
  'elevationAggregation',
  'hexagonAggregator',
  'radius',
  'elevationScale',
  'coverage',
  'lowerPercentile',
  'upperPercentile',
  'getPosition',
  'getColorWeight',
  'getColorValue',
  'colorScaleType',
  'colorDomain',
  'colorRange',
  'elevationScaleType',
  'elevationDomain',
  'elevationRange',
  'elevationUpperPercentile',
  'elevationLowerPercentile',
  'material',
]
