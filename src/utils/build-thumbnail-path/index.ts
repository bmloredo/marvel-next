import { Thumbnail } from "@/models";

export function buildThumbnailPath({ extension, path }: Thumbnail): string {
  const hasPath = !!path.length;
  const hasExtension = !!extension.length;

  if (!hasPath || !hasExtension) return "";

  return `${path}.${extension}`;
}
