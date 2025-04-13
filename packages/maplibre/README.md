# @vue-deckgl-suite/layers
The **[@vue-deckgl-suite](https://github.com/MostafaGamalSayed/vue-deck.gl-suite)** monorepo is built to provide a seamless integration of **Deck.gl** and **Vue-based applications**, enabling the development of high-performance geospatial visualizations with ease. It consists of a series of modular packages that work together to support various basemaps and visualization use cases.

The `@vue-deckgl-suite/maplibre` package provides powerful Vue components to integrate **MapLibre** maps with **Deck.gl** layers, enabling you to build high-performance interactive geospatial visualizations. These components simplify handling maps and MapboxOverlay for your applications, leveraging both **Deck.gl** and **MapLibre** capabilities.

---
## Documentation
For more information about available layers, supported basemaps, and future integrations, refer to the full documentation of the **[@vue-deckgl-suite](https://vue-deckgl-suite.wakeb.tech/)** package.

---

## Overview of Packages

### `@vue-deckgl-suite/maplibre`
This package provides two core components:
1. **`Map`**: A Map component for **MapLibre GL**, a powerful and customizable open-source basemap provider.
2. **`DeckGL`**: An overlay component that facilitates rendering of **Deck.gl** visualization layers on top of the MapLibre map.

Developers using only the **`@vue-deckgl-suite/maplibre`** package can define Deck.gl layers as **ES6 class instances** and pass them to the `layers` prop of the `DeckGL` component. This is the default behavior and requires familiarity with the Deck.gl API.


### `@vue-deckgl-suite/layers`
The **`@vue-deckgl-suite/layers`** package introducing declarative support for creating Deck.gl layers using Vue components. This package allows developers to define Deck.gl layers as **Vue child components**, nested inside the `DeckGL` overlay. This declarative syntax streamlines development by aligning with Vue's component-based architecture.

## Usage Scenarios

Depending on the combination of packages used, you have two options for defining and rendering Deck.gl layers.

### 1. Using Only `@vue-deckgl-suite/maplibre`
In this case, you will use the **`DeckGL` component** as an overlay for MapLibre and provide all Deck.gl layers as **ES6 class instances** to the `layers` prop. Example:

```vue
<script setup>
  import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
  import { HeatmapLayer } from '@deck.gl/aggregation-layers'

  const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'

  const layer = new HeatmapLayer({
    id: 'HeatmapLayer',
    data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json',

    aggregation: 'SUM',
    getPosition: d => d.COORDINATES,
    getWeight: d => d.SPACES,
    radiusPixels: 25
  });
</script>

<template>
  <DeckGL :layers="[layer]">
    <Map
      height="100vh"
      :style
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    />
  </DeckGL>
</template>

<style lang="scss">
  @import 'maplibre-gl/dist/maplibre-gl.css';
</style>

```

This approach ensures full flexibility for programmatically managing Deck.gl layers and is suitable when only using `@vue-deckgl-suite/maplibre`.


### 2. Using Both `@vue-deckgl-suite/maplibre` and `@vue-deckgl-suite/layers`
When both packages are used, you can utilize **declarative Vue syntax** to define Deck.gl layers as child components of the `DeckGL` overlay. Example:

```vue
<script setup>
  import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
  import { ColumnLayer } from '@vue-deckgl-suite/layers';

  const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';
</script>

<template>
  <DeckGL :getTooltip="({ object }) => object && `height: ${object.value * 5000}m`">
    <Map
      height="100vh"
      :style
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
      :pitch="30"
      :bearing="0"
    />
    <ColumnLayer
      id="ColumnLayer"
      data="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/hexagons.json"
      :diskResolution="12"
      :extruded="true"
      :radius="250"
      :elevationScale="5000"
      :getElevation="(d) => d.value"
      :getFillColor="(d) => [48, 128, d.value * 255, 255]"
      :getPosition="(d) => d.centroid"
      :pickable="true"
    />
  </DeckGL>
</template>
```

With this approach, the **`@vue-deckgl-suite/layers`** package simplifies configuration by allowing each layer to be treated as a standalone Vue component. Props passed to each component map directly to Deck.gl class attributes.