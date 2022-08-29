import axios from "axios";
import WikipediaResponse from "../models/WikipediaResponse";

export const getWikiSummary = async (
  city: string
): Promise<WikipediaResponse> =>
  (await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${city}`))
    .data;
