import type { InjectionKey, Ref } from 'vue'
import type { Deck } from '@deck.gl/core'

export const deckInstanceSymbol = Symbol('deckInstance') as InjectionKey<Ref<Deck | null>>
