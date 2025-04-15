# @vue-deckgl-suite/maplibre

The **[@vue-deckgl-suite](https://github.com/MostafaGamalSayed/vue-deck.gl-suite)** monorepo enables seamless integration between **Deck.gl** and Vue-based applications for high-performance geospatial visualizations. Among its modular packages, the `@vue-deckgl-suite/maplibre` package provides powerful Vue components for integrating **MapLibre** maps with Deck.gl layers.

With this package, developers can:
- Render complex **Deck.gl** visualizations on top of interactive basemaps powered by **MapLibre GL**.
- Leverage **Vue's declarative syntax** to create clean and scalable geospatial applications.

---

## Documentation

Comprehensive documentation, guides, and examples are available at the **[@vue-deckgl-suite documentation →](https://vue-deckgl-suite.wakeb.tech/)**.

---

## Features

- 🗺 **MapLibre Basemap Support**: Effortlessly set up basemaps using the MapLibre GL library.
- 📊 **Deck.gl Overlays**: Add and manage data visualization layers with full Deck.gl support.
- 🔄 **Declarative or Programmatic Layer Rendering**: Choose between declarative Vue components for layers or programmatic ES6 instances.

---

## Installation

### 1. Install the Package
```bash
# With npm
npm install @vue-deckgl-suite/maplibre maplibre-gl

# Or with yarn
yarn add @vue-deckgl-suite/maplibre maplibre-gl

# Or with pnpm
pnpm add @vue-deckgl-suite/maplibre maplibre-gl
```

### 2. Install Peer Dependencies
This package requires the following `deck.gl` dependencies:
```bash
npm install @deck.gl/core @deck.gl/layers @deck.gl/geo-layers @deck.gl/aggregation-layers @deck.gl/mapbox
```

### 3. Add Required Styles
Include MapLibre's CSS file for proper map rendering:
```scss
@import "maplibre-gl/dist/maplibre-gl.css";
```

---

## Example Usage

### Using Only `@vue-deckgl-suite/maplibre`
```vue
<script>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
import { ColumnLayer } from '@deck.gl/layers'

const layers = new ColumnLayer({
    id: 'ColumnLayer',
    data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/hexagons.json',
    diskResolution: 12,
    extruded: true,
    radius: 250,
    elevationScale: 5000,
    getElevation: (d) => d.value,
    getFillColor: (d) => [48, 128, d.value * 255, 255],
    getPosition: (d) => d.centroid,
})
</script>

<template>
  <DeckGL
    :layers="[layers]"
    :getTooltip="({ object }) => object && `${object.from.name} to ${object.to.name}`"
  >
    <Map
      height="100vh"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
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

---

### Using `@vue-deckgl-suite/maplibre` with `@vue-deckgl-suite/layers`
By combining `@vue-deckgl-suite/maplibre` with `@vue-deckgl-suite/layers`, you can utilize **Vue's declarative syntax** to define Deck.gl layers as Vue components. This approach simplifies the process of managing and rendering layers.

```vue
<script setup>
  import { Map, DeckGL } from '@vue-deckgl-suite/maplibre'
  import { ColumnLayer } from '@vue-deckgl-suite/layers'

  const style = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
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

<style lang="scss">
  @import 'maplibre-gl/dist/maplibre-gl.css';
</style>
```

In this example:
- **`Map`**: Provides the basemap using **MapLibre GL**.
- **`ColumnLayer`**: Adds a ColumnLayer layer declaratively through the `@vue-deckgl-suite/layers` package.
- **Props**: The layer component's props map directly to its Deck.gl ES6 API equivalent, making configuration concise and Vue-friendly.

---

With `@vue-deckgl-suite/maplibre` and `@vue-deckgl-suite/layers`, developers can easily build highly interactive and visually dynamic geospatial applications using Vue's declarative component patterns alongside Deck.gl's rendering power.