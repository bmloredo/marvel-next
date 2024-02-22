import Image from "next/image";

import { ContentTypeEnum } from "@/enums";
import { HeroesService } from "@/services";
import { buildThumbnailPath } from "@/utils";
import { CountContentCol, ItemList } from "@/components";

import { PageTypes } from "./page-types";

async function getHeroById(id: string) {
  const heroesService = new HeroesService();

  return await heroesService.detailsById(id);
}

const DetailsPage: ({
  params: { name, id },
}: PageTypes) => Promise<JSX.Element> = async (props) => {
  const { id, name } = props.params;

  const hero = await getHeroById(id);

  const thumbnail = buildThumbnailPath(hero.thumbnail);
  const description = hero.description || "No description";
  const qtyComics = hero.comics.available;
  const qtyEvents = hero.events.available;
  const qtySeries = hero.series.available;
  const qtyStories = hero.stories.available;

  const hasContentAvailable =
    !!qtyComics || !!qtyEvents || !!qtySeries || !!qtyStories;

  return (
    <section>
      <header className="flex items-center justify-between">
        <h1>You searched for: {name}</h1>
      </header>

      <div className="mt-6 mb-16 p-2 rounded-lg bg-slate-800 flex flex-col sm:flex-row gap-3">
        <Image
          width={320}
          height={420}
          src={thumbnail}
          className="mx-auto h-auto w-auto"
          alt={`Imagem do ${hero.name}`}
        />

        <div className="flex flex-col gap-4 px-4 flex-1">
          <h2 className="text-center text-2xl font-bold">{hero.name}</h2>

          <p>
            <span className="text-red-500">Desription:</span> {description}
          </p>

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
        </div>
      </div>

      {hasContentAvailable && (
        <div className="mt-6 mb-16 p-2 rounded-lg bg-slate-800 flex flex-col sm:flex-row justify-between gap-4">
          <ItemList
            list={hero.stories.items}
            className="text-red-500"
            title={ContentTypeEnum.Stories}
          />

          <ItemList
            list={hero.events.items}
            className="text-green-500"
            title={ContentTypeEnum.Events}
          />

          <ItemList
            list={hero.comics.items}
            className="text-blue-500"
            title={ContentTypeEnum.Comics}
          />

          <ItemList
            list={hero.series.items}
            className="text-yellow-500"
            title={ContentTypeEnum.Series}
          />
        </div>
      )}
    </section>
  );
};

export default DetailsPage;
