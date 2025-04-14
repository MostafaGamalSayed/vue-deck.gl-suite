import type { DeckLayerProps } from '@/shared/types.ts'

/**
 * Generates an object containing only valid properties from the provided input.
 * Filters out properties that are undefined or not included in the list of valid properties.
 *
 * @param {Partial<T>} props - The input object containing a partial set of properties.
 * @param {(keyof T)[]} validProps - An array of keys representing the valid properties.
 * @return {Partial<T>} A new object containing only the valid properties from the input.
 */
export function genDeckOpts<T>(props: Partial<T>, validProps: (keyof T)[]): Partial<T> {
  for (const opt of Object.keys(props) as Array<keyof T>) {
    if (props[opt] === undefined || !validProps.includes(opt)) {
      delete props[opt]
    }
  }

  return props
}

/**
 * Generates a deck.gl layer options object by filtering valid properties and attaching event emitters.
 *
 * @param {T} props - The properties to be processed for generating the layer options.
 * @param {Array<keyof T>} validProps - An array of keys representing valid properties to be included in the layer options.
 * @param {(event: 'click' | 'hover' | 'drag' | 'dragStart' | 'dragEnd' | 'error' | 'dataLoad', ...args: any[]) => void} emit - A function to emit events with specified type and arguments.
 * @return {Partial<T>} A filtered properties object with added event handler callbacks for the specified events.
 */
export function genDeckLayerOpts<T extends DeckLayerProps>(
  props: T,
  validProps: Array<keyof T>,
  emit: (
    event: 'click' | 'hover' | 'drag' | 'dragStart' | 'dragEnd' | 'error' | 'dataLoad',
    ...args: any[]
  ) => void,
): Partial<T> {
  for (const opt of Object.keys(props) as Array<keyof T>) {
    if (props[opt] === undefined || !validProps.includes(opt)) {
      delete props[opt]
    }
  }

  return {
    ...props,
    onClick: (...args: any[]) => emit('click', ...args),
    onHover: (...args: any[]) => emit('hover', ...args),
    onDrag: (...args: any[]) => emit('drag', ...args),
    onDragStart: (...args: any[]) => emit('dragStart', ...args),
    onDragEnd: (...args: any[]) => emit('dragEnd', ...args),
    onError: (...args: any[]) => emit('error', ...args),
    onDataLoad: (...args: any[]) => emit('dataLoad', ...args),
  }
}


