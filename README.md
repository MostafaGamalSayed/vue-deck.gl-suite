<p align="center">
    <a href="https://wakeb.tech/" target="_blank">
      <img src="./docs/public/wakeb-logo-light-mode.png" alt="Wakeb Logo" height="120">
    </a>
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

### 1. Install Base Packages
Install the necessary core packages using npm, yarn, or pnpm:

#### To use MapLibre as your basemap:
```bash
# With npm
npm install @vue-deckgl-suite/layers @vue-deckgl-suite/maplibre maplibre-gl

# Or with yarn
yarn add @vue-deckgl-suite/layers @vue-deckgl-suite/maplibre maplibre-gl

# Or with pnpm
pnpm add @vue-deckgl-suite/layers @vue-deckgl-suite/maplibre maplibre-gl
```

##### Add Required CSS
To ensure proper styling, include the `maplibre-gl` styles:
```scss
@import 'maplibre-gl/dist/maplibre-gl.css';
```

#### To use Google Maps as your basemap:
```bash
# With npm
npm install @vue-deckgl-suite/layers @vue-deckgl-suite/google-maps

# Or with yarn
yarn add @vue-deckgl-suite/layers @vue-deckgl-suite/google-maps

# Or with pnpm
pnpm add @vue-deckgl-suite/layers @vue-deckgl-suite/google-maps
```

### 2. Install Peer Dependencies
The packages rely on peer dependencies. Install the following:
```bash
npm install @deck.gl/core @deck.gl/layers @deck.gl/geo-layers @deck.gl/aggregation-layers
```
For Mablibre:
```bash
npm install @deck.gl/mapbox
```

For Google Maps:
```bash
npm install @deck.gl/google-maps
```


---

## Documentation

Be sure to check out our full [documentation](https://vue-deckgl-suite.wakeb.tech) for examples, guides, and more details.

---

## Quick Usage

### Example: Declarative Syntax for Layers
With the declarative approach, you can define Deck.gl layers directly as Vue components.

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

### Example: Programmatic Usage
Alternatively, use Deck.gl layers as ES6 class instances:

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

## Framework Features

### Modular Packages
The `@vue-deckgl-suite` consists of 3 main packages:
1. **[`@vue-deckgl-suite/maplibre`](https://vue-deckgl-suite/maplibre)**:
   Provides integration with **MapLibre** for basemaps.
2. **[`@vue-deckgl-suite/google-maps`](https://vue-deckgl-suite/google-maps)**:
   Provides integration with **google** for basemaps.
3. **[`@vue-deckgl-suite/layers`](https://vue-deckgl-suite/layers)**:
   Allows the use of Vue components for Deck.gl layers to simplify layer management.

### Flexible Layer Rendering
With `@vue-deckgl-suite`, you have the option to render layers either:
- Programmatically, suited for dynamically managed visualizations.
- Declaratively, keeping the project aligned with Vue's component-based architecture.

### Scalable for Future Basemaps
Currently supporting **MapLibre** and **Google**, the package is designed for extensibility, with plans to add support for **Mapbox**, **ArcGIS**, and others.

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

Built with ❤️ by [Mostafa Gamal](https://github.com/MostafaGamalSayed)@[**Wakeb**](https://wakeb.tech/).