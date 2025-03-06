import type { ComponentPropsOptions, PropType } from 'vue'
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts'
import { type GeoJsonLayerProps } from '@deck.gl/layers'

export const geoJsonLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  pointType: {
    type: String as PropType<GeoJsonLayerProps['pointType']>,
    default: 'circle',
  },
  filled: {
    type: Boolean as PropType<GeoJsonLayerProps['filled']>,
    default: true,
  },
  stroked: {
    type: Boolean as PropType<GeoJsonLayerProps['stroked']>,
    default: true,
  },
  extruded: {
    type: Boolean as PropType<GeoJsonLayerProps['extruded']>,
    default: false,
  },
  wireframe: {
    type: Boolean as PropType<GeoJsonLayerProps['wireframe']>,
    default: false,
  },
  elevationScale: {
    type: Number as unknown as PropType<GeoJsonLayerProps['elevationScale']>,
    default: 1,
  },
  lineWidthUnits: {
    type: String as PropType<GeoJsonLayerProps['lineWidthUnits']>,
    default: 'meters',
  },
  lineWidthScale: {
    type: Number as PropType<GeoJsonLayerProps['lineWidthScale']>,
    default: 1,
  },
  lineWidthMinPixels: {
    type: Number as PropType<GeoJsonLayerProps['lineWidthMinPixels']>,
    default: 0,
  },
  lineWidthMaxPixels: {
    type: Number as PropType<GeoJsonLayerProps['lineWidthMaxPixels']>,
    default: Number.MAX_SAFE_INTEGER,
  },
  lineJointRounded: {
    type: Boolean as PropType<GeoJsonLayerProps['lineJointRounded']>,
    default: false,
  },
  lineMiterLimit: {
    type: Number as PropType<GeoJsonLayerProps['lineMiterLimit']>,
    default: 4,
  },
  lineCapRounded: {
    type: Boolean as PropType<GeoJsonLayerProps['lineCapRounded']>,
    default: false,
  },
  lineBillboard: {
    type: Boolean as PropType<GeoJsonLayerProps['lineBillboard']>,
    default: false,
  },
  getFillColor: {
    type: [Function, Array] as unknown as PropType<GeoJsonLayerProps['getFillColor']>,
    default: () => [0, 0, 0, 255],
  },
  getLineColor: {
    type: [Function, Array] as unknown as PropType<GeoJsonLayerProps['getLineColor']>,
    default: () => [0, 0, 0, 255],
  },
  getElevation: {
    type: [Function, Number] as PropType<GeoJsonLayerProps['getElevation']>,
    default: () => 1000,
  },
  getLineWidth: {
    type: [Function, Number] as PropType<GeoJsonLayerProps['getLineWidth']>,
    default: () => 1,
  },
  material: {
    type: Object as PropType<GeoJsonLayerProps['material']>,
    default: undefined,
  },

  // Props for pointType: 'circle'
  getPointRadius: {
    type: [Function, Number] as PropType<GeoJsonLayerProps['getPointRadius']>,
    default: () => 1, // Example default, can be modified
  },
  pointRadiusUnits: {
    type: String as PropType<GeoJsonLayerProps['pointRadiusUnits']>,
    default: 'meters',
  },
  pointRadiusScale: {
    type: Number as PropType<GeoJsonLayerProps['pointRadiusScale']>,
    default: 1,
  },
  pointRadiusMinPixels: {
    type: Number as PropType<GeoJsonLayerProps['pointRadiusMinPixels']>,
    default: 0,
  },
  pointRadiusMaxPixels: {
    type: Number as PropType<GeoJsonLayerProps['pointRadiusMaxPixels']>,
    default: Number.MAX_SAFE_INTEGER,
  },
  pointAntialiasing: {
    type: Boolean as PropType<GeoJsonLayerProps['pointAntialiasing']>,
    default: true,
  },
  pointBillboard: {
    type: Boolean as PropType<GeoJsonLayerProps['pointBillboard']>,
    default: false,
  },

  // Props for pointType: 'icon'
  iconAtlas: {
    type: Object,
    default: null,
  },
  iconMapping: {
    type: Object,
    default: () => ({}),
  },
  getIcon: {
    type: Function as unknown as PropType<GeoJsonLayerProps['getIcon']>,
    default: () => null,
  },
  getIconSize: {
    type: Function as unknown as PropType<GeoJsonLayerProps['getIconSize']>,
    default: () => 1,
  },
  getIconColor: {
    type: Function as unknown as PropType<GeoJsonLayerProps['getIconColor']>,
    default: () => [0, 0, 0, 255],
  },
  getIconAngle: {
    type: Function as unknown as PropType<GeoJsonLayerProps['getIconAngle']>,
    default: () => 0,
  },
  iconBillboard: {
    type: Boolean as PropType<GeoJsonLayerProps['iconBillboard']>,
    default: false,
  },

  // Props for pointType: 'text'
  getText: {
    type: Function as unknown as PropType<GeoJsonLayerProps['getText']>,
    default: () => '',
  },
  getTextColor: {
    type: [Function, Array] as unknown as PropType<GeoJsonLayerProps['getTextColor']>,
    default: () => [0, 0, 0, 255],
  },
  getTextSize: {
    type: [Function, Number] as unknown as PropType<GeoJsonLayerProps['getTextSize']>,
    default: () => 12,
  },
  textSizeUnits: {
    type: String as PropType<GeoJsonLayerProps['textSizeUnits']>,
    default: 'pixels',
  },
  textBackground: {
    type: Boolean as PropType<GeoJsonLayerProps['textBackground']>,
    default: false,
  },
}

export const geoJsonPropsKeys: (keyof GeoJsonLayerProps)[] = [
  ...baseLayerKeys,
  'pointType',
  'filled',
  'stroked',
  'extruded',
  'wireframe',
  'elevationScale',
  'lineWidthUnits',
  'lineWidthScale',
  'lineWidthMinPixels',
  'lineWidthMaxPixels',
  'lineJointRounded',
  'lineMiterLimit',
  'lineCapRounded',
  'lineBillboard',
  'getFillColor',
  'getLineColor',
  'getElevation',
  'getLineWidth',
  'material',

  // Props for pointType: 'circle'
  'getPointRadius',
  'pointRadiusUnits',
  'pointRadiusScale',
  'pointRadiusMinPixels',
  'pointRadiusMaxPixels',
  'pointAntialiasing',
  'pointBillboard',

  // Props for pointType: 'icon'
  'iconAtlas',
  'iconMapping',
  'getIcon',
  'getIconSize',
  'getIconColor',
  'getIconAngle',
  'iconBillboard',

  // Props for pointType: 'text'
  'getText',
  'getTextColor',
  'getTextSize',
  'textSizeUnits',
  'textBackground',
]
