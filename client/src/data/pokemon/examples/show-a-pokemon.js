const showAPokemonResponse = `{
  status: 'success',
  data: {
    data: [
      {
        no: '001',
        name: 'bulbasaur',
        species: 'seed',
        type: ['grass', 'poison'],
        stats: {
          hp: 45,
          attack: 49,
          defense: 49,
          speed: 45,
          special: 65,
          total: 253,
        },
        moves: {
          byLevelUp: [
            {
              move: 'growl',
              type: 'normal',
              category: 'status',
              pp: 40,
              power: null,
              accuracy: 100,
              effect: "Decreases opponent's Attack power temporarily",
            },
            {
              move: 'tackle',
              type: 'normal',
              category: 'physical',
              pp: 35,
              power: 35,
              accuracy: 95,
              effect: '',
            },
            {
              move: 'leech seed',
              type: 'grass',
              category: 'status',
              pp: 10,
              power: null,
              accuracy: 90,
              effect: "Your Pokemon absorbs some of opponent's HP every turn",
            },
            {
              move: 'vine whip',
              type: 'grass',
              category: 'special',
              pp: 10,
              power: 35,
              accuracy: 100,
              effect: '',
            },
            {
              move: 'poisonpowder',
              type: 'poison',
              category: 'status',
              pp: 35,
              power: null,
              accuracy: 75,
              effect: 'Poisons opponent',
            },
            {
              move: 'razor leaf',
              type: 'grass',
              category: 'special',
              pp: 25,
              power: 55,
              accuracy: 95,
              effect: 'Has a good chance for a critical hit',
            },
            {
              move: 'growth',
              type: 'normal',
              category: 'status',
              pp: 40,
              power: null,
              accuracy: null,
              effect: "Increases your Pokemon's Attack power temporarily",
            },
            {
              move: 'sleep powder',
              type: 'grass',
              category: 'status',
              pp: 15,
              power: null,
              accuracy: 75,
              effect: 'Puts opponent to Sleep',
            },
            {
              move: 'solarbeam',
              type: 'grass',
              category: 'special',
              pp: 10,
              power: 120,
              accuracy: 100,
              effect:
                'Your Pokemon builds energy on the 1st turn, then attacks on the 2nd turn',
            },
          ],
          byTm: [
            {
              move: 'swords dance',
              type: 'normal',
              category: 'status',
              pp: 30,
              power: null,
              accuracy: null,
              effect: "Increases your Pokemon's Attack power temporarily",
            },
            {
              move: 'toxic',
              type: 'poison',
              category: 'status',
              pp: 10,
              power: null,
              accuracy: 85,
              effect: 'Poisons opponent (damage dealt increases with each turn)',
            },
            {
              move: 'body slam',
              type: 'normal',
              category: 'physical',
              pp: 15,
              power: 85,
              accuracy: 100,
              effect: 'Deals damage and may paralyze opponent',
            },
            {
              move: 'take down',
              type: 'normal',
              category: 'physical',
              pp: 20,
              power: 90,
              accuracy: 85,
              effect: 'Your Pokemon receives 1/4 the damage the opponent receives',
            },
            {
              move: 'double-edge',
              type: 'normal',
              category: 'physical',
              pp: 15,
              power: 100,
              accuracy: 100,
              effect: 'Your Pokemon receives 1/4 the damage the opponent recieves',
            },
            {
              move: 'rage',
              type: 'normal',
              category: 'physical',
              pp: 20,
              power: 20,
              accuracy: 100,
              effect:
                'As your Pokemon takes damage, its Attack power increases until the battle is over',
            },
            {
              move: 'mega drain',
              type: 'grass',
              category: 'special',
              pp: 10,
              power: 40,
              accuracy: 100,
              effect:
                'Your Pokemon absorbs HP from the opponent equal to 1/2 the attack damage',
            },
            {
              move: 'solarbeam',
              type: 'grass',
              category: 'special',
              pp: 10,
              power: 120,
              accuracy: 100,
              effect:
                'Your Pokemon builds energy on the 1st turn, then attacks on the 2nd turn',
            },
            {
              move: 'mimic',
              type: 'normal',
              category: 'status',
              pp: 10,
              power: null,
              accuracy: 100,
              effect: "Your Pokemon mimics its opponent's last attack",
            },
            {
              move: 'double team',
              type: 'normal',
              category: 'status',
              pp: 15,
              power: null,
              accuracy: null,
              effect: "Increases your Pokemon's chances of evading attacks",
            },
            {
              move: 'reflect',
              type: 'psychic',
              category: 'status',
              pp: 20,
              power: null,
              accuracy: null,
              effect: 'Cuts the damage received from physical attacks by 50%',
            },
            {
              move: 'bide',
              type: 'normal',
              category: 'physical',
              pp: 10,
              power: null,
              accuracy: null,
              effect:
                'Your Pokemon loses 2 to 3 turns, then hits opponent for twice damage recieved',
            },
            {
              move: 'rest',
              type: 'psychic',
              category: 'status',
              pp: 10,
              power: null,
              accuracy: null,
              effect: 'If successful your Pokemon recovers all its HP, then loses two turns',
            },
            {
              move: 'substitute',
              type: 'normal',
              category: 'status',
              pp: 10,
              power: null,
              accuracy: null,
              effect: 'Your Pokemon creates clones to itself, which then fight automatically',
            },
          ],
          byHm: [
            {
              move: 'cut',
              type: 'normal',
              category: 'physical',
              pp: 30,
              power: 50,
              accuracy: 95,
              effect: '',
            },
          ],
        },
        evolution: [
          {
            no: '001',
            name: 'bulbasaur',
            url: '/api/v1/pokemon/001',
            sprite: {
              redblue: '/static/img/sprites/red-blue/1.png',
              redgreen: '/static/img/sprites/red-green/1.png',
              yellow: '/static/img/sprites/yellow/1.png',
            },
          },
          {
            stage: 1,
            method: 'level up (level 16)',
            no: '002',
            name: 'ivysaur',
            url: '/api/v1/pokemon/002',
            sprite: {
              redblue: '/static/img/sprites/red-blue/2.png',
              redgreen: '/static/img/sprites/red-green/2.png',
              yellow: '/static/img/sprites/yellow/2.png',
            },
          },
          {
            stage: 2,
            method: 'level up (level 32)',
            no: '003',
            name: 'venusaur',
            url: '/api/v1/pokemon/003',
            sprite: {
              redblue: '/static/img/sprites/red-blue/3.png',
              redgreen: '/static/img/sprites/red-green/3.png',
              yellow: '/static/img/sprites/yellow/3.png',
            },
          },
        ],
        sprite: {
          redblue: '/static/img/sprites/red-blue/1.png',
          redgreen: '/static/img/sprites/red-green/1.png',
          yellow: '/static/img/sprites/yellow/1.png',
        },
      },
    ],
  },
}`;

export default showAPokemonResponse;
