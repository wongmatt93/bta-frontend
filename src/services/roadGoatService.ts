import axios from "axios";
import MultipleRoadGoatResponse from "../models/MultipleRoadGoatResponse";

const auth: string = process.env.REACT_APP_ROADGOAT_AUTH || "";

export const getCityInfoByName = async (
  name: string
): Promise<MultipleRoadGoatResponse> => {
  return (
    await axios.get(
      `https://api.roadgoat.com/api/v2/destinations/auto_complete`,
      {
        params: { q: name },
        headers: {
          authorization: `Basic ${auth}`,
        },
      }
    )
  ).data;
};
