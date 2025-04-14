import { GoogleMapsOverlay } from '@deck.gl/google-maps'
import type { InjectionKey, Ref } from "vue";

export const googleOverlayInstanceSymbol = Symbol('googleOverlayInstanceSymbol') as InjectionKey<Ref<GoogleMapsOverlay | null>>

export const mapSymbol: InjectionKey<Ref<google.maps.Map | undefined>> = Symbol("map");
export const apiSymbol: InjectionKey<Ref<typeof google.maps | undefined>> = Symbol("api");

/**
 * Utilitary flag for components that need to know the map
 * was fully loaded (including its tiles) to decide their behavior
 */
export const mapTilesLoadedSymbol: InjectionKey<Ref<boolean>> = Symbol("mapTilesLoaded");

