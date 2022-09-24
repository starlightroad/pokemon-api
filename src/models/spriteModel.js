import mongoose from 'mongoose';

const spriteSchema = new mongoose.Schema(
  {
    redblue: [String],
    redgreen: [String],
    yellow: [String]
  },
  {
    _id: false
  }
);

export default spriteSchema;
