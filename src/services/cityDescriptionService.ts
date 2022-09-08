import axios from "axios";
import CityDescription from "../models/CityDescriptions";

const baseURL: string = process.env.REACT_APP_API_KEY || "";

export const getAllCityDescriptions = async (): Promise<CityDescription[]> =>
  (await axios.get(`${baseURL}/city_descriptions`)).data;

export const getCityByName = async (name: string): Promise<CityDescription> =>
  (await axios.get(`${baseURL}/city_descriptions/${name}`)).data;
