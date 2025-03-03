import type { ComponentPropsOptions, PropType } from 'vue';
import type { TripsLayerProps } from '@deck.gl/geo-layers';
import { pathLayerProps, pathPropsKeys } from '@/lib/layers/path.lib.ts'

// Define Vue-style props for TripsLayer
export const tripsLayerProps: ComponentPropsOptions = {
  ...pathLayerProps ,
  fadeTrail: {
    type: Boolean as PropType<TripsLayerProps['fadeTrail']>,
    default: true,
  },
  trailLength: {
    type: Number as PropType<TripsLayerProps['trailLength']>,
    default: 120,
  },
  currentTime: {
    type: Number as PropType<TripsLayerProps['currentTime']>,
    default: 0,
  },
  getTimestamps: {
    type: Function as PropType<TripsLayerProps['getTimestamps']>,
    default: (d: any) => d.timestamps,
  },
};

// Define the keys for TripsLayer props to simplify further use
export const tripsPropsKeys: (keyof TripsLayerProps)[] = [
  ...pathPropsKeys,
  'fadeTrail',
  'trailLength',
  'currentTime',
  'getTimestamps',
]
