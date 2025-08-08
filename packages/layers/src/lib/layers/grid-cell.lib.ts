import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type GridCellLayerProps } from '@deck.gl/layers'

export const gridCellLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  cellSize: {
    type: Number as PropType<GridCellLayerProps['cellSize']>,
    default: 20,
  },
  getPosition: {
    type: Function as PropType<GridCellLayerProps['getPosition']>,
    default: (x: any) => x?.position,
  },
  getFillColor: {
    type: [Function, Array] as unknown as PropType<GridCellLayerProps['getFillColor']>,
    default: () => [0, 0, 0, 255],
  },
  getElevation: {
    type: [Function, Number] as PropType<GridCellLayerProps['getElevation']>,
    default: 0,
  },
}

export const gridCellPropsKeys: (keyof GridCellLayerProps)[] = [
  ...baseLayerKeys,
  'cellSize',
  'getPosition',
  'getFillColor',
  'getElevation',
]
