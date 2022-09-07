import axios from "axios";
import MultipleAmadeusResponse from "../models/MultipleAmadeusResponse";

let token: string | null = null;
const id: string = process.env.REACT_APP_AMADEUS_ID || "";
const secret: string = process.env.REACT_APP_AMADEUS_SECRET || "";

const getAccessToken = async (): Promise<void> => {
  if (!token) {
    token = (
      await axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        `grant_type=client_credentials&client_id=${id}&client_secret=${secret}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
    ).data.access_token;
  }
};

export const getHotelsByCity = async (
  latitude: number,
  longitude: number
): Promise<MultipleAmadeusResponse> => {
  await getAccessToken();
  return (
    await axios.get(
      "https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-geocode",
      {
        params: { latitude, longitude, ratings: "1,2,3" },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  ).data;
};

export const getFlightsToDestination = async (
  originLocationCode: string,
  destinationLocationCode: string,
  departureDate: string,
  adults: number
) => {
  return await axios.get(
    "https://test.api.amadeus.com/v2/shopping/flight-offers",
    {
      params: {
        originLocationCode,
        destinationLocationCode,
        departureDate,
        adults,
        max: 15,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
