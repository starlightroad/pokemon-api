import showAPokemonResponse from './examples/show-a-pokemon';

const showAPokemon = {
  id: null,
  title: 'Show a Pokemon',
  endpoint: '/pokemon/{id}',
  method: 'get',
  sections: {
    description: {
      title: 'Description',
      description: 'Shows data about a Pokemon.',
    },
    parameters: {
      title: 'Parameters',
      responseExample: showAPokemonResponse,
      content: [
        {
          name: 'id',
          type: 'string',
          description: 'The ID or name of the Pokemon. See below for more details.',
          table: {
            headers: ['Pokemon', 'Parameter', 'Parameter', 'Parameter'],
            data: [
              ['Pikachu', '/pokemon/025', '/pokemon/25', '/pokemon/pikachu'],
              ['Charizard', '/pokemon/006', '/pokemon/6', '/pokemon/charizard'],
              ['Mr. Mime', '/pokemon/122', '/pokemon/mr-mime'],
            ],
          },
        },
      ],
    },
  },
};

export default showAPokemon;
