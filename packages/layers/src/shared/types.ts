import {
  type ArcLayerProps,
  type BitmapLayerProps,
  type ColumnLayerProps,
  type GeoJsonLayerProps,
  type IconLayerProps,
  type LineLayerProps,
  type PathLayerProps,
  type PointCloudLayerProps,
  type PolygonLayerProps,
  type ScatterplotLayerProps,
} from '@deck.gl/layers'
import type { Tile3DLayerProps, WMSLayerProps } from '@deck.gl/geo-layers'
import type {
  GridLayerProps,
  HeatmapLayerProps,
  HexagonLayerProps,
} from '@deck.gl/aggregation-layers'

/**
 * Represents a utility type that excludes specific layer-related event properties from the given type `T`.
 *
 * The excluded event properties are 'onHover', 'onClick', 'onDrag', 'onDragStart',
 * 'onDragEnd', 'onDataLoad', and 'onError'.
 *
 * This is useful for creating a type that inherits from `T` but does not include these specific events.
 *
 * @template T The base type from which the properties will be omitted.
 */
export type WithoutLayerEvents<T> = Omit<
  T,
  'onHover' | 'onClick' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onDataLoad' | 'onError'
>

/**
 * Represents the properties for various Deck.gl layer types without layer event properties.
 *
 * DeckLayerProps combines the settings for multiple types of layers, excluding the layer-specific events.
 * This allows for standardized handling of properties across different types of layers.
 *
 * The supported layer types include:
 * - ArcLayer
 * - GeoJsonLayer
 * - BitmapLayer
 * - ColumnLayer
 * - LineLayer
 * - PolygonLayer
 * - ScatterplotLayer
 * - PathLayer
 * - IconLayer
 * - PointCloudLayer
 * - Tile3DLayer
 * - WMSLayer
 * - HexagonLayer
 * - GridLayer
 * Each type is represented as a union, enabling flexibility to select properties specific to individual layer types.
 */
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
  | WithoutLayerEvents<WMSLayerProps>
  | WithoutLayerEvents<HeatmapLayerProps>
  | WithoutLayerEvents<HexagonLayerProps>
  | WithoutLayerEvents<GridLayerProps>
