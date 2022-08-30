import axios from "axios";
import MultipleYelpResponse from "../models/MultipleYelpResponse";
const baseURL: string = process.env.REACT_APP_API_KEY || "";
export const searchYelp = async (
  location: string
): Promise<MultipleYelpResponse> => {
  return (
    await axios.get(`${baseURL}/yelp`, {
      params: { location },
    })
  ).data;
};
