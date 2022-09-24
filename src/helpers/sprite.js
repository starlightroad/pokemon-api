const setSprite = function (doc) {
  const pokemonNumber = parseInt(doc.no, 10);
  const url = '/static/sprites';

  return {
    redblue: `${url}/red-blue/${pokemonNumber}.png`,
    redgreen: `${url}/red-green/${pokemonNumber}.png`,
    yellow: `${url}/yellow/${pokemonNumber}.png`
  };
};

export default setSprite;
