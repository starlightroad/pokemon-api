import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/config";
import { topBarNavConfig } from "@/lib/constants";

export default function NavBar() {
  return (
    <header className="sticky top-0 border-b border-b-slate-200">
      <div className="flex justify-between mx-auto max-w-screen-xl">
        <nav className="px-5 py-4">
          <ul className="flex gap-4 items-center">
            {topBarNavConfig.map((item) => {
              return (
                (item.icon && (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-900"
                  >
                    <Image
                      src={item.icon}
                      alt="Pokeball logo"
                      width={20}
                      height={20}
                    />
                    {item.title}
                  </Link>
                )) || (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-slate-500"
                  >
                    {item.title}
                  </Link>
                )
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <span className="block p-1 hover:bg-slate-100 rounded-md cursor-pointer text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-moon"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </span>
          <Link
            href={siteConfig.links.github}
            className="p-1 hover:bg-slate-100 rounded-md text-slate-500"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}
