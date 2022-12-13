import pokemonOperators from 'utilities/pokemon-operators';
import pokemonTypes from 'utilities/pokemon-types';
import showTMsResponse from './examples/show-tms';

const showTMs = {
  id: null,
  title: 'Show TMs',
  endpoint: '/moves/tms',
  method: 'get',
  sections: {
    description: {
      title: 'Description',
      description: 'Shows data about all TMs.',
    },
    parameters: {
      title: 'Parameters',
      responseExample: showTMsResponse,
      content: [
        {
          name: 'tm',
          type: 'string',
          description: 'Shows a TM that matches the TM value.',
          table: {
            headers: ['Technical Move', 'Parameter', 'Parameter'],
            data: [['Mega Kick', 'tm=05', 'tm=5']],
          },
        },
        {
          name: 'name',
          type: 'string',
          description: 'Shows a TM that matches the name value.',
          table: {
            headers: ['Name', 'Parameter'],
            data: [
              ['Blizzard', 'name=blizzard'],
              ['Swords Dance', 'name=swords+dance'],
            ],
          },
        },
        {
          name: 'type',
          type: 'string',
          description: 'Shows TMs based on the type value.',
          allowedValues: pokemonTypes,
          table: {
            headers: ['Type', 'Parameter'],
            data: [['Grass', 'type=grass']],
          },
        },
        {
          name: 'category',
          type: 'string',
          description: 'Shows TMs based on the category value.',
          allowedValues: ['status', 'physical', 'special'],
          table: {
            headers: ['Category', 'Parameter'],
            data: [['Normal', 'category=normal']],
          },
        },
        {
          name: 'pp',
          type: 'number',
          description: 'Shows TMs based on the power point value.',
          allowedValues: pokemonOperators,
          table: {
            headers: ['Power Point', 'Parameter'],
            data: [
              [20, 'pp=20'],
              ['>= 20', 'pp[gte]=20'],
              ['< 15', 'pp[lt]=15'],
            ],
          },
        },
        {
          name: 'power',
          type: 'number',
          description: 'Shows TMs based on the power value.',
          allowedValues: pokemonOperators,
          table: {
            headers: ['Power', 'Parameter'],
            data: [
              ['80', 'power=80'],
              ['>= 120', 'power[gte]=120'],
              ['< 50', 'power[lt]=50'],
            ],
          },
        },
        {
          name: 'accuracy',
          type: 'number',
          description: 'Shows TMs based on the accuracy value.',
          allowedValues: pokemonOperators,
          table: {
            headers: ['Accuracy', 'Parameter'],
            data: [
              [100, 'accuracy=100'],
              ['>= 75', 'accuracy[gte]=75'],
              ['< 25', 'accuracy[lt]=25'],
            ],
          },
        },
      ],
    },
  },
};

export default showTMs;
