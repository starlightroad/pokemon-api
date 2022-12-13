const showTop5PokemonResponse = `{
  status: 'success',
  results: 5,
  data: {
    data: [
      {
        no: '150',
        name: 'mewtwo',
        species: 'genetic',
        type: ['psychic'],
        stats: {
          hp: 106,
          attack: 110,
          defense: 90,
          speed: 130,
          special: 154,
          total: 590,
        },
        sprite: {
          redblue: '/static/img/sprites/red-blue/150.png',
          redgreen: '/static/img/sprites/red-green/150.png',
          yellow: '/static/img/sprites/yellow/150.png',
        },
      },
      {
        no: '151',
        name: 'mew',
        species: 'newspecies',
        type: ['psychic'],
        stats: {
          hp: 100,
          attack: 100,
          defense: 100,
          speed: 100,
          special: 100,
          total: 500,
        },
        sprite: {
          redblue: '/static/img/sprites/red-blue/151.png',
          redgreen: '/static/img/sprites/red-green/151.png',
          yellow: '/static/img/sprites/yellow/151.png',
        },
      },
      {
        no: '149',
        name: 'dragonite',
        species: 'dragon',
        type: ['dragon', 'flying'],
        stats: {
          hp: 91,
          attack: 134,
          defense: 95,
          speed: 80,
          special: 100,
          total: 500,
        },
        sprite: {
          redblue: '/static/img/sprites/red-blue/149.png',
          redgreen: '/static/img/sprites/red-green/149.png',
          yellow: '/static/img/sprites/yellow/149.png',
        },
      },
      {
        no: '146',
        name: 'moltres',
        species: 'flame',
        type: ['fire', 'flying'],
        stats: {
          hp: 90,
          attack: 100,
          defense: 90,
          speed: 90,
          special: 125,
          total: 495,
        },
        sprite: {
          redblue: '/static/img/sprites/red-blue/146.png',
          redgreen: '/static/img/sprites/red-green/146.png',
          yellow: '/static/img/sprites/yellow/146.png',
        },
      },
      {
        no: '145',
        name: 'zapdos',
        species: 'electric',
        type: ['electric', 'flying'],
        stats: {
          hp: 90,
          attack: 90,
          defense: 85,
          speed: 100,
          special: 125,
          total: 490,
        },
        sprite: {
          redblue: '/static/img/sprites/red-blue/145.png',
          redgreen: '/static/img/sprites/red-green/145.png',
          yellow: '/static/img/sprites/yellow/145.png',
        },
      },
    ],
  },
}`;

export default showTop5PokemonResponse;
