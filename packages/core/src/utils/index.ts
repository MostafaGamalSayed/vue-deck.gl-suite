import type { DeckLayerProps } from '@/shared/types.ts'

export function genDeckOpts<T>(props: Partial<T>, validProps: (keyof T)[]): Partial<T> {
  for (const opt of Object.keys(props) as Array<keyof T>) {
    if (props[opt] === undefined || !validProps.includes(opt)) {
      delete props[opt]
    }
  }

  return props
}

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
