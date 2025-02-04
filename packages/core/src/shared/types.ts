import type { DeckProps } from '@deck.gl/core'

export type DeckOptions = Omit<
  DeckProps,
  | 'onLoad'
  | 'onDrag'
  | 'onDragStart'
  | 'onDragEnd'
  | 'onClick'
  | 'onHover'
  | 'onDeviceInitialized'
  | 'onBeforeRender'
  | 'onAfterRender'
  | 'onInteractionStateChange'
  | 'onViewStateChange'
  | 'onError'
  | 'onResize'
  | '_onMetrics'
>
