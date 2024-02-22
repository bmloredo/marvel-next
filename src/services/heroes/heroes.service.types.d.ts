import { Hero } from "@/models";

export interface ResponseHeroes {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Hero[];
}
