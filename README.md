<p align="center">
  <img src="./docs/public/wakeb-logo-light-mode.png" alt="Wakeb Logo" height="120">
</p>

# @vue-deckgl-suite

The **`@vue-deckgl-suite`** is a modular monorepo built for seamless integration of **`Deck.gl`** into Vue-based applications, enabling high-performance and interactive geospatial visualizations with ease. This suite allows developers to use Vue's declarative syntax to define Deck.gl layers, providing a highly scalable and flexible solution for building geospatial visualizations.

---

## Features

- 🧩 **Modular Design**: Use only the required modules for your project.
- 🚀 **High Performance**: Harness the GPU-accelerated rendering of **Deck.gl**.
- 🔧 **Declarative Syntax**: Define visualization layers as Vue components, keeping code clean and structured.
- 🌎 **Basemap Integration**: Full support for **MapLibre** as the current basemap provider with plans for **Google Maps**, **Mapbox**, and others in the future.
- 🔄 **Two Usage Patterns**: Choose between:
    1. Declarative Vue components for Deck.gl layers.
    2. Programmatic ES6 class instances provided directly to the DeckGL overlay.

---

## Installation

Start by installing `@vue-deckgl-suite/layers` and `@vue-deckgl-suite/maplibre`.

### 1. Install Base Packages
Install the necessary core packages using npm, yarn, or pnpm:
```bash
# With npm
npm install @vue-deckgl-suite/layers @vue-deckgl-suite/maplibre

# Or with yarn
yarn add @vue-deckgl-suite/layers @vue-deckgl-suite/maplibre

# Or with pnpm
pnpm add @vue-deckgl-suite/layers @vue-deckgl-suite/maplibre
```

### 2. Install Peer Dependencies
The packages rely on peer dependencies. Install the following:
```bash
# For @vue-deckgl-suite/layers
npm install vue @deck.gl/core @deck.gl/layers @deck.gl/geo-layers @deck.gl/aggregation-layers

# For @vue-deckgl-suite/maplibre
npm install vue @deck.gl/core @deck.gl/mapbox maplibre-gl
```

### 3. Add Required CSS
To ensure proper styling, include the `maplibre-gl` styles:
```scss
@import 'maplibre-gl/dist/maplibre-gl.css';
```

---

## Quick Usage

### Example: Declarative Syntax for Layers
With the declarative approach, you can define Deck.gl layers directly as Vue components.

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { GeoJsonLayer } from '@vue-deckgl-suite/layers';

const data = 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/layer-data/geojson.json';
</script>

<template>
  <DeckGL>
    <Map
      height="100vh"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[0, 0]"
      :zoom="2"
    />
    <GeoJsonLayer
      id="geojson"
      :data="data"
      :getLineWidth="50"
    />
  </DeckGL>
</template>
```

### Example: Programmatic Usage
Alternatively, use Deck.gl layers as ES6 class instances:

```vue
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { ArcLayer } from '@deck.gl/layers';

const arcLayer = new ArcLayer({
  id: 'arc-layer',
  data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-segments.json',
  getSourcePosition: d => d.from.coordinates,
  getTargetPosition: d => d.to.coordinates,
  getSourceColor: [255, 0, 0],
  getTargetColor: [0, 0, 255],
  getWidth: 12,
});
</script>

<template>
  <DeckGL :layers="[arcLayer]">
    <Map
      height="100vh"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[0, 0]"
      :zoom="2"
    />
  </DeckGL>
</template>
```

---

## Framework Features

### Modular Packages
The `@vue-deckgl-suite` consists of two main packages:
1. **[`@vue-deckgl-suite/maplibre`](./docs/maplibre-basemap/)**:
   Provides integration with **MapLibre** for basemaps.
2. **[`@vue-deckgl-suite/layers`](./docs/layers/)**:
   Allows the use of Vue components for Deck.gl layers to simplify layer management.

### Flexible Layer Rendering
With `@vue-deckgl-suite`, you have the option to render layers either:
- Programmatically, suited for dynamically managed visualizations.
- Declaratively, keeping the project aligned with Vue's component-based architecture.

### Scalable for Future Basemaps
Currently supporting **MapLibre**, the package is designed for extensibility, with plans to add support for **Google Maps**, **Mapbox**, **ArcGIS**, and others.

---

## Contributions

We welcome contributions from the community!  
If you'd like to contribute, please submit a Pull Request, make improvements, or suggest enhancements.

### 👥 How to Contribute
1. Fork this repository.
2. Create a new branch for your changes.
3. Submit a Pull Request describing your improvements.

We appreciate all contributors to this project and aim to create a flexible, community-driven geospatial visualization library for Vue.

---

## Documentation

Be sure to check out our full documentation for examples, guides, and more details:

- **Introduction**: [What is `@vue-deckgl-suite`?](./docs/introduction.md)
- **Installation**: [Getting Started](./docs/installation.md)
- **API Reference**: [Map and Layers API](./docs/index.md)

---

Built with ❤️ by **Wakeb**.