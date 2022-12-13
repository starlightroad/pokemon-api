import showAnHMResponse from './examples/show-an-hm';

const showAnHM = {
  id: null,
  title: 'Show an HM',
  endpoint: '/moves/hms/{id}',
  method: 'get',
  sections: {
    description: {
      title: 'Description',
      description: 'Shows data about an HM.',
    },
    parameters: {
      title: 'Parameters',
      responseExample: showAnHMResponse,
      content: [
        {
          name: 'id',
          type: 'string',
          description: 'The HM number.',
          table: {
            headers: ['Name', 'Parameter', 'Parameter'],
            data: [['Fly', '/hms/02', '/hms/2']],
          },
        },
      ],
    },
  },
};

export default showAnHM;
