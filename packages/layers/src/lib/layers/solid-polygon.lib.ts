import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type SolidPolygonLayerProps } from '@deck.gl/layers'

export const solidPolygonLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  filled: {
    type: Boolean as PropType<SolidPolygonLayerProps['filled']>,
    default: true,
  },
  extruded: {
    type: Boolean as PropType<SolidPolygonLayerProps['extruded']>,
    default: false,
  },
  wireframe: {
    type: Boolean as PropType<SolidPolygonLayerProps['wireframe']>,
    default: false,
  },
  elevationScale: {
    type: Number as PropType<SolidPolygonLayerProps['elevationScale']>,
    default: 1,
  },
  material: {
    type: Object as PropType<SolidPolygonLayerProps['material']>,
  },
  getPolygon: {
    type: Function as PropType<SolidPolygonLayerProps['getPolygon']>,
    default: (x: any) => x?.polygon || x?.contour || x?.coordinates,
  },
  getElevation: {
    type: [Function, Number] as PropType<SolidPolygonLayerProps['getElevation']>,
    default: 1000,
  },
  getFillColor: {
    type: [Function, Array] as unknown as PropType<SolidPolygonLayerProps['getFillColor']>,
    default: () => [0, 0, 0, 255],
  },
  getLineColor: {
    type: [Function, Array] as unknown as PropType<SolidPolygonLayerProps['getLineColor']>,
    default: () => [255, 255, 255, 255],
  },
}

export const solidPolygonPropsKeys: (keyof SolidPolygonLayerProps)[] = [
  ...baseLayerKeys,
  'filled',
  'extruded',
  'wireframe',
  'elevationScale',
  'material',
  'getPolygon',
  'getElevation',
  'getFillColor',
  'getLineColor',
]
