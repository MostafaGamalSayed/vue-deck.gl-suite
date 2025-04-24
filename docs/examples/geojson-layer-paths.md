<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre';
import { GeoJsonLayer } from '@vue-deckgl-suite/layers';
import { scaleLinear, scaleThreshold } from 'd3-scale';
import { onMounted, reactive, ref } from 'vue';
import { load } from '@loaders.gl/core';
import { CSVLoader } from '@loaders.gl/csv';
import 'maplibre-gl/dist/maplibre-gl.css';


// Source data GeoJSON
const DATA_URL = {
  ACCIDENTS:
    'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/highway/accidents.csv',
  ROADS: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/highway/roads.json'
};

const accidents = ref(null)
const year = ref(1990)
const roads = DATA_URL.ROADS

const incidents = reactive({});
const fatalities = reactive({});

const COLOR_SCALE = scaleThreshold()
  .domain([0, 4, 8, 12, 20, 32, 52, 84, 136, 220])
  .range([
    [26, 152, 80],
    [102, 189, 99],
    [166, 217, 106],
    [217, 239, 139],
    [255, 255, 191],
    [254, 224, 139],
    [253, 174, 97],
    [244, 109, 67],
    [215, 48, 39],
    [168, 0, 0]
  ]);

const WIDTH_SCALE = scaleLinear().clamp(true).domain([0, 200]).range([10, 2000]);

function getKey({state, type, id}) {
  return `${state}-${type}-${id}`;
}

function aggregateAccidents(accidents) {
  const incidents = {};
  const fatalities = {};

  if (accidents) {
    for (const a of accidents) {
      const r = (incidents[a.year] = incidents[a.year] || {});
      const f = (fatalities[a.year] = fatalities[a.year] || {});
      const key = getKey(a);
      r[key] = a.incidents;
      f[key] = a.fatalities;
    }
  }
  return {incidents, fatalities};
}

function renderTooltip({ object, x, y }) {
  if (!object) {
    return null;
  }
  const props = object.properties
  const key = getKey(props);
  const f = fatalities[year.value][key];
  const r = incidents[year.value][key];

  const content = r
    ? `<div>
      <b>${f}</b> people died in <b>${r}</b> crashes on
      ${props.type === 'SR' ? props.state : `${props.type}-${props.id}`} in <b>${year.value}</b>
    </div>`
    : `<div>No accidents recorded in <b>${year.value}</b></div>`

  return {
    html: `
    <div style={{left: x, top: y}}>
      <strong>${props.name} (${props.state})</strong>
      <br/>
      ${content}
    </div>
  `,
    style: {
      pointerEvents: 'auto', // Allow the tooltip to "stay under" the pointer
      position: 'absolute',
      zIndex: 9,
      fontSize: '12px',
      padding: '8px',
      background: '#000',
      color: '#fff',
      minWidth: '160px',
      maxHeight: '240px',
      overflowY: 'hidden'
    }
  }
}


onMounted(async () => {
  accidents.value = (await load(DATA_URL.ACCIDENTS, CSVLoader)).data;
  const { incidents: incidentsData, fatalities: fatalitiesData } = aggregateAccidents(accidents.value);
  incidents[year.value] = incidentsData[year.value] || {};
  fatalities[year.value] = fatalitiesData[year.value] || {};

  console.log(
    incidents[year.value],
    fatalities[year.value])
})
</script>

# Highway Safety in the US
Fatal accidents on U.S. highways (1990 - 2015).

**Data source**: [National Highway Traffic Safty Administration](https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars)  
**No. of Paths**: 126.0K  
**No. of Vertices**: 404.9K

<ClientOnly>
  <DeckGL :get-tooltip="renderTooltip">
    <Map
      height="400px"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[-100, 38]"
      :zoom="3"
      :minZoom="2"
      :max-zoom="8"
    />
    <GeoJsonLayer
      id="geojson"
      :data="roads"
      :lineWidthMinPixels="0.5"
      :getLineColor="(f) => {
        if (!fatalities[year]) {
          return [200, 200, 200];
        }
        const key = getKey(f.properties);
        const fatalitiesPer1KMile = ((fatalities[year]?.[key] || 0) / f.properties.length) * 1000;
        return COLOR_SCALE(fatalitiesPer1KMile);
      }"
      :getLineWidth="(f) => {
        if (!incidents[year]) {
          return 10;
        }
        const key = getKey(f.properties);
        const incidentsPer1KMile = ((incidents[year]?.[key] || 0) / f.properties.length) * 1000;
        return WIDTH_SCALE(incidentsPer1KMile);
      }"
      :pickable="true"
      :transitions="{
        getLineColor: 1000,
        getLineWidth: 1000
      }"
    />
  </DeckGL>
