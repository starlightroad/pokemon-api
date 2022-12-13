import showTop5PokemonResponse from './examples/show-top-5-pokemon';

const showTop5Pokemon = {
  id: null,
  title: 'Show Top 5 Pokemon',
  endpoint: '/pokemon/top-5',
  method: 'get',
  sections: {
    description: {
      title: 'Description',
      description:
        'Shows Pokemon with the best overall stats (total stat). The Pokemon are listed in a descending order.',
    },
    parameters: {
      title: 'Parameters',
      responseExample: showTop5PokemonResponse,
      content: [{ description: 'There are no query parameters for this request.' }],
    },
  },
};

export default showTop5Pokemon;
