<script setup>
import { DeckGL, Map } from '@vue-deckgl-suite/maplibre'
import { GeoJsonLayer } from '@vue-deckgl-suite/layers'
import { scaleLinear, scaleThreshold } from 'd3-scale'
import { onMounted, reactive, ref } from 'vue'
import { load } from '@loaders.gl/core'
import { CSVLoader } from '@loaders.gl/csv'
import 'maplibre-gl/dist/maplibre-gl.css'


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
      color: '#777',
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

<ClientOnly>
<p>Fatalities per 1,000 miles:</p>
<div style="display: flex; justify-content: space-between; width: 500px; margin: 20px 0;">
  <div style="background: rgb(102, 189, 99); flex: 1; height: 12px; position: relative;">
    <span style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); font-size: 10px; color: #777;">0</span>
  </div>
  <div style="background: rgb(166, 217, 106); flex: 1; height: 12px; position: relative;">
    <span style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); font-size: 10px; color: #777;">4</span>
  </div>
  <div style="background: rgb(217, 239, 139); flex: 1; height: 12px; position: relative;">
    <span style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); font-size: 10px; color: #777;">18</span>
  </div>
  <div style="background: rgb(255, 255, 191); flex: 1; height: 12px; position: relative;">
    <span style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); font-size: 10px; color: #777;">12</span>
  </div>
  <div style="background: rgb(254, 224, 139); flex: 1; height: 12px; position: relative;">
    <span style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); font-size: 10px; color: #777;">20</span>
  </div>
  <div style="background: rgb(253, 174, 97); flex: 1; height: 12px; position: relative;">
    <span style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); font-size: 10px; color: #777;">32</span>
  </div>
  <div style="background: rgb(244, 109, 67); flex: 1; height: 12px; position: relative;">
    <span style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); font-size: 10px; color: #777;">52</span>
  </div>
  <div style="background: rgb(215, 48, 39); flex: 1; height: 12px; position: relative;">
    <span style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); font-size: 10px; color: #777;">84</span>
  </div>
  <div style="background: rgb(168, 0, 0); flex: 1; height: 12px; position: relative;">
    <span style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); font-size: 10px; color: #777;">136</span>
  </div>
</div>
</ClientOnly>

<ClientOnly>
  <div style="margin-top: 30px; margin-bottom: 20px;">
    <div style="display: flex; justify-content: space-between; align-items: center; width: 400px;">
        <div style="text-align: center;">
            <div style="font-size: 36px; font-weight: bold;">126.0K</div>
            <div style="font-size: 14px; color: #777; margin-top: 5px;">No. of Paths</div>
        </div>
        <div style="text-align: center;">
            <div style="font-size: 36px; font-weight: bold;">404.9K</div>
            <div style="font-size: 14px; color: #777; margin-top: 5px;">No. of Vertices</div>
        </div>
    </div>
    <div style="margin-top: 20px; font-size: 14px; color: #555;">
      Data source: 
      <a href="https://www.nhtsa.gov/research-data/fatality-analysis-reporting-system-fars" 
         target="_blank" 
         style="color: #007bff; text-decoration: none;">
        National Highway Traffic Safety Administration
      </a>
    </div>
  </div>
</ClientOnly>

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
        color: '#777',
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