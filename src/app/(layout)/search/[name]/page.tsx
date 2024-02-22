import { HeroesService } from "@/services";
import { CardHero, NotFoundResult } from "@/components";

import { PageTypes } from "./page-types";

async function getHeroesByName(name: string) {
  const heroesService = new HeroesService();

  return await heroesService.listAllByName(name);
}

const SearchHeroPage: ({
  params: { name },
}: PageTypes) => Promise<JSX.Element> = async (props) => {
  const heroName = props.params.name;
  const data = await getHeroesByName(heroName);

  const countHeroesResult = data.total;
  const heroes = data.results;

  if (countHeroesResult === 0) {
    return <NotFoundResult title={`No result by: ${heroName}`} />;
  }

  return (
    <section>
      <header className="flex items-center justify-between">
        <h1>You searched for: {heroName}</h1>

        <span>
          Qty result:{" "}
          <strong className="text-emerald-400">{countHeroesResult}</strong>
        </span>
      </header>

      <div className="mt-6 mb-16">
        <ul className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-y-20 gap-x-14 mt-10 mb-5">
          {heroes.map((hero) => (
            <CardHero key={hero.id} hero={hero} heroName={heroName} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SearchHeroPage;
