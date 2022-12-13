import pokemonOperators from 'utilities/pokemon-operators';
import pokemonTypes from 'utilities/pokemon-types';
import showMovesResponse from './examples/show-move';

const showMoves = {
  id: null,
  title: 'Show Moves',
  endpoint: '/moves',
  method: 'get',
  sections: {
    description: {
      title: 'Description',
      description: 'Shows data of all moves.',
    },
    parameters: {
      title: 'Parameters',
      responseExample: showMovesResponse,
      content: [
        {
          name: '_id',
          type: 'string',
          description: 'The ID of the move.',
          table: {
            headers: ['Move', 'Parameter'],
            data: [['Mega Drain', '_id=62f8d181cb1a94396dbd46e6']],
          },
        },
        {
          name: 'name',
          type: 'string',
          description: 'Shows a move that matches the name value.',
          table: {
            headers: ['Name', 'Parameter'],
            data: [
              ['Psychic', 'name=psychic'],
              ['Thunder Punch', 'name=thunder+punch'],
            ],
          },
        },
        {
          name: 'type',
          type: 'string',
          description: 'Shows moves based on the type value.',
          allowedValues: pokemonTypes,
          table: {
            headers: ['Type', 'Parameter'],
            data: [
              ['Dragon', 'type=dragon'],
              ['Poison', 'type=poison'],
            ],
          },
        },
        {
          name: 'category',
          type: 'string',
          description: 'Shows moves based on the category value.',
          allowedValues: ['status', 'physical', 'special'],
          table: {
            headers: ['Category', 'Parameter'],
            data: [['Special', 'category=special']],
          },
        },
        {
          name: 'pp',
          type: 'number',
          description: 'Shows moves based on the power point value.',
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
          description: 'Shows moves based on the power value.',
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
          description: 'Shows moves based on the accuracy value.',
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
        {
          name: 'tm',
          type: 'number',
          description: 'Shows a move that matches the TM value.',
          table: {
            headers: ['Technical Move', 'Parameter', 'Parameter'],
            data: [
              ['07 (Horn Drill)', 'tm=07', 'tm=7'],
              ['22 (Solar Beam)', 'tm=22'],
            ],
          },
        },
        {
          name: 'hm',
          type: 'number',
          description: 'Shows a move that matches the HM value.',
          table: {
            headers: ['Hidden Move', 'Parameter', 'Parameter'],
            data: [['04 (Strength)', 'hm=04', 'hm=4']],
          },
        },
      ],
    },
  },
};

export default showMoves;
