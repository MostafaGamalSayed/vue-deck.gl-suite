import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type TerrainLayerProps } from '@deck.gl/geo-layers'

export const terrainLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  elevationDecoder: {
    type: Object as PropType<TerrainLayerProps['elevationDecoder']>,
    required: true,
  },
  elevationData: {
    type: String as PropType<TerrainLayerProps['elevationData']>,
    required: true,
  },
  texture: {
    type: String as PropType<TerrainLayerProps['texture']>,
  },
  bounds: {
    type: Array as unknown as PropType<TerrainLayerProps['bounds']>,
  },
  meshMaxError: {
    type: Number as PropType<TerrainLayerProps['meshMaxError']>,
  },
}

export const terrainPropsKeys: (keyof TerrainLayerProps)[] = [
  ...baseLayerKeys,
  'elevationDecoder',
  'elevationData',
  'texture',
  'bounds',
  'meshMaxError',
]
