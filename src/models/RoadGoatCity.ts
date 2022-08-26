interface CovidInfo {
  value: number;
  url: string;
  text: string;
}

interface Covid {
  [key: string]: CovidInfo;
}

interface AdditionalInfo {
  value: number;
  text: string;
  subText: string;
}

interface Safety {
  [key: string]: AdditionalInfo;
}

interface Budget {
  [key: string]: AdditionalInfo;
}

interface Attribute {
  slug: string;
  name: string;
  destination_type: string;
  short_name: string;
  long_name: string;
  population: number;
  latitude: number;
  longitude: number;
  walk_score_url: string;
  budget: Budget;
  safety: Safety;
  covid: Covid;
  average_rating: number;
}

interface Type {
  id: string;
  type: string;
}

interface RelationshipInfo {
  data: Type | Type[];
}

interface Relationship {
  [key: string]: RelationshipInfo;
}

export default interface RoadGoatCity {
  id: string;
  type: string;
  attributes: Attribute;
  relationships: Relationship;
}
