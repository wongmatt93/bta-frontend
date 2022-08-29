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

export default interface MultipleRoadGoatResponse {
  data: RoadGoatCity[];
  included: Item[];
}
