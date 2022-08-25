import axios from "axios";
import SingleRoadGoatResponse from "../models/SingleRoadGoatResponse";

export const getCityInfoById = async (
  id: string
): Promise<SingleRoadGoatResponse> => {
  return (
    await axios.get(`https://api.roadgoat.com/api/v2/destinations/${id}`, {
      headers: {
        authorization:
          "Basic ODdlMzAxNDE4MjIxZTc1NzcyNmVhNzNlZmY0NjUzMjU6OGVjNGIwNGI2ZTU4YWY4NDhhMjNjNTI3ODk0NDU1MTM=",
      },
    })
  ).data;
};
