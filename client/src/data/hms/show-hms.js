import pokemonOperators from 'utilities/pokemon-operators';
import pokemonTypes from 'utilities/pokemon-types';
import showHMsResponse from './examples/show-hms';

const showHMs = {
  id: null,
  title: 'Show HMs',
  endpoint: '/moves/hms',
  method: 'get',
  sections: {
    description: {
      title: 'Description',
      description: 'Shows data about all HMs.',
    },
    parameters: {
      title: 'Parameters',
      responseExample: showHMsResponse,
      content: [
        {
          name: 'hm',
          type: 'string',
          description: 'Shows an HM that matches the HM value.',
          table: {
            headers: ['Name', 'Parameter', 'Parameter'],
            data: [['Flash', 'hm=05', 'hm=5']],
          },
        },
        {
          name: 'name',
          type: 'string',
          description: 'Shows an HM that matches the name value.',
          table: {
            headers: ['Name', 'Parameter'],
            data: [['Surf', 'name=surf']],
          },
        },
        {
          name: 'type',
          type: 'string',
          description: 'Shows HMs based on the type value.',
          allowedValues: pokemonTypes,
          table: {
            headers: ['Type', 'Parameters'],
            data: [
              ['Bug', 'type=bug'],
              ['Water', 'type=water'],
            ],
          },
        },
        {
          name: 'category',
          type: 'string',
          description: 'Shows HMs based on the category value.',
          allowedValues: ['status', 'physical', 'special'],
          table: {
            headers: ['Category', 'Parameters'],
            data: [['Physical', 'category=physical']],
          },
        },
        {
          name: 'pp',
          type: 'number',
          description: 'Shows HMs based on the power point value.',
          allowedValues: pokemonOperators,
          table: {
            headers: ['PP', 'Parameter'],
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
          description: 'Shows HMs based on the power value.',
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
          description: 'Shows HMs based on the accuracy value.',
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

export default showHMs;
