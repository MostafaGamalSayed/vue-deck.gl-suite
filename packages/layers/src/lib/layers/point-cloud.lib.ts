import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import type { PointCloudLayerProps } from '@deck.gl/layers'

export const pointCloudProps: ComponentPropsOptions = {
  ...baseLayerProps,
  /**
   * The units of the point size, one of `'meters'`, `'common'`, and `'pixels'`.
   * @default 'pixels'
   */
  sizeUnits: {
    type: String as PropType<PointCloudLayerProps['sizeUnits']>,
    default: 'pixels',
  },
  /**
   * Global radius of all points, in units specified by `sizeUnits`
   * @default 10
   */
  pointSize: {
    type: Number as PropType<PointCloudLayerProps['pointSize']>,
    default: 10,
  },

  /**
   * Material settings for lighting effect.
   *
   * @default true
   * @see https://deck.gl/docs/developer-guide/using-lighting
   */
  material: {
    type: [Boolean, Object] as PropType<PointCloudLayerProps['material']>,
    default: true,
  },
  /**
   * Method called to retrieve the position of each object.
   * @default object => object?.position
   */
  getPosition: {
    type: Function as PropType<PointCloudLayerProps['getPosition']>,
    default: (object: { position: any }) => object?.position,
  },
  /**
   * The normal of each object, in `[nx, ny, nz]`.
   * @default [0, 0, 1]
   */
  getNormal: {
    type: [Function, Array] as unknown as PropType<PointCloudLayerProps['getNormal']>,
    default: [0, 0, 1],
  },
  /**
   * The rgba color is in the format of `[r, g, b, [a]]`
   * @default [0, 0, 0, 255]
   */
  getColor: {
    type: [Function, Array] as unknown as PropType<PointCloudLayerProps['getColor']>,
    default: [0, 0, 0, 255],
  },
}

export const pointCloudPropsKeys: (keyof PointCloudLayerProps)[] = [
  ...baseLayerKeys,
  'sizeUnits',
  'pointSize',
  'material',
  'getPosition',
  'getNormal',
  'getColor',
]
