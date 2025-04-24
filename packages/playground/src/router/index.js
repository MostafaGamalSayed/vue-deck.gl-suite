import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/arc-layer',
      name: 'arc-layer',
      component: () => import('../views/ArcLayer.vue'),
    },
    {
      path: '/point-cloud-layer',
      name: 'point-cloud-layer',
      component: () => import('../views/PointCloudLayer.vue'),
    },
    {
      path: '/column-layer',
      name: 'column-layer',
      component: () => import('../views/ColumnLayer.vue'),
    },
    {
      path: '/maplibre-map',
      name: 'maplibre-map',
      component: () => import('../views/MaplibreMap.vue'),
    },
    {
      path: '/maplibre/tiles3d-layer',
      name: 'maplibre-tiles3d-layer',
      component: () => import('../views/maplibre/Tile3dLayer.vue'),
    },
    {
      path: '/maplibre/trips-layer',
      name: 'maplibre-trips-layer',
      component: () => import('../views/maplibre/TripsLayer.vue'),
    },
    {
      path: '/maplibre/path-layer',
      name: 'maplibre-path-layer',
      component: () => import('../views/maplibre/PathLayer.vue'),
    },
    {
      path: '/maplibre/wms-layer',
      name: 'maplibre-wms-layer',
      component: () => import('../views/maplibre/WMSLayer.vue'),
    },
    {
      path: '/maplibre/heatmap-layer',
      name: 'maplibre-heatmap-layer',
      component: () => import('../views/maplibre/HeatmapLayer.vue'),
    },
    {
      path: '/maplibre/beta-heatmap-layer',
      name: 'maplibre-beta-heatmap-layer',
      component: () => import('../views/maplibre/BetaHeatmapLayer.vue'),
    },
    {
      path: '/maplibre/geojson-layer',
      name: 'maplibre-geojson-layer',
      component: () => import('../views/maplibre/GeojsonLayer.vue'),
    },
    {
      path: '/maplibre/hexagon-layer',
      name: 'maplibre-hexagon-layer',
      component: () => import('../views/maplibre/HexagonLayer.vue'),
    },
    {
      path: '/google/hexagon-layer',
      name: 'google-hexagon-layer',
      component: () => import('../views/google/HexagonLayer.vue'),
    },
    {
      path: '/maplibre/road-safety',
      name: 'maplibre-road-safety',
      component: () => import('../views/maplibre/HexagonLayerRoadSafety.vue'),
    },

    {
      path: '/maplibre/icon-layer',
      name: 'maplibre-icon-layer',
      component: () => import('../views/maplibre/IconLayer.vue'),
    },
    {
      path: '/maplibre/arc-layer',
      name: 'maplibre-arc-layer',
      component: () => import('../views/maplibre/ArcLayer.vue'),
    },
    {
      path: '/maplibre/grid-layer',
      name: 'maplibre-grid-layer',
      component: () => import('../views/maplibre/GridLayer.vue'),
    },
    {
      path: '/maplibre/column-layer',
      name: 'maplibre-column-layer',
      component: () => import('../views/maplibre/ColumnLayer.vue'),
    },
    {
      path: '/maplibre/point-cloud-layer',
      name: 'maplibre-point-cloud-layer',
      component: () => import('../views/maplibre/PointCloudLayer.vue'),
    },

    {
      path: '/maplibre/polygon-layer',
      name: 'maplibre-polygon-layer',
      component: () => import('../views/maplibre/PolygonLayer.vue'),
    },

    {
      path: '/maplibre/scatterplot-layer',
      name: 'maplibre-scatterplot-layer',
      component: () => import('../views/maplibre/ScatterplotLayer.vue'),
    },
    {
      path: '/maplibre/contour-layer',
      name: 'maplibre-contour-layer',
      component: () => import('../views/maplibre/ContourLayer.vue'),
    },
    {
      path: '/google/basemap',
      name: 'google-basemap',
      component: () => import('../views/google/GoogleMap.vue'),
    },

    {
      path: '/maplibre/geojson-layer-paths',
      name: 'maplibre-geojson-layer-paths',
      component: () => import('../views/maplibre/GeojsonLayerPaths.vue'),
    },

    {
      path: '/maplibre/arc-layer-migration',
      name: 'maplibre-arc-layer-migration',
      component: () => import('../views/maplibre/ArcLayerMigration.vue')
    }
  ],
})

export default router
