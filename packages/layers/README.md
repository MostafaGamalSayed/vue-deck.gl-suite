# @vue-deckgl-suite/layers

The `@vue-deckgl-suite/layers` package builds upon the capabilities of the `@vue-deckgl-suite/maplibre` package by introducing **declarative Vue components** for defining and rendering **Deck.gl** layers. This approach simplifies the process of adding complex geospatial visualizations to your Vue applications, aligning closely with Vue's component-based architecture.

## Overview

This package allows developers to define Deck.gl layers as Vue child components inside the `DeckGL` overlay. Each layer is treated as a standalone Vue component with props that map directly to the corresponding Deck.gl layer attributes.

## Example Usage

The following example demonstrates how to declare and configure a layer using **`@vue-deckgl-suite/layers`**. This approach uses Vue's declarative syntax, making it easier to manage complex layer configurations.

```vue
<template>
  <DeckGL>
    <Map
      center="[-122.4, 37.74]"
      :zoom="11"
      style="width: 100%; height: 100%;"
    />
    <ScatterplotLayer
      id="scatterplot-layer"
      :data="'data-url.json'"
      :getPosition="(d) => d.coordinates"
      :getRadius="10"
      :getColor="[255, 0, 0]"
    />
  </DeckGL>
</template>
```

## Key Features

- **Declarative Syntax**: Define Deck.gl layers directly as Vue components.
- **Streamlined Configuration**: Simplified props for easy layer customization.
- **Vue Integration**: Fully supports Vue's reactivity and lifecycle hooks.

### Supported Layers

The `@vue-deckgl-suite/layers` package provides Vue components for the following Deck.gl layers:

- `ScatterplotLayer`
- `ArcLayer`
- `ColumnLayer`
- `PointCloudLayer`
- And more...

Each of these components is designed to be a one-to-one mapping with its corresponding Deck.gl layer class.

## When to Use

### 1. With `@vue-deckgl-suite/maplibre`
Combine both packages to create geospatial visualizations using Vue's declarative syntax. Layers can be nested as child components of `DeckGL`.

### 2. Without `@vue-deckgl-suite/maplibre`
The package can also be used independently with other basemaps or frameworks, as long as Deck.gl is integrated into your project.

---

For more information about available layers, supported basemaps, and future integrations, refer to the full documentation of the **`@vue-deckgl-suite/layers`** package.