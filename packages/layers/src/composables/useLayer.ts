import type { Layer, LayerProps } from '@deck.gl/core'
import { inject, markRaw, onUnmounted, type Ref, ref, watch } from 'vue'
import type { DeckLayerProps } from '@/shared/types.ts'

/**
 * A composable function to manage the lifecycle of a Deck.gl layer. This function creates a new layer
 * using a factory function, registers it with the Deck.gl context, and cleans up the layer
 * resources when the component is destroyed.
 *
 * @param {function} layerFactory - A factory function that returns a new Deck.gl `Layer` instance.
 * @throws {Error} Throws an error if the DeckGL context (`addLayer` or `removeLayer`) is not available.
 */
export const useLayer = (layerFactory: () => Layer) => {
  // Inject Deck.gl layer management functions
  const addLayer = inject('addLayer') as (layer: Layer) => void
  const removeLayer = inject('removeLayer') as (layer: Layer) => void
  const layer: Ref<Layer| null> = ref(null)


  // Create and register the new layer
  layer.value = markRaw(layerFactory())

  console.log(layer.value)

  if (!addLayer || !removeLayer) {
    throw new Error(
      'DeckGL context is missing. Ensure you are uAsing this within a DeckGL parent component.',
    )
  }

  addLayer(layer.value)

  // Cleanup when the component is destroyed
  onUnmounted(() => {
    if (layer.value) {
      try {
        removeLayer(layer.value as Layer) // Remove the layer from Deck.gl
        layer.value?.finalizeState(layer.value.context) // Finalize resources and release GPU memory
      } catch (error) {
        console.error('Error finalizing layer:', error)
      }
    }
  })
}
