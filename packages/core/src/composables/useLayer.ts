import type { Deck, Layer } from '@deck.gl/core'
import { inject, onUnmounted } from 'vue'
import { addLayerSymbol, removeLayerSymbol } from '@/shared/constants.ts'

export const useLayer = (layerFactory: () => Layer) => {

  // Inject Deck.gl layer management functions
  const addLayer = inject(addLayerSymbol) as (layer: Layer) => void
  const removeLayer = inject(removeLayerSymbol) as (layer: Layer) => void

  // Create and register the new layer
  const layer = layerFactory()
  if (!addLayer || !removeLayer) {
    throw new Error('DeckGL context is missing. Ensure you are using this within a DeckGL parent component.')
  }
  addLayer(layer)

  // Cleanup when the component is destroyed
  onUnmounted(() => {
    if (layer) {
      try {
        removeLayer(layer) // Remove the layer from Deck.gl
        layer.finalizeState(layer.context) // Finalize resources and release GPU memory
      } catch (error) {
        console.error('Error finalizing layer:', error)
      }
    }
  })
}
