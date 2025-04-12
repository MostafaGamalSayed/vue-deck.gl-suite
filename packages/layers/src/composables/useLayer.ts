import type { Layer } from '@deck.gl/core'
import { inject, markRaw, onUnmounted, ref, type Ref, watch } from 'vue'
import type { DeckLayerProps } from '@/shared/types.ts'
import { genDeckLayerOpts } from '@/utils'

/**
 * A composable function to manage the lifecycle of a reactive Deck.gl layer.
 *
 * @param {function} layerFactory - A factory function that generates a new Deck.gl `Layer` instance.
 * @param props - Reactive props used to configure the `Layer`.
 * @param validProps - List of valid prop keys to transform into layer options.
 * @param emit - Emit function for Vue component events.
 */
export const useLayer = <P extends DeckLayerProps>(
  layerFactory: (options: Partial<P>) => Layer,
  props: P,
  validProps: Array<keyof P>,
  emit: (
    event: 'click' | 'hover' | 'drag' | 'dragStart' | 'dragEnd' | 'error' | 'dataLoad',
    ...args: any[]
  ) => void,
) => {
  // References to the current Deck.gl layer and layer management functions
  const addLayer = inject('addLayer') as (layer: Layer) => void
  const removeLayer = inject('removeLayer') as (layer: Layer) => void
  const layer: Ref<Layer | null> = ref(null)

  if (!addLayer || !removeLayer) {
    throw new Error(
      'DeckGL context is missing. Ensure you are using this within a DeckGL parent component.',
    )
  }

  /**
   * Create or update the layer based on the current props
   */
  const initializeLayer = () => {
    console.log('initializeLayer', props)

    const opts: any = genDeckLayerOpts({ ...props }, validProps, emit)

    // Finalize the previous layer if it exists
    destroyLayer()

    // Create a new layer and register it
    layer.value = markRaw(layerFactory(opts))
    addLayer(layer.value)
  }

  /**
   * Cleanup and finalize the current layer
   */
  const destroyLayer = () => {
    if (layer.value) {
      try {
        removeLayer(layer.value) // Remove the layer from Deck.gl
        layer.value.finalizeState(layer.value.context) // Release GPU memory
      } catch (error) {
        console.error('Error finalizing layer:', error)
      }
    }
  }

  // Watch for prop changes and update the layer reactively
  watch(
    props,
    () => {
      initializeLayer()
    },
    { deep: true, immediate: true },
  )

  // Clean up the layer when the component is unmounted
  onUnmounted(destroyLayer)

  return {
    layer,
  }
}
