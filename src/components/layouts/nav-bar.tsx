import { topBarNavConfig } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky top-0 border-b border-b-slate-200">
      <nav className="px-5 py-4 mx-auto max-w-screen-xl">
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
    </header>
  );
}
