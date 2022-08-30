interface Distance {
  unit: string;
  value: number;
}

interface Location {
  latitude: number;
  longitude: number;
}

export default interface Hotel {
  name: string;
  rating: number;
  hotelId: string;
  distace: Distance;
  geoCode: Location;
}
