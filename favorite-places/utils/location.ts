import { LatLng } from '../models/place';

const GOOGLE_API_KEY = 'AIzaSyALnaDumdA0fxG1rGJL7WOBNM32ofEAaD4';

const API_URL = 'https://maps.googleapis.com/maps/api/staticmap';
export function getMapPreview({ lat, lng }: LatLng) {
  const imagePreview = `${API_URL}?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
  &markers=color:red%7Clabel:S%7C${lat},${lng}
  &key=${GOOGLE_API_KEY}`;

  return imagePreview;
}
