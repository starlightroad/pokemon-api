import ids from './ids';
import { welcome } from './welcome';
import { showPokemon, showAPokemon, showTop5Pokemon } from './pokemon';
import { showMoves, showAMove } from './moves';
import { showTMs, showATM } from './tms';
import { showHMs, showAnHM } from './hms';
import { lowerCase, replaceAll } from 'utilities/text-formatter';
import { cloneObject } from 'utilities/clone';

export const data = {
  url: 'https://pokemon-api.cyclic.app/api/v1',
  repo: 'https://github.com/blackOw1/pokemon-api',
  pages: {
    welcome,
    'show-pokemon': showPokemon,
    'show-a-pokemon': showAPokemon,
    'show-top-5-pokemon': showTop5Pokemon,
    'show-moves': showMoves,
    'show-a-move': showAMove,
    'show-tms': showTMs,
    'show-a-tm': showATM,
    'show-hms': showHMs,
    'show-an-hm': showAnHM,
    'not-found': {
      id: null,
      title: 'Not Found',
      message: 'The page you have requested does not exist.',
      button: {
        text: 'Start over',
        link: '/docs',
      },
    },
  },
  sidebar: {
    'welcome-list': [
      {
        title: 'Welcome',
        content: [{ id: null, name: 'welcome', value: 'About the API', path: '/docs' }],
      },
    ],
    'references-list': [
      {
        title: 'Pokemon',
        content: [
          { id: null, value: 'Show Pokemon', path: '/show-pokemon' },
          {
            id: null,
            value: 'Show a Pokemon',
            path: '/show-a-pokemon',
          },
          {
            id: null,
            value: 'Show top 5 Pokemon',
            path: '/show-top-5-pokemon',
          },
        ],
      },
      {
        title: 'Moves',
        content: [
          { id: null, value: 'Show moves', path: '/show-moves' },
          { id: null, value: 'Show a move', path: '/show-a-move' },
        ],
      },
      {
        title: 'TMs',
        content: [
          { id: null, value: 'Show TMs', path: '/show-tms' },
          { id: null, value: 'Show a TM', path: '/show-a-tm' },
        ],
      },
      {
        title: 'HMs',
        content: [
          { id: null, value: 'Show HMs', path: '/show-hms' },
          { id: null, value: 'Show an HM', path: '/show-an-hm' },
        ],
      },
    ],
  },
};

export const getPageData = (page) => {
  const pageData = cloneObject(data.pages[page]);
  pageData.id = ids.get(lowerCase(replaceAll(pageData.title, ' ', '-')));
  return pageData;
};

export const getListData = (listName) => {
  const list = cloneObject(data.sidebar[listName]);
  list.forEach((entry) =>
    entry.content.forEach(
      (entry) =>
        (entry.id = ids.get(lowerCase(replaceAll(entry.name || entry.value, ' ', '-'))))
    )
  );
  return list;
};

export const getNavbarData = () => ({ repo: data.repo });

export const getApiUrl = () => data.url;
