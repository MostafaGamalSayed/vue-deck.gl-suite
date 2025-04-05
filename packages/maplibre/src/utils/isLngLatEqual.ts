import { type LngLatLike } from 'maplibre-gl'
import pkg from 'maplibre-gl';
const { LngLat } = pkg;

export function isLngLatEqual(one: LngLatLike, two: LngLatLike): boolean {
  const firstPosition = LngLat.convert(one)
  const secondPosition = LngLat.convert(two)

  return firstPosition.lng === secondPosition.lng && firstPosition.lat === secondPosition.lat
}
