"use client";

import { SearchIcon } from "lucide-react";
import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";

export const SearchField = () => {
  const navigation = useRouter();
  const fieldSearchRef = useRef<HTMLInputElement | null>(null);

  function onSubmitHero(event: FormEvent) {
    event.preventDefault();

    const heroName = fieldSearchRef.current?.value;

    if (heroName) {
      navigation.push(`/search/${heroName}`);
    }
  }

  return (
    <form
      onSubmit={onSubmitHero}
      data-testid="field-search-element"
      className="flex items-center justify-between max-w-[320px] w-full bg-white rounded-lg h-12 px-4"
    >
      <input
        type="text"
        ref={fieldSearchRef}
        placeholder="Search hero..."
        className="h-full outline-none border-none flex-1  placeholder:text-slate-500 text-slate-800"
      />

      <button aria-label="Button to do the search">
        <SearchIcon className="text-slate-500" />
      </button>
    </form>
  );
};
