# Installation


## Introduction
The `@vue-deckgl-suite` is a monorepo containing packages for integrating **Deck.gl** with Vue 3. It provides essential layers (`@vue-deckgl-suite/layers`) and base map integration through a separate basemap provider package, such as `@vue-deckgl-suite/maplibre`. In the future, support for **Google Maps**, **Mapbox**, or **ArcGIS** will be available to suit your specific basemap provider.
## Prerequisites
Make sure your environment meets the following requirements:
- **Node.js**: >= 18.x
- **npm**: >= 9.x (or use **Yarn** or **pnpm**)

## Installation Steps
### 1. Install Base Packages
First, install the core packages needed for your project. Use `npm`, `yarn`, or `pnpm`:
``` bash
npm install @vue-deckgl-suite/layers @vue-deckgl-suite/maplibre
```
or with Yarn:
``` bash
yarn add @vue-deckgl-suite/layers @vue-deckgl-suite/maplibre
```
or with pnpm:
``` bash
pnpm add @vue-deckgl-suite/layers @vue-deckgl-suite/maplibre
```
### 2. Install Peer Dependencies
Both packages rely on peer dependencies. Before proceeding, install the following dependencies:
For `@vue-deckgl-suite/layers`:
``` bash
npm install vue @deck.gl/core @deck.gl/layers @deck.gl/geo-layers @deck.gl/aggregation-layers
```
For `@vue-deckgl-suite/maplibre`:
``` bash
npm install vue @deck.gl/core @deck.gl/mapbox maplibre-gl
```
> **Note**: Depending on your basemap provider, replace `maplibre-gl` and `@deck.gl/mapbox` with corresponding dependencies when other basemap packages (e.g., Google Maps, Mapbox, or ArcGIS) are supported in the future.
>

### 3. Quick Usage
After installation, import and use the components and basemap provider in your Vue project:
#### Example: Using a Layer with MapLibre
``` javascript
// main.ts or main.js
import { createApp } from 'vue';
import App from './App.vue';
import { Map } from '@vue-deckgl-suite/maplibre';
import { ArcLayer } from '@vue-deckgl-suite/layers';

const app = createApp(App);

// Register components
app.component('MaplibreMap', Map);
app.component('ArcLayer', ArcLayer);

app.mount('#app');
```
#### Local Registration in a Vue Component:
``` javascript
<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { GeoJsonLayer } from '@vue-deckgl-suite/layers';
</script>

<template>
    <DeckGL>
        <map />
        <geo-json-layer />
    </DeckGL>
</template>

```
Add CSS
```scss
@import 'maplibre-gl/dist/maplibre-gl.css';

```
## Notes
- To switch to a different basemap provider in the future (e.g., Google Maps, Mapbox, or ArcGIS), you will need to install the corresponding provider package instead of `@vue-deckgl-suite/maplibre` and update its dependencies.
