# @vue-deckgl-suite/layers


When using both **`@vue-deckgl-suite/maplibre`** and **`@vue-deckgl-suite/layers`**, you can define Deck.gl layers as declarative Vue components inside the `DeckGL` overlay. This approach simplifies the integration process and aligns with Vue's component-based design principles.

## Example: Declarative Syntax for a Hexagon Layer

```vue
<template>
  <DeckGL>
    <Map
      center="[-122.4, 37.74]"
      :zoom="11"
      style="width: 100%; height: 100%;"
    />
    <HexagonLayer
      id="hexagon-layer"
      data="data-url.json"
      :get-position="d => d.coordinates"
      :extruded="true"
      :color-range="[[1, 152, 189], [209, 55, 78]]"
      :radius="200"
    />
  </DeckGL>
</template>
```

In this example:
- The `id` and props like `data`, `get-position`, and `radius` are passed declaratively to the `HexagonLayer` component.
- The declarative syntax improves readability and developer productivity when working within Vue applications.


## Available Layers

Here is a list of the layers available in `@vue-deckgl-suite/layers`. Each provides unique functionality for various geospatial visualization use cases.

- **[Arc Layer](/layers/arc-layer/):** Draws great arcs (curves) between two points on a map.
- **[GeoJson Layer](/layers/geojson-layer/):** Visualizes GeoJSON data with full feature support.
- **[Hexagon Layer](/layers/hexagon-layer/):** Aggregates scattered data points into hexagonal grids.
- **[Grid Layer](/layers/grid-layer/):** Organizes and visualizes points within rectangular grids.
- **[Column Layer](/layers/column-layer/):** Visualizes data as vertical cylinders, useful for 3D geospatial data
  representation.
- **[Path Layer](/layers/path-layer/):** Plots point-to-point paths or line segments on a map.
- **[Trips Layer](/layers/trips-layer/):** Animates trips or movement data over time.
- **[Icon Layer](/layers/icon-layer/):** Renders icons or images at specific geospatial positions.
- **[Point Cloud Layer](/layers/point-cloud-layer/):** Renders 3D point clouds, typically used for visualizing large
  sets of points in space.
- **[WMS Layer](/layers/wms-layer/):** Displays map tiles from a Web Map Service endpoint.

Learn more about each layer by visiting its dedicated page.