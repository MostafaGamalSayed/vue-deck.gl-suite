import type { InjectionKey, Ref } from 'vue'
import type { Deck, Layer } from '@deck.gl/core'

export const deckInstanceSymbol = Symbol('deckInstance') as InjectionKey<Ref<Deck | null>>
export const addLayerSymbol = Symbol('addLayer') as InjectionKey<(layer: Layer) => void>
export const removeLayerSymbol = Symbol('removeLayer') as InjectionKey<(layer: Layer) => void>
