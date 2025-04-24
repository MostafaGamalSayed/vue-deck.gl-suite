<script setup>
import { Map } from '@vue-deckgl-suite/google-maps'

const center = { lat: 51.47, lng: 0.45 }
const zoom = 11
const GOOGLE_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY
</script>

<template>
  <Map height="100vh" :center="center" :zoom="zoom" :api-key="GOOGLE_KEY" map-type-id="hybrid" />
</template>
