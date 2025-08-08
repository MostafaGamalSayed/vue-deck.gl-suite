import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type MVTLayerProps } from '@deck.gl/geo-layers'

export const mvtLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  data: {
    // override to allow string URL templates
    type: [String, Object] as PropType<MVTLayerProps['data']>,
  },
  maxZoom: {
    type: Number as PropType<MVTLayerProps['maxZoom']>,
  },
  minZoom: {
    type: Number as PropType<MVTLayerProps['minZoom']>,
  },
  getLineColor: {
    type: [Function, Array] as unknown as PropType<MVTLayerProps['getLineColor']>,
    default: () => [0, 0, 0, 255],
  },
  getFillColor: {
    type: [Function, Array] as unknown as PropType<MVTLayerProps['getFillColor']>,
    default: () => [200, 200, 200, 255],
  },
  getPointRadius: {
    type: [Function, Number] as PropType<MVTLayerProps['getPointRadius']>,
    default: 2,
  },
  lineWidthMinPixels: {
    type: Number as PropType<MVTLayerProps['lineWidthMinPixels']>,
    default: 1,
  },
}

export const mvtPropsKeys: (keyof MVTLayerProps)[] = [
  ...baseLayerKeys,
  'data',
  'maxZoom',
  'minZoom',
  'getLineColor',
  'getFillColor',
  'getPointRadius',
  'lineWidthMinPixels',
]
