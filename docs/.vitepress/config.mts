import { type DefaultTheme, defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@VueDeckglSuite",
  description: "A vue wrapper for Deck.gl.",
  cleanUrls: true,
  themeConfig: {
    logo: {
      light: '/wakeb-logo-light-mode.png',
      dark: '/wakeb-logo-dark-mode.png'
    },
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Guide',
        collapsed: false,
        items: [
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
        text: '@vue-geo-suite/layers',
        collapsed: false,
        link: '/layers/',
        items: sidebarLayers()
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MostafaGamalSayed/vue-deck.gl-suite' }
    ]
  }
})

function sidebarMaplibre(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Maplibre Basemap', link: '/maplibre/maplibre-basemap' },
    { text: 'Mapbox Overlay', link: '/maplibre/mapbox-overlay' },
  ]
}

function sidebarLayers(): DefaultTheme.SidebarItem[] {
  return [
    { text: 'Arc Layer', link: '/layers/arc-layer' },
    { text: 'GeoJson Layer', link: '/layers/geojson-layer' },
    { text: 'Heatmap Layer', link: '/layers/heatmap-layer/' },
    { text: 'WMS Layer', link: '/layers/wms-layer/' },
    { text: 'Hexagon Layer', link: '/layers/hexagon-layer/' },
    { text: 'Grid Layer', link: '/layers/grid-layer/' },
    { text: 'Path Layer', link: '/layers/path-layer/' },
    { text: 'Trips Layer', link: '/layers/trips-layer/' },
  ]
}
