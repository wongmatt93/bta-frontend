import axios from "axios";
import MultipleYelpResponse from "../models/MultipleYelpResponse";

export const getBusinessesByLocation = async (
  location: string
): Promise<MultipleYelpResponse> => {
  return (
    await axios.get("https://api.yelp.com/v3/businesses/search", {
      params: { location },
      headers: {
        Authorization:
          "Bearer x5gb7ZfkYZDuM44f5DJ32ks3agOi6N41vekiyqoOONkmjGFAp-hHhYhOhPTgXrZJ7ltZN1wQdFFNKk5TDZHMlYceU3jVJ_ORw3HiBTnIlxIEDzieSTwJhiVAM-MDY3Yx",
      },
    })
  ).data;
};
