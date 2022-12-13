const welcome = {
  id: null,
  title: 'Welcome',
  sections: {
    description: {
      title: 'What is Pokemon API?',
      description:
        'Pokemon API is an API that contains data about Pokemon, moves, TMs, and HMs from generation 1. Generation 1 contains 151 Pokemon, 104 moves, 45 technical moves (TM), and 5 hidden moves (HM).',
    },
    other: [
      {
        title: 'Is is free?',
        description:
          'Pokemon API is free to consume. No authentication is required to access data.',
      },
      {
        title: 'Are you rate limiting?',
        description:
          'Currently, the API is not rate limited. But, this will be implemented in the near future.',
      },
      {
        title: 'Can I edit Pokemon data?',
        description:
          'The API does not allow modifications in the database. The API only allows GET requests.',
      },
    ],
  },
};

export default welcome;
