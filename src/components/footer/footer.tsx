import Link from "next/link";
import { PhoneCall } from "lucide-react";

import { ME } from "@/constants/me";

export const Footer = () => (
  <footer
    data-testid="footer-element"
    className="flex items-center gap-4 justify-between fixed bottom-0 w-full pr-8 h-10 bg-slate-900"
  >
    <p>
      Developed by{" "}
      <Link
        href={ME.profile_github}
        className="text-red-600 font-bold hover:text-red-400"
      >
        Bruno Reis
      </Link>
    </p>
  </footer>
);
