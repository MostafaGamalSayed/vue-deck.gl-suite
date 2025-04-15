# @vue-deckgl-suite/layers

The **[@vue-deckgl-suite](https://github.com/MostafaGamalSayed/vue-deck.gl-suite)** monorepo is built to provide a seamless integration of **Deck.gl** and **Vue-based applications**, enabling the development of high-performance geospatial visualizations with ease. It consists of a series of modular packages that work together to support various basemaps and visualization use cases.

The `@vue-deckgl-suite/layers` package introduces **declarative Vue components** for defining and rendering **Deck.gl** layers. This approach simplifies the process of adding complex geospatial visualizations to your Vue applications, aligning closely with Vue's component-based architecture.

---

## Important Note: Basemap Package Required

The `@vue-deckgl-suite/layers` package **must be used along with one of the supported basemap packages** to provide a valid context for rendering Deck.gl visualizations. You can choose one of the following basemap packages:

1. [`@vue-deckgl-suite/maplibre`](https://vue-deckgl-suite.wakeb.tech/maplibre/): For rendering basemaps using **MapLibre GL**.
2. [`@vue-deckgl-suite/google-maps`](https://vue-deckgl-suite.wakeb.tech/google-maps/): For rendering basemaps using **Google Maps**.

Both basemap packages seamlessly integrate with `@vue-deckgl-suite/layers` to provide an easy-to-use and performant geospatial visualization solution.

---

## Installation

Install the `@vue-deckgl-suite/layers` package along with a basemap package of your choice.

### 1. Install the Layers Package
```bash
# With npm
npm install @vue-deckgl-suite/layers

# Or with yarn
yarn add @vue-deckgl-suite/layers

# Or with pnpm
pnpm add @vue-deckgl-suite/layers
```

### 2. Install a Basemap Package
You must also install one of the supported basemap packages depending on your project's requirements.

#### For MapLibre:
```bash
# With npm
npm install @vue-deckgl-suite/maplibre maplibre-gl

# Or with yarn
yarn add @vue-deckgl-suite/maplibre maplibre-gl

# Or with pnpm
pnpm add @vue-deckgl-suite/maplibre maplibre-gl
```

#### For Google Maps:
```bash
# With npm
npm install @vue-deckgl-suite/google-maps

# Or with yarn
yarn add @vue-deckgl-suite/google-maps

# Or with pnpm
pnpm add @vue-deckgl-suite/google-maps
```

### 3. Install Peer Dependencies
The `@vue-deckgl-suite/layers` package relies on the following `deck.gl` core dependencies:

```bash
npm install @deck.gl/core @deck.gl/layers @deck.gl/geo-layers @deck.gl/aggregation-layers
```

---

## Documentation

For more information about available layers, supported basemaps, and future integrations, refer to the full documentation of the **[@vue-deckgl-suite](https://vue-deckgl-suite.wakeb.tech/)** package.

---

## Usage Scenarios

Depending on the combination of packages and the basemap providers used, you can utilize **declarative Vue syntax** to define Deck.gl layers as child components of the `DeckGL` overlay. Example:

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

---

For more examples and guides, visit the **[official documentation →](https://vue-deckgl-suite.wakeb.tech)**.