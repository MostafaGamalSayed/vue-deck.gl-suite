import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type IconLayerProps } from '@deck.gl/layers'

export const iconLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  sizeScale: {
    type: Number as PropType<IconLayerProps['sizeScale']>,
    default: 1,
  },
  sizeUnits: {
    type: String as PropType<IconLayerProps['sizeUnits']>,
    default: 'meters',
  },
  sizeMinPixels: {
    type: Number as PropType<IconLayerProps['sizeMinPixels']>,
    default: 0,
  },
  sizeMaxPixels: {
    type: Number as PropType<IconLayerProps['sizeMaxPixels']>,
    default: Number.MAX_SAFE_INTEGER,
  },
  iconAtlas: {
    type: String as PropType<IconLayerProps['iconAtlas']>
  },
  iconMapping: {
    type: [Object, String] as PropType<IconLayerProps['iconMapping']>,
  },
  billboard: {
    type: Boolean as PropType<IconLayerProps['billboard']>,
    default: true,
  },
  alphaCutoff: {
    type: Number as PropType<IconLayerProps['alphaCutoff']>,
    default: 0.5,
  },
  loadOptions: {
    type: Object as PropType<IconLayerProps['loadOptions']>
  },
  textureParameters: {
    type: Object as PropType<IconLayerProps['textureParameters']>
  },
  getAngle: {
    type: [Function, Number] as PropType<IconLayerProps['getAngle']>,
    default: 0,
  },
  getPosition: {
    type: Function as unknown as PropType<IconLayerProps['getPosition']>,
    default: (x: any) => x?.position,
  },
  getSize: {
    type: [Function, Number] as PropType<IconLayerProps['getSize']>,
    default: 1,
  },
  getColor: {
    type: [Function, Array] as unknown as PropType<IconLayerProps['getColor']>,
    default: [255, 255, 255, 255],
  },
  getIcon: {
    type: Function as unknown as PropType<IconLayerProps['getIcon']>,
    default: (x: any) => x?.icon,
  },
  onIconError: {
    type: Function as unknown as PropType<IconLayerProps['onIconError']>
  }
}

export const iconPropsKeys: (keyof IconLayerProps)[] = [
  ...baseLayerKeys,
  'sizeScale',
  'sizeUnits',
  'sizeMinPixels',
  'sizeMaxPixels',
  'iconAtlas',
  'iconMapping',
  'billboard',
  'alphaCutoff',
  'loadOptions',
  'textureParameters',
  'getAngle',
  'getPosition',
  'getSize',
  'getColor',
  'getIcon',
  'onIconError'
]
