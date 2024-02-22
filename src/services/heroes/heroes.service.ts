import axios from "axios";

import { Hero } from "@/models/hero";
import { ResponseHeroes } from "./heroes.service.types";

export class HeroesService {
  async listAllByName(name: string): Promise<ResponseHeroes> {
    const { data } = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=8763e21b610e307a25c7a3fe4927030d&hash=8fdd19d079ab0bc3d8a9458ed391f046`
    );

    return data.data;
  }

  async detailsById(id: string): Promise<Hero> {
    const { data } = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=8763e21b610e307a25c7a3fe4927030d&hash=8fdd19d079ab0bc3d8a9458ed391f046`
    );

    return data.data.results[0];
  }
}
