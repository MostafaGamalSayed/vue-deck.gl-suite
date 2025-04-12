import type { ComponentPropsOptions, PropType } from 'vue'
import { COORDINATE_SYSTEM, type LayerProps } from '@deck.gl/core'

export const baseLayerProps: ComponentPropsOptions = {
  // basic props
  id: {
    type: String as PropType<LayerProps['id']>,
    required: true,
  },
  data: {
    type: [Object, String] as PropType<LayerProps['data']>,
  },
  visible: {
    type: Boolean as PropType<LayerProps['visible']>,
    default: true,
  },
  opacity: {
    type: Number as PropType<LayerProps['opacity']>,
    default: 1,
  },
  extensions: {
    type: Array as PropType<LayerProps['extensions']>,
  },

  // Interaction Properties
  pickable: {
    type: Boolean as PropType<LayerProps['pickable']>,
    default: false,
  },
  highlightColor: {
    type: [Array, Function] as PropType<LayerProps['highlightColor']>,
    default: () => [0, 0, 128, 128],
  },
  highlightedObjectIndex: {
    type: [Number, null] as PropType<LayerProps['highlightedObjectIndex']>,
    default: null,
  },
  autoHighlight: {
    type: Boolean as PropType<LayerProps['autoHighlight']>,
    default: false,
  },

  // Coordinate System Properties
  coordinateSystem: {
    type: Number as PropType<LayerProps['coordinateSystem']>,
    default: COORDINATE_SYSTEM.DEFAULT,
  },
  coordinateOrigin: {
    type: Array as unknown as PropType<LayerProps['coordinateOrigin']>,
    default: () => [0, 0, 0],
  },
  wrapLongitude: {
    type: Boolean as PropType<LayerProps['wrapLongitude']>,
    default: false,
  },
  modelMatrix: {
    type: Array as unknown as PropType<LayerProps['modelMatrix']>,
    default: undefined,
  },

  // data properties
  dataComparator: {
    type: Function as unknown as PropType<LayerProps['dataComparator']>,
  },
  _dataDiff: {
    type: Function as unknown as PropType<LayerProps['_dataDiff']>,
  },
  dataTransform: {
    type: Function as unknown as PropType<LayerProps['dataTransform']>,
    default: undefined,
  },
  positionFormat: {
    type: String as PropType<LayerProps['positionFormat']>,
    default: 'XYZ',
  },
  colorFormat: {
    type: String as PropType<LayerProps['colorFormat']>,
    default: 'RGBA',
  },
  numInstances: {
    type: Number as PropType<LayerProps['numInstances']>,
    default: undefined,
  },
  updateTriggers: {
    type: Object as PropType<LayerProps['updateTriggers']>,
  },
  transitions: {
    type: Object as PropType<LayerProps['transitions']>,
  },
}
export const baseLayerKeys: (keyof LayerProps)[] = [
  'id',
  'data',
  'visible',
  'opacity',
  'extensions',
  'pickable',
  'highlightColor',
  'highlightedObjectIndex',
  'autoHighlight',
  'coordinateSystem',
  'coordinateOrigin',
  'wrapLongitude',
  'modelMatrix',
  'dataComparator',
  '_dataDiff',
  'dataTransform',
  'positionFormat',
  'colorFormat',
  'numInstances',
  'transitions',
]
