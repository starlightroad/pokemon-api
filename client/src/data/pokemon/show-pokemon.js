import pokemonOperators from 'utilities/pokemon-operators';
import pokemonTypes from 'utilities/pokemon-types';
import showPokemonResponse from './examples/show-pokemon';

const showPokemon = {
  id: null,
  title: 'Show Pokemon',
  endpoint: '/pokemon',
  method: 'get',
  sections: {
    description: {
      title: 'Description',
      description: 'Lists all Pokemon.',
    },
    parameters: {
      title: 'Parameters',
      responseExample: showPokemonResponse,
      content: [
        {
          name: 'no',
          type: 'number',
          description: 'The number of the Pokemon.',
          table: {
            headers: ['Number', 'Parameter', 'Parameter'],
            data: [
              ['003 (Venusaur)', 'no=003', 'no=3'],
              ['150 (Mewtwo)', 'no=150'],
            ],
          },
        },
        {
          name: 'name',
          type: 'string',
          description:
            'The name of the Pokemon. The table below shows some Pokemon whose name were modified.',
          table: {
            headers: ['Name', 'Parameter'],
            data: [
              ['Nidoran♂', 'name=nidoran-male'],
              ['Nidoran♀', 'name=nidoran-female'],
              ['Mr. Mime', 'name=mr-mime'],
            ],
          },
        },
        {
          name: 'species',
          type: 'string',
          description: 'The species of the Pokemon.',
          table: {
            headers: ['Species', 'Parameter'],
            data: [
              ['Fairy', 'species=fairy'],
              ['Mouse', 'species=mouse'],
            ],
          },
        },
        {
          name: 'type',
          type: '[array]',
          description:
            'The type of the Pokemon. You are able to query multiple types. The order does not matter.',
          allowedValues: pokemonTypes,
          table: {
            headers: ['Pokemon', 'Parameter'],
            data: [
              ['Pikachu', 'type=electric'],
              ['Charizard', 'type=flying&type=fire'],
            ],
          },
        },
        {
          name: 'stats_hp',
          type: 'string',
          description: 'Shows Pokemon whose HP stat matches the specified value.',
          allowedValues: pokemonOperators,
          table: {
            headers: ['Hit Points', 'Parameter'],
            data: [
              [80, 'stats_hp=80'],
              ['>= 120', 'stats_hp[gte]=120'],
              ['< 75', 'stats_hp[lt]=75'],
            ],
          },
        },
        {
          name: 'stats_attack',
          type: 'string',
          description: 'Shows Pokemon whose attack stat matches the specified value.',
          allowedValues: pokemonOperators,
          table: {
            headers: ['Attack', 'Parameter'],
            data: [
              [80, 'stats_attack=80'],
              ['>= 120', 'stats_attack[gte]=120'],
              ['< 75', 'stats_attack[lt]=75'],
            ],
          },
        },
        {
          name: 'stats_defense',
          type: 'string',
          description: 'Shows Pokemon whose defense stat matches the specified value.',
          allowedValues: pokemonOperators,
          table: {
            headers: ['Defense', 'Parameter'],
            data: [
              [80, 'stats_defense=80'],
              ['>= 120', 'stats_defense[gte]=120'],
              ['< 75', 'stats_defense[lt]=75'],
            ],
          },
        },
        {
          name: 'stats_speed',
          type: 'string',
          description: 'Shows Pokemon whose speed stat matches the specified value.',
          allowedValues: pokemonOperators,
          table: {
            headers: ['Speed', 'Parameter'],
            data: [
              [80, 'stats_speed=80'],
              ['>= 120', 'stats_speed[gte]=120'],
              ['< 75', 'stats_speed[lt]=75'],
            ],
          },
        },
        {
          name: 'stats_special',
          type: 'string',
          description: 'Shows Pokemon whose special stat matches the specified value.',
          allowedValues: pokemonOperators,
          table: {
            headers: ['Special', 'Parameter'],
            data: [
              [80, 'stats_special=80'],
              ['>= 120', 'stats_special[gte]=120'],
              ['< 75', 'stats_special[lt]=75'],
            ],
          },
        },
        {
          name: 'stats_total',
          type: 'string',
          description: 'Shows Pokemon whose total stat matches the specified value.',
          allowedValues: pokemonOperators,
          table: {
            headers: ['Total', 'Parameter'],
            data: [
              [80, 'stats_total=80'],
              ['>= 120', 'stats_total[gte]=120'],
              ['< 75', 'stats_total[lt]=75'],
            ],
          },
        },
      ],
    },
  },
};

export default showPokemon;
