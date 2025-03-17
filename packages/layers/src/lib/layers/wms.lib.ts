import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type WMSLayerProps } from '@deck.gl/geo-layers'

/** Props for customizing the behavior and appearance of the WMS Layer */
export const wmsLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  data: {
    type: [String, Object] as PropType<WMSLayerProps['data']>,
    required: true,
  },
  serviceType: {
    type: String as PropType<WMSLayerProps['serviceType']>,
    default: 'auto',
  },
  layers: {
    type: Array as PropType<WMSLayerProps['layers']>,
    default: () => [],
  },
  srs: {
    type: String as PropType<WMSLayerProps['srs']>,
    default: 'auto',
  },
  onMetadataLoad: {
    type: Function as PropType<WMSLayerProps['onMetadataLoad']>,
    default: () => {},
  },
  onMetadataLoadError: {
    type: Function as PropType<WMSLayerProps['onMetadataLoadError']>,
    default: (error: Error) => console.error(error),
  },
  onImageLoadStart: {
    type: Function as PropType<WMSLayerProps['onImageLoadStart']>,
    default: () => {},
  },
  onImageLoad: {
    type: Function as PropType<WMSLayerProps['onImageLoad']>,
    default: () => {},
  },
  onImageLoadError: {
    type: Function as PropType<WMSLayerProps['onImageLoadError']>,
    default: (requestId: unknown, error: Error) =>
      console.error('Error loading image:', error, 'Request ID:', requestId),
  },
}

/** Keys for WMS Layer Props to simplify destructuring or usage */
export const wmsPropsKeys: (keyof WMSLayerProps)[] = [
  ...baseLayerKeys,
  'data',
  'serviceType',
  'layers',
  'srs',
  'onMetadataLoad',
  'onMetadataLoadError',
  'onImageLoadStart',
  'onImageLoad',
  'onImageLoadError',
]
