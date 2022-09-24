import mongoose from 'mongoose';

const statSchema = new mongoose.Schema({
  hp: {
    type: Number,
    min: 0,
    required: [true, 'A Pokemon must have an hp stat']
  },
  attack: {
    type: Number,
    min: 0,
    required: [true, 'A Pokemon must have an attack stat']
  },
  defense: {
    type: Number,
    min: 0,
    required: [true, 'A Pokemon must have a defense stat']
  },
  speed: {
    type: Number,
    min: 0,
    required: [true, 'A Pokemon must have a speed stat']
  },
  special: {
    type: Number,
    min: 0,
    required: [true, 'A Pokemon must have a special stat']
  },
  total: Number
});

export default statSchema;
