import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import type { Tile3DLayerProps } from '@deck.gl/geo-layers'
import { Tiles3DLoader } from '@loaders.gl/3d-tiles'

// Define Vue-style props for Tile3DLayer
export const tile3DLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  data: {
    type: String as PropType<Tile3DLayerProps['data']>,
    default: undefined,
  },
  loadOptions: {
    type: Object as PropType<Tile3DLayerProps['loadOptions']>,
    default: undefined,
  },
  getPointColor: {
    type: [Function, Array] as unknown as PropType<Tile3DLayerProps['getPointColor']>,
    default: () => [0, 0, 0, 255],
  },
  pointSize: {
    type: Number as PropType<Tile3DLayerProps['pointSize']>,
    default: 1.0,
  },

  loader: {
    type: Object as PropType<typeof Tiles3DLoader>,
    default: Tiles3DLoader,
  },
  onTilesetLoad: {
    type: Function as PropType<Tile3DLayerProps['onTilesetLoad']>,
    default: undefined,
  },
  onTileLoad: {
    type: Function as PropType<Tile3DLayerProps['onTileLoad']>,
    default: undefined,
  },
  onTileUnload: {
    type: Function as PropType<Tile3DLayerProps['onTileUnload']>,
    default: undefined,
  },
  onTileError: {
    type: Function as PropType<Tile3DLayerProps['onTileError']>,
    default: undefined,
  },
  _getMeshColor: {
    type: Function as PropType<Tile3DLayerProps['_getMeshColor']>,
    default: () => [255, 255, 255],
  },
}

// Define the keys for Tile3DLayer props to simplify further use
export const tile3DPropsKeys: (keyof Tile3DLayerProps)[] = [
  ...baseLayerKeys,
  'data',
  'getPointColor',
  'pointSize',
  'loader',
  'loadOptions',
  'onTilesetLoad',
  'onTileLoad',
  'onTileUnload',
  'onTileError',
  '_getMeshColor',
]
