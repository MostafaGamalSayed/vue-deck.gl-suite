# Introduction

The **`@vue-deckgl-suite`** monorepo is built to provide a seamless integration of **Deck.gl** and **Vue-based applications**, enabling the development of high-performance geospatial visualizations with ease. It consists of a series of modular packages that work together to support various basemaps and visualization use cases.

## Overview of Packages

### `@vue-deckgl-suite/maplibre`
This package provides two core components:
1. **`Map`**: A Map component for **MapLibre GL**, a powerful and customizable open-source basemap provider.
2. **`DeckGL`**: An overlay component that facilitates rendering of **Deck.gl** visualization layers on top of the MapLibre map.

Developers using only the **`@vue-deckgl-suite/maplibre`** package can define Deck.gl layers as **ES6 class instances** and pass them to the `layers` prop of the `DeckGL` component. This is the default behavior and requires familiarity with the Deck.gl API.

---
### `@vue-deckgl-suite/google-maps`
This package provides two core components:
1. **`Map`**: A Map component for **Google Maps** basemap provider.
2. **`DeckGL`**: An overlay component that facilitates rendering of **Deck.gl** visualization layers on top of the Google map.

Developers using only the **`@vue-deckgl-suite/google-maps`** package can define Deck.gl layers as **ES6 class instances** and pass them to the `layers` prop of the `DeckGL` component. This is the default behavior and requires familiarity with the Deck.gl API.

---

### `@vue-deckgl-suite/layers`
The **`@vue-deckgl-suite/layers`** package builds upon the `@vue-deckgl-suite/maplibre` and `@vue-deckgl-suite/google-maps` packages by introducing declarative support for creating Deck.gl layers using Vue components. This package allows developers to define Deck.gl layers as **Vue child components**, nested inside the `DeckGL` overlay. This declarative syntax streamlines development by aligning with Vue's component-based architecture.


## Usage Scenarios

Depending on the combination of packages used, you have two options for defining and rendering Deck.gl layers.

### 1. Using Only `@vue-deckgl-suite/maplibre` OR `@vue-deckgl-suite/google-maps`
In this case, you will use the **`DeckGL` component** as an overlay for MapLibre and provide all Deck.gl layers as **ES6 class instances** to the `layers` prop. Example:

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

This approach ensures full flexibility for programmatically managing Deck.gl layers and is suitable when only using `@vue-deckgl-suite/maplibre`.


### 2. Integrate on of the 2 packages: `@vue-deckgl-suite/maplibre` or `@vue-deckgl-suite/google-maps` with `@vue-deckgl-suite/layers`
When both packages are used, you can utilize **declarative Vue syntax** to define Deck.gl layers as child components of the `DeckGL` overlay. Example:

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

With this approach, the **`@vue-deckgl-suite/layers`** package simplifies configuration by allowing each layer to be treated as a standalone Vue component. Props passed to each component map directly to Deck.gl class attributes.


## Why Choose `@vue-deckgl-suite`?

- **Modular Design**: Use the pieces you need for your project—choose between flexible ES6 instance-based configurations or Vue's declarative syntax.
- **Scalability**: Process and render large geospatial datasets using Deck.gl's WebGL-powered performance features.
- **Future-Proof**: The suite supports MapLibre as a basemap now, with plans to include Google Maps, Mapbox, and others in the future.