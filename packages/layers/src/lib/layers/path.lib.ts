import type { ComponentPropsOptions, PropType } from 'vue';
import { baseLayerKeys, baseLayerProps } from '@/lib/layers/layer.lib.ts';
import type { PathLayerProps } from '@deck.gl/layers';

export const pathLayerProps: ComponentPropsOptions = {
  ...baseLayerProps,
  widthUnits: {
    type: String as PropType<PathLayerProps['widthUnits']>,
    default: 'meters',
  },
  widthScale: {
    type: Number as PropType<PathLayerProps['widthScale']>,
    default: 1,
  },
  widthMinPixels: {
    type: Number as PropType<PathLayerProps['widthMinPixels']>,
    default: 0,
  },
  widthMaxPixels: {
    type: Number as PropType<PathLayerProps['widthMaxPixels']>,
    default: Number.MAX_SAFE_INTEGER,
  },
  jointRounded: {
    type: Boolean as PropType<PathLayerProps['jointRounded']>,
    default: false,
  },
  capRounded: {
    type: Boolean as PropType<PathLayerProps['capRounded']>,
    default: false,
  },
  miterLimit: {
    type: Number as PropType<PathLayerProps['miterLimit']>,
    default: 4,
  },
  billboard: {
    type: Boolean as PropType<PathLayerProps['billboard']>,
    default: false,
  },
  _pathType: {
    type: String as PropType<PathLayerProps['_pathType']>,
    default: null,
  },
  getPath: {
    type: Function as unknown as PropType<PathLayerProps['getPath']>,
    default: (object: any) => object.path,
  },
  getColor: {
    type: [Function, Array] as PropType<PathLayerProps['getColor']>,
    default: () => [0, 0, 0, 255],
  },
  getWidth: {
    type: [Function, Number] as PropType<PathLayerProps['getWidth']>,
    default: 1,
  },
};

export const pathPropsKeys: (keyof PathLayerProps)[] = [
  ...baseLayerKeys,
  'widthUnits',
  'widthScale',
  'widthMinPixels',
  'widthMaxPixels',
  'jointRounded',
  'capRounded',
  'miterLimit',
  'billboard',
  '_pathType',
  'getPath',
  'getColor',
  'getWidth',
];
