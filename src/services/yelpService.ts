import axios from "axios";
const baseURL: string = process.env.REACT_APP_API_KEY || "";
export const searchYelp = async (location: string): Promise<any> => {
  return (
    await axios.get(`${baseURL}/yelp`, {
      params: { location },
    })
  ).data;
};
