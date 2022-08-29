import axios from "axios";
import { City } from "../models/City";

const auth: string = process.env.REACT_APP_CITY_API_KEY || "";

export const getCitiesByCountry = async (country: string): Promise<City[]> => {
  return (
    await axios.get(`https://api.api-ninjas.com/v1/city`, {
      params: { country, limit: 30 },
      headers: {
        "X-API-Key": auth,
      },
    })
  ).data;
};
