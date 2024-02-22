import Link from "next/link";
import Image from "next/image";

import logoSrc from "@/assets/logo.png";
import { SearchField } from "@/components";

import { ButtonBackPage } from "./components/button-back-page";

export const Header = () => (
  <header className="flex items-center justify-between flex-col sm:flex-row gap-2">
    <Link href="/" data-testid="logo-element">
      <Image
        priority
        width={250}
        src={logoSrc}
        alt="Official logo of Marvel Studios"
      />
    </Link>

    <SearchField />

    <ButtonBackPage />
  </header>
);
