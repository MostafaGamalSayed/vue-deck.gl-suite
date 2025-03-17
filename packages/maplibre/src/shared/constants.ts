import { type InjectionKey, type Ref } from 'vue'
import { MapboxOverlay } from '@deck.gl/mapbox'

export const overlayInstanceSymbol = Symbol('overlayInstance') as InjectionKey<Ref<MapboxOverlay | null>>
