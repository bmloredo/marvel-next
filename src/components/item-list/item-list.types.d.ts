import { Item } from "@/models";

export interface IItemList {
  list: Item[];
  title: string;
  className?: string;
}
