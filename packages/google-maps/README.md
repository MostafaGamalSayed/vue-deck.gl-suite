# @vue-deckgl-suite/maplibre

The **[@vue-deckgl-suite](https://github.com/MostafaGamalSayed/vue-deck.gl-suite)** monorepo enables seamless integration between **Deck.gl** and Vue-based applications for high-performance geospatial visualizations. Among its modular packages, the `@vue-deckgl-suite/google-maps` package provides powerful Vue components for integrating **Google** maps with Deck.gl layers.

With this package, developers can:
- Render complex **Deck.gl** visualizations on top of interactive basemaps powered by **Google Maps**.
- Leverage **Vue's declarative syntax** to create clean and scalable geospatial applications.

---

## Documentation

Comprehensive documentation, guides, and examples are available at the **[@vue-deckgl-suite documentation →](https://vue-deckgl-suite.wakeb.tech/)**.

---

## Features

- 🗺 **Google Basemap Support**: Effortlessly set up basemaps using Google Maps.
- 📊 **Deck.gl Overlays**: Add and manage data visualization layers with full Deck.gl support.
- 🔄 **Declarative or Programmatic Layer Rendering**: Choose between declarative Vue components for layers or programmatic ES6 instances.

---

## Installation

### 1. Install the Package
```bash
# With npm
npm install @vue-deckgl-suite/google-maps

# Or with yarn
yarn add @vue-deckgl-suite/google-maps

# Or with pnpm
pnpm add @vue-deckgl-suite/google-maps
```

### 2. Install Peer Dependencies
This package requires the following `deck.gl` dependencies:
```bash
npm install @deck.gl/core @deck.gl/layers @deck.gl/geo-layers @deck.gl/aggregation-layers @deck.gl/google-maps
```

---

## Example Usage

### Using Only `@vue-deckgl-suite/google-maps`
```vue
<script>
import { DeckGL, Map } from '@vue-deckgl-suite/google-maps'
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
      api-key="<YOUR_API_KEY>"
      height="100vh"
      :center="{ lat: 37.74, lng: -122.4 }"
      :zoom="11"
      :max-zoom="20"
    />
  </DeckGL>
</template>
```

---

### Using `@vue-deckgl-suite/google-maps` with `@vue-deckgl-suite/layers`
By combining `@vue-deckgl-suite/google-maps` with `@vue-deckgl-suite/layers`, you can utilize **Vue's declarative syntax** to define Deck.gl layers as Vue components. This approach simplifies the process of managing and rendering layers.

```vue
<script setup>
  import { Map, DeckGL } from '@vue-deckgl-suite/maplibre'
  import { ColumnLayer } from '@vue-deckgl-suite/layers'
</script>

<template>
  <DeckGL :getTooltip="({ object }) => object && `height: ${object.value * 5000}m`">
    <Map
      api-key="<YOUR_API_KEY>"
      height="100vh"
      :center="[-122.4, 37.74]"
      :zoom="11"
      :max-zoom="20"
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

In this example:
- **`Map`**: Provides the basemap using **MapLibre GL**.
- **`ColumnLayer`**: Adds a ColumnLayer layer declaratively through the `@vue-deckgl-suite/layers` package.
- **Props**: The layer component's props map directly to its Deck.gl ES6 API equivalent, making configuration concise and Vue-friendly.

---

With `@vue-deckgl-suite/google-maps` and `@vue-deckgl-suite/layers`, developers can easily build highly interactive and visually dynamic geospatial applications using Vue's declarative component patterns alongside Deck.gl's rendering power.