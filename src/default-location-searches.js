import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-hyde-park',
    predictionPlace: {
      address: 'Hyde Park, Cincinnati, USA',
      bounds: new LatLngBounds(
        new LatLng(39.152473286,-84.40431131),
        new LatLng(39.122065956,-84.46445)
      ),
    },
  },
  {
    id: 'default-mt-adams',
    predictionPlace: {
      address: 'Mount Adams, Cincinnati, USA',
      bounds: new LatLngBounds(
        new LatLng(39.111980184,-84.491553557),
        new LatLng(39.103180875,-84.503869486)
      ),
    },
  },
  {
    id: 'default-indian-hill',
    predictionPlace: {
      address: 'Indian Hill, Cincinnati, USA',
      bounds: new LatLngBounds(
        new LatLng(39.254021997,-84.292817215),
        new LatLng(39.139958021,-84.378874202)
      ),
    },
  },
  {
    id: 'default-over-the-rhine',
    predictionPlace: {
      address: 'Over-the-Rhine, Cincinnati, USA',
      bounds: new LatLngBounds(
        new LatLng(39.124164,-84.5096492),
        new LatLng(39.1063427,-84.532841012)
      ),
    },
  },
  {
    id: 'default-downtown-cincinnati',
    predictionPlace: {
      address: 'Cincinnati, OH, USA',
      bounds: new LatLngBounds(
        new LatLng(39.1112023,-84.496600145),
        new LatLng(39.092683553,-84.523497592)
      ),
    },
  },
];
export default defaultLocations;
