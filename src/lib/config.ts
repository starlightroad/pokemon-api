const links = {
  github: "https://github.com/blackOw1/pokemon-api",
  developer: "https://devgerardoortiz.com",
};

const routesConfig = {
  root: "/",
  docs: "/docs",
  references: {
    pokemon: {
      showPokemon: "/docs/references/references/show-pokemon",
      showAPokemon: "/docs/references/show-a-pokemon",
      showTop5Pokemon: "/docs/references/show-top-5-pokemon",
    },
    moves: {
      showMoves: "/docs/references/show-moves",
      showAMove: "/docs/references/show-a-move",
    },
    tms: {
      showTms: "/docs/references/show-tms",
      showATm: "/docs/references/show-a-tm",
    },
    hms: {
      showHms: "/docs/references/show-hms",
      showAnHm: "/docs/references/show-an-hm",
    },
  },
};

export const siteConfig = {
  name: "Next Pokémon",
  description: "Pokémon data from Generation 1 at your disposal.",
  url: null,
  links,
  routes: routesConfig,
};
