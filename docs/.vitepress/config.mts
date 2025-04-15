import { createRequire } from 'module'
import { type DefaultTheme, defineConfig, loadEnv } from 'vitepress'

// @ts-ignore
const require = createRequire(import.meta.url)
const pkg = require('../../package.json')

const env = loadEnv('', process.cwd(), '')


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@VueDeckglSuite",
  description: "A vue wrapper for Deck.gl.",
  cleanUrls: true,
  ignoreDeadLinks: true,
  appearance: 'dark',
  themeConfig: {
    logo: {
      light: '/wakeb-logo-light-mode.png',
      dark: '/wakeb-logo-dark-mode.png'
    },
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples' },
      {
        text: `v${pkg.version}`,
        items: [
          { text: 'Changelog', link: 'https://github.com/MostafaGamalSayed/vue-deck.gl-suite/blob/master/CHANGELOG.md#v100-beta2---2025-12-04' },
        ]
      },
    ],

    sidebar: [
      {
        text: 'Guide',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Installation', link: '/guide/installation' },
        ]
      },
      {
        text: '@vue-geo-suite/maplibre',
        collapsed: false,
        link: '/maplibre/',
        items: sidebarMaplibre()
      },
      {
        text: '@vue-geo-suite/google',
        collapsed: false,
        link: '/google-maps/',
        items: sidebarGoogleMaps()
      },
      {
        text: '@vue-geo-suite/layers',
        collapsed: false,
        link: '/layers/',
        items: sidebarLayers()
      }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright (c) 2025 Mostafa Gamal - Wakeb'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MostafaGamalSayed/vue-deck.gl-suite' }
    ]
  },
  vite: {
    define: {
      __GOOGLE_MAPS_KEY__: JSON.stringify(env),
    },
  }


})

function sidebarMaplibre(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Map', link: '/maplibre/maplibre-basemap' },
    { text: 'DeckGL', link: '/maplibre/mapbox-overlay' },
  ]
}

function sidebarGoogleMaps(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Map', link: '/google-maps/google-basemap' },
    { text: 'DeckGL', link: '/google-maps/google-overlay' },
  ]
}

function sidebarLayers(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Arc Layer', link: '/layers/arc-layer' },
    { text: 'GeoJson Layer', link: '/layers/geojson-layer' },
    { text: 'Hexagon Layer', link: '/layers/hexagon-layer' },
    { text: 'Grid Layer', link: '/layers/grid-layer' },
    { text: 'Column Layer', link: '/layers/column-layer' },
    { text: 'Path Layer', link: '/layers/path-layer' },
    { text: 'Trips Layer', link: '/layers/trips-layer' },
    { text: 'Icon Layer', link: '/layers/icon-layer' },
    { text: 'Point Cloud Layer', link: '/layers/point-cloud-layer' },
    { text: 'WMS Layer', link: '/layers/wms-layer' },
  ]
}
