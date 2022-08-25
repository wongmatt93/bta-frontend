import axios from "axios";
import MultipleYelpResponse from "../models/MultipleYelpResponse";

const key: string = process.env.YELP_API_KEY || "";

export const getBusinessesByLocation = async (
  location: string
): Promise<MultipleYelpResponse> => {
  return (
    await axios.get("https://api.yelp.com/v3/businesses/search", {
      params: { location },
      headers: {
        Authorization: `Bearer ${key}`,
      },
    })
  ).data;
};
