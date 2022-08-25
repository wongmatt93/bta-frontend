import axios from "axios";
const baseURL: string = "http://localhost:5001";
export const searchYelp = async (location: string): Promise<any> => {
  return (
    await axios.get(baseURL, {
      params: { location },
    })
  ).data;
};
