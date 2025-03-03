import type { InjectionKey, Ref, ShallowRef, ComponentInternalInstance, Raw } from 'vue'
import type { Map, MapEventType } from 'maplibre-gl'

export const map = Symbol('map'),
  mapSymbol = map as InjectionKey<ShallowRef<Map | undefined>>,
  isLoadedSymbol = Symbol('isLoaded') as InjectionKey<Ref<boolean>>,
  isInitialized = Symbol('isInitialized'),
  isInitializedSymbol = isInitialized as InjectionKey<Ref<boolean>>

export interface MglEvent<T extends keyof MapEventType> {
  type: string
  component: Raw<ComponentInternalInstance>
  map: Map
  event: MapEventType[T]
}
