import Image from "next/image";

import { SearchField } from "@/components";
import ironImage from "@/assets/iron-man.png";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center flex-col">
      <section
        data-testid="bg-introduction"
        className="max-w-[520px] w-full bg-[url('../assets/boom.png')] bg-cover bg-center h-[500px] flex items-center justify-center"
      >
        <Image
          width={300}
          height={300}
          src={ironImage}
          alt="Iron Man flying"
          className="animate-[wiggle_3s_ease-in-out_infinite] w-auto h-auto"
        />
      </section>

      <SearchField />
    </main>
  );
}
