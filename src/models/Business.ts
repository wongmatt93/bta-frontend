interface Address {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  display_address: string[];
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Category {
  title: string;
}

export default interface Business {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  url: string;
  review_count: number;
  categories: Category[];
  rating: number;
  coordinates: Coordinates;
  price: string;
  location: Address;
  phone: string;
  distance: number;
}
