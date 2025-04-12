import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type GridLayerProps } from '@deck.gl/aggregation-layers'

export const gridLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  gpuAggregation: {
    type: Boolean as PropType<GridLayerProps['gpuAggregation']>,
    default: false,
  },
  colorAggregation: {
    type: String as PropType<GridLayerProps['colorAggregation']>,
    default: 'SUM',
  },
  elevationAggregation: {
    type: String as PropType<GridLayerProps['elevationAggregation']>,
    default: 'SUM',
  },
  gridAggregator: {
    type: Function as unknown as PropType<GridLayerProps['gridAggregator']>,
    default: null,
  },
  colorScaleType: {
    type: String as PropType<GridLayerProps['colorScaleType']>,
    default: 'quantile',
  },
  cellSize: {
    type: Number as PropType<GridLayerProps['cellSize']>,
    default: 1000,
  },
  colorDomain: {
    type: Array as unknown as PropType<GridLayerProps['colorDomain']>,
    default: null,
  },
  colorRange: {
    type: Array as PropType<GridLayerProps['colorRange']>,
  },
  coverage: {
    type: Number as PropType<GridLayerProps['coverage']>,
    default: 1,
  },
  elevationDomain: {
    type: Array as unknown as PropType<GridLayerProps['elevationDomain']>,
  },
  elevationScale: {
    type: Number as PropType<GridLayerProps['elevationScale']>,
    default: 1,
  },
  elevationScaleType: {
    type: String as PropType<GridLayerProps['elevationScaleType']>,
    default: 'linear',
  },
  elevationRange: {
    type: Array as unknown as PropType<GridLayerProps['elevationRange']>,
    default: [0, 1000],
  },
  extruded: {
    type: Boolean as PropType<GridLayerProps['extruded']>,
    default: true,
  },
  upperPercentile: {
    type: Number as PropType<GridLayerProps['upperPercentile']>,
    default: 100,
  },
  lowerPercentile: {
    type: Number as PropType<GridLayerProps['lowerPercentile']>,
    default: 0,
  },
  elevationUpperPercentile: {
    type: Number as PropType<GridLayerProps['elevationUpperPercentile']>,
    default: 100,
  },
  elevationLowerPercentile: {
    type: Number as PropType<GridLayerProps['elevationLowerPercentile']>,
    default: 0,
  },
  getPosition: {
    type: Function as unknown as PropType<GridLayerProps['getPosition']>,
    default: (x: any) => x?.position,
  },
  getColorWeight: {
    type: [Function, Number] as PropType<GridLayerProps['getColorWeight']>,
    default: 1,
  },
  getColorValue: {
    type: Function as unknown as PropType<GridLayerProps['getColorValue']>,
    default: null,
  },
  getElevationWeight: {
    type: [Function, Number] as PropType<GridLayerProps['getElevationWeight']>,
    default: 1,
  },
  getElevationValue: {
    type: Function as unknown as PropType<GridLayerProps['getElevationValue']>,
    default: null,
  },
  material: {
    type: Boolean as PropType<GridLayerProps['material']>,
    default: true,
  },
  onSetColorDomain: Function as unknown as PropType<GridLayerProps['onSetColorDomain']>,
  onSetElevationDomain: Function as unknown as PropType<GridLayerProps['onSetElevationDomain']>,
}

export const gridPropsKeys: (keyof GridLayerProps)[] = [
  ...baseLayerKeys,
  'gpuAggregation',
  'colorAggregation',
  'elevationAggregation',
  'gridAggregator',
  'colorScaleType',
  'cellSize',
  'colorDomain',
  'colorRange',
  'coverage',
  'elevationDomain',
  'elevationScale',
  'elevationScaleType',
  'elevationRange',
  'extruded',
  'upperPercentile',
  'lowerPercentile',
  'elevationUpperPercentile',
  'elevationLowerPercentile',
  'getPosition',
  'getColorWeight',
  'getColorValue',
  'getElevationWeight',
  'getElevationValue',
  'material',
  'onSetColorDomain',
  'onSetElevationDomain',
]
