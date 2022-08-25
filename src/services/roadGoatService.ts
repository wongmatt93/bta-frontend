import axios from "axios";
import SingleRoadGoatResponse from "../models/SingleRoadGoatResponse";

const auth: string = process.env.ROADGOAT_AUTH || "";

export const getCityInfoById = async (
  id: string
): Promise<SingleRoadGoatResponse> => {
  return (
    await axios.get(`https://api.roadgoat.com/api/v2/destinations/${id}`, {
      headers: {
        authorization: `Basic ${auth}`,
      },
    })
  ).data;
};
