import type { DeckProps, LayerProps } from '@deck.gl/core'
import {
  ArcLayer,
  type ArcLayerProps,
  BitmapLayer,
  type BitmapLayerProps,
  ColumnLayer,
  type ColumnLayerProps,
  GeoJsonLayer,
  type GeoJsonLayerProps,
  IconLayer,
  type IconLayerProps,
  LineLayer,
  type LineLayerProps,
  PathLayer,
  type PathLayerProps,
  type PointCloudLayer,
  type PointCloudLayerProps,
  PolygonLayer,
  type PolygonLayerProps,
  ScatterplotLayer,
  type ScatterplotLayerProps,
} from '@deck.gl/layers'
import type { Tile3DLayerProps } from '@deck.gl/geo-layers'

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

export type LayerOptions = Omit<
  LayerProps,
  'onHover' | 'onClick' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onDataLoad' | 'onError'
>

export type WithoutLayerEvents<T> = Omit<
  T,
  'onHover' | 'onClick' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onDataLoad' | 'onError'
>

export type DeckLayerProps =
  | WithoutLayerEvents<ArcLayerProps>
  | WithoutLayerEvents<GeoJsonLayerProps>
  | WithoutLayerEvents<BitmapLayerProps>
  | WithoutLayerEvents<ColumnLayerProps>
  | WithoutLayerEvents<LineLayerProps>
  | WithoutLayerEvents<PolygonLayerProps>
  | WithoutLayerEvents<ScatterplotLayerProps>
  | WithoutLayerEvents<PathLayerProps>
  | WithoutLayerEvents<IconLayerProps>
  | WithoutLayerEvents<PointCloudLayerProps>
  | WithoutLayerEvents<Tile3DLayerProps>

export type DeckLayer =
  | ArcLayer
  | GeoJsonLayer
  | BitmapLayer
  | ColumnLayer
  | LineLayer
  | PolygonLayer
  | ScatterplotLayer
  | PathLayer
  | IconLayer
  | PointCloudLayer
