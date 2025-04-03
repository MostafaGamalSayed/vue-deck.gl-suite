# @vue-deckgl-suite/maplibre

The `@vue-deckgl-suite/maplibre` package provides powerful Vue components to integrate **MapLibre** maps with **Deck.gl** layers, enabling you to build high-performance interactive geospatial visualizations. These components simplify handling maps and MapboxOverlay for your applications, leveraging both **Deck.gl** and **MapLibre** capabilities.

## Overview

This package includes two primary Vue components:

### 1. **Map**
The `Map` component is a Vue wrapper for **MapLibre GL**, a powerful open-source mapping library for creating customizable basemaps. It supports interactive features like zooming, panning, and adding map layers.

### 2. **DeckGL**
The `DeckGL` component acts as an overlay to render **Deck.gl** visualization layers on top of the MapLibre map. You can seamlessly combine and render multiple Deck.gl layers on a basemap.

## Example Usage

The following example demonstrates using `@vue-deckgl-suite/maplibre` to render data using the `DeckGL` overlay and `Map` component. Deck.gl layers are defined as ES6 class instances passed into the `layers` prop of the `DeckGL` overlay.

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ScatterplotLayer } from '@deck.gl/layers';

const scatterplotLayer = new ScatterplotLayer({
  id: 'scatterplot-layer',
  data: 'data-url.json',
  getPosition: d => d.coordinates,
  getRadius: d => 10,
  getColor: d => [255, 0, 0],
});
</script>

<template>
  <DeckGL :layers="[scatterplotLayer]">
    <Map
      center="[-122.4, 37.74]"
      :zoom="11"
      style="width: 100%; height: 100%;"
    />
  </DeckGL>
</template>
```

## Available Components

### Map
Use the `Map` component to set up a MapLibre basemap.

- **Interactive Features**: Zoom, pan, and configure the map appearance.
- **Customizable Center and Zoom**: Specify map center coordinates and zoom levels.

**[Learn more about the Map component →](./maplibre-basemap/)**

### DeckGL
Use the `DeckGL` component as an overlay to integrate declarative or programmatic Deck.gl layers onto the map.

- **Layer Support**: Add scalable and high-performance Deck.gl layers.
- **Custom Interaction**: Handle events like `onClick`, `onHover`, and more.

**[Learn more about the DeckGL component →](./mapbox-overlay/)**

---

For more information, refer to the full documentation of the **`@vue-deckgl-suite/maplibre`** package.