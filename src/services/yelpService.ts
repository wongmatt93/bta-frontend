import axios from "axios";
import MultipleYelpResponse from "../models/MultipleYelpResponse";
const baseURL: string = process.env.REACT_APP_API_KEY || "";
export const searchYelpRestaurants = async (
  location: string
): Promise<MultipleYelpResponse> => {
  return (
    await axios.get(`${baseURL}/yelp/restaurants`, {
      params: { location },
    })
  ).data;
};
export const searchYelpArts = async (
  location: string
): Promise<MultipleYelpResponse> => {
  return (
    await axios.get(`${baseURL}/yelp/arts`, {
      params: { location },
    })
  ).data;
};
export const searchYelpBreakfast = async (
  location: string
): Promise<MultipleYelpResponse> => {
  return (
    await axios.get(`${baseURL}/yelp/breakfast`, {
      params: { location },
    })
  ).data;
};
