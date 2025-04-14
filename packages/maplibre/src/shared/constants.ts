import { type InjectionKey, type Ref } from 'vue'
import { MapboxOverlay } from '@deck.gl/mapbox'

export const mapboxOverlayInstanceSymbol = Symbol('mapboxOverlayInstanceSymbol') as InjectionKey<Ref<MapboxOverlay | null>>
