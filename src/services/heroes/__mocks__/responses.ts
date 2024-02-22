import { Hero } from "@/models";
import { ResponseHeroes } from "../heroes.service.types";

export const mockResponseListAll: ResponseHeroes = {
  offset: 0,
  limit: 1,
  total: 1,
  count: 1,
  results: [
    {
      id: 1,
      name: "Iron Man",
      description: "Genius, billionaire, playboy, philanthropist",
      modified: "2023-01-01T00:00:00Z",
      thumbnail: { path: "path", extension: "jpg" },
      resourceURI: "resourceURI",
      comics: {
        available: 1,
        collectionURI: "collectionURI",
        items: [],
        returned: 0,
      },
      series: {
        available: 1,
        collectionURI: "collectionURI",
        items: [],
        returned: 0,
      },
      stories: {
        available: 1,
        collectionURI: "collectionURI",
        items: [],
        returned: 0,
      },
      events: {
        available: 1,
        collectionURI: "collectionURI",
        items: [],
        returned: 0,
      },
      urls: [{ type: "type", url: "url" }],
    },
  ],
};

export const mockResponseDetailsById: Hero = {
  id: 1,
  name: "Iron Man",
  description: "Genius, billionaire, playboy, philanthropist",
  modified: "2023-01-01T00:00:00Z",
  thumbnail: { path: "path", extension: "jpg" },
  resourceURI: "resourceURI",
  comics: {
    available: 1,
    collectionURI: "collectionURI",
    items: [],
    returned: 0,
  },
  series: {
    available: 1,
    collectionURI: "collectionURI",
    items: [],
    returned: 0,
  },
  stories: {
    available: 1,
    collectionURI: "collectionURI",
    items: [],
    returned: 0,
  },
  events: {
    available: 1,
    collectionURI: "collectionURI",
    items: [],
    returned: 0,
  },
  urls: [{ type: "type", url: "url" }],
};
