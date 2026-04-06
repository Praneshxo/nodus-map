export const INDIA_BOUNDS = {
  // Approximate latitude & longitude boundaries for the whole of India
  maxLat: 36.5, // Top latitude (North)
  minLat: 6.7,  // Bottom latitude (South)
  minLng: 68.1, // Left longitude (West)
  maxLng: 97.4  // Right longitude (East)
};

/**
 * Converts real geographical latitude and longitude to absolute X and Y percentages.
 * This perfectly places companies on our Figma-like canvas using the boundary formula.
 *
 * @param lat - Real Latitude
 * @param lng - Real Longitude
 * @returns { x: number, y: number } - X and Y in percentages (0% to 100%)
 */
export function convertLatLngToXY(lat: number, lng: number): { x: number; y: number } {
  const { minLat, maxLat, minLng, maxLng } = INDIA_BOUNDS;

  // Restrict values to not fly off the map
  const clampedLat = Math.max(minLat, Math.min(maxLat, lat));
  const clampedLng = Math.max(minLng, Math.min(maxLng, lng));

  // The formula from the user discussion
  // Assuming mapWidth and mapHeight are visually 100% of the SVG/Image container
  const x = ((clampedLng - minLng) / (maxLng - minLng)) * 100;
  const y = ((maxLat - clampedLat) / (maxLat - minLat)) * 100;

  return { x, y };
}
