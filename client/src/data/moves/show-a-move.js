import showAMoveResponse from './examples/show-a-move';

const showAMove = {
  id: null,
  title: 'Show a Move',
  endpoint: '/moves/{id}',
  method: 'get',
  sections: {
    description: {
      title: 'Description',
      description: 'Shows data of a move.',
    },
    parameters: {
      title: 'Parameters',
      responseExample: showAMoveResponse,
      content: [
        {
          name: 'id',
          type: 'string',
          description: 'The ID of the move.',
          table: {
            headers: ['Move', 'Parameter'],
            data: [['Psychic', '/moves/62f8d181cb1a94396dbd469b']],
          },
        },
      ],
    },
  },
};

export default showAMove;
