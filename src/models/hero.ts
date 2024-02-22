export interface Hero {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Content;
  series: Content;
  stories: Content;
  events: Content;
  urls: Url[];
}

interface Url {
  type: string;
  url: string;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

interface Content {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

export interface Item {
  resourceURI: string;
  name: string;
  type?: string;
}
