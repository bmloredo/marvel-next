import Link from "next/link";
import Image from "next/image";

import { ContentTypeEnum } from "@/enums";
import { buildThumbnailPath } from "@/utils";
import { CountContentCol } from "@/components";

import { ICardHero } from "./card-hero.types";

export function CardHero({ hero, heroName }: ICardHero) {
  const thumbnail = buildThumbnailPath(hero.thumbnail);

  const qtyComics = hero.comics.available;
  const qtyEvents = hero.events.available;
  const qtySeries = hero.series.available;
  const qtyStories = hero.stories.available;

  return (
    <li className="p-2 rounded-lg bg-slate-800">
      <Link href={`/search/${heroName}/details/${hero.id}`}>
        <div className="w-full h-[200px] bg-red-300 relative">
          <Image
            fill
            src={thumbnail}
            alt={`Imagem do ${hero.name}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <p className="my-4">{hero.name}</p>

        <div className="flex justify-between">
          <CountContentCol
            quantity={qtyStories}
            className="text-red-500"
            title={ContentTypeEnum.Stories}
          />

          <CountContentCol
            quantity={qtyEvents}
            className="text-green-500"
            title={ContentTypeEnum.Events}
          />

          <CountContentCol
            quantity={qtyComics}
            className="text-blue-500"
            title={ContentTypeEnum.Comics}
          />

          <CountContentCol
            quantity={qtySeries}
            className="text-yellow-500"
            title={ContentTypeEnum.Series}
          />
        </div>
      </Link>
    </li>
  );
}