</ClientOnly>

```vue
<script setup>
  import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
  import { GeoJsonLayer } from '@vue-deckgl-suite/layers'
  import { scaleLinear, scaleThreshold } from 'd3-scale'
  import { onMounted, reactive, ref } from 'vue'
  import { load } from '@loaders.gl/core'
  import { CSVLoader } from '@loaders.gl/csv'

  // Source data GeoJSON
  const DATA_URL = {
    ACCIDENTS:
      'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/highway/accidents.csv',
    ROADS: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/highway/roads.json',
  }

  const accidents = ref(null)
  const year = ref(1990)
  const roads = DATA_URL.ROADS

  const incidents = reactive({})
  const fatalities = reactive({})

  const COLOR_SCALE = scaleThreshold()
    .domain([0, 4, 8, 12, 20, 32, 52, 84, 136, 220])
    .range([
      [26, 152, 80],
      [102, 189, 99],
      [166, 217, 106],
      [217, 239, 139],
      [255, 255, 191],
      [254, 224, 139],
      [253, 174, 97],
      [244, 109, 67],
      [215, 48, 39],
      [168, 0, 0],
    ])

  const WIDTH_SCALE = scaleLinear().clamp(true).domain([0, 200]).range([10, 2000])

  function getKey({ state, type, id }) {
    return `${state}-${type}-${id}`
  }

  function aggregateAccidents(accidents) {
    const incidents = {}
    const fatalities = {}

    if (accidents) {
      for (const a of accidents) {
        const r = (incidents[a.year] = incidents[a.year] || {})
        const f = (fatalities[a.year] = fatalities[a.year] || {})
        const key = getKey(a)
        r[key] = a.incidents
        f[key] = a.fatalities
      }
    }
    return { incidents, fatalities }
  }

  function renderTooltip({ object, x, y }) {
    if (!object) {
      return null
    }
    const props = object.properties
    const key = getKey(props)
    const f = fatalities[year.value][key]
    const r = incidents[year.value][key]

    const content = r
      ? `<div>
      <b>${f}</b> people died in <b>${r}</b> crashes on
      ${props.type === 'SR' ? props.state : `${props.type}-${props.id}`} in <b>${year.value}</b>
    </div>`
      : `<div>No accidents recorded in <b>${year.value}</b></div>`

    return {
      html: `
    <div style={{left: x, top: y}}>
      <strong>${props.name} (${props.state})</strong>
      <br/>
      ${content}
    </div>
  `,
      style: {
        pointerEvents: 'auto', // Allow the tooltip to "stay under" the pointer
        position: 'absolute',
        zIndex: 9,
        fontSize: '12px',
        padding: '8px',
        background: '#000',
        color: '#fff',
        minWidth: '160px',
        maxHeight: '240px',
        overflowY: 'hidden',
      },
    }
  }

  onMounted(async () => {
    accidents.value = (await load(DATA_URL.ACCIDENTS, CSVLoader)).data
    const { incidents: incidentsData, fatalities: fatalitiesData } = aggregateAccidents(
      accidents.value,
    )
    incidents[year.value] = incidentsData[year.value] || {}
    fatalities[year.value] = fatalitiesData[year.value] || {}

    console.log(incidents[year.value], fatalities[year.value])
  })
</script>

<template>
  <DeckGL :get-tooltip="renderTooltip">
    <Map
      height="100vh"
      :style="`https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json`"
      :center="[-100, 38]"
      :zoom="4"
      :minZoom="2"
      :max-zoom="8"
    />
    <GeoJsonLayer
      id="geojson"
      :data="roads"
      :lineWidthMinPixels="0.5"
      :getLineColor="
        (f) => {
          if (!fatalities[year]) {
            return [200, 200, 200]
          }
          const key = getKey(f.properties)
          const fatalitiesPer1KMile = ((fatalities[year]?.[key] || 0) / f.properties.length) * 1000
          return COLOR_SCALE(fatalitiesPer1KMile)
        }
      "
      :getLineWidth="
        (f) => {
          if (!incidents[year]) {
            return 10
          }
          const key = getKey(f.properties)
          const incidentsPer1KMile = ((incidents[year]?.[key] || 0) / f.properties.length) * 1000
          return WIDTH_SCALE(incidentsPer1KMile)
        }
      "
      :pickable="true"
      :transitions="{
        getLineColor: 1000,
        getLineWidth: 1000,
      }"
    />
  </DeckGL>
</template>

<style lang="scss">
  @import 'maplibre-gl/dist/maplibre-gl.css';
</style>

```