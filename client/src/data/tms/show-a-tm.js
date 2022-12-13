import showATMResponse from './examples/show-a-tm';

const showATM = {
  id: null,
  title: 'Show a TM',
  endpoint: '/moves/tms/{id}',
  method: 'get',
  sections: {
    description: {
      title: 'Description',
      description: 'Shows data about a TM.',
    },
    parameters: {
      title: 'Parameters',
      responseExample: showATMResponse,
      content: [
        {
          name: 'id',
          type: 'string',
          description: 'The TM number.',
          table: {
            headers: ['Move', 'Parameter', 'Parameter'],
            data: [['Swords Dance', '/tms/03', '/tms/3']],
          },
        },
      ],
    },
  },
};

export default showATM;
