import RoadGoatCity from "./RoadGoatCity";

interface Image {
  full: string;
}

interface Icon {
  icon?: string;
  name?: string;
  image?: Image;
}

interface Item {
  id: string;
  type: string;
  attributes: Icon;
}

export default interface SingleRoadGoatResponse {
  data: RoadGoatCity;
  included: Item[];
}
