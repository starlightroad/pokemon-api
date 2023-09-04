import Link from "next/link";

import { siteConfig } from "@/lib/config";
import { Text, buttonStyles } from "@/components/ui";

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto">
      <div className="flex flex-col items-center gap-2 pt-24">
        <Text
          variant="p"
          className="px-3 py-2 mb-1 text-sm text-slate-700 leading-4 rounded-full ring-1 ring-slate-200 bg-slate-50"
        >
          {siteConfig.name}
        </Text>
        <Text
          variant="h1"
          className="text-7xl text-center font-medium text-slate-800"
        >
          {siteConfig.description}
        </Text>
        <Text variant="p" className="text-lg text-slate-500 my-3">
          All of the data you will ever need in one place.
        </Text>

        <nav className="flex gap-3">
          <Link href={siteConfig.routes.docs} className={buttonStyles()}>
            Get started
          </Link>
          <a
            href={siteConfig.links.github}
            target="_blank"
            className={buttonStyles({ variant: "outline" })}
          >
            View the repo
          </a>
        </nav>
      </div>
    </main>
  );
}
