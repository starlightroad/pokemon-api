import mongoose from 'mongoose';
import setSprite from '../helpers/sprite.js';

const evolutionSchema = new mongoose.Schema(
  {
    stage: {
      type: Number,
      enum: {
        values: [1, 2],
        message: 'Valid values: 1 and 2'
      }
    },
    method: String,
    no: {
      type: String,
      required: [true, 'A Pokemon must have an ID']
    },
    name: {
      type: String,
      required: [true, 'A Pokemon must have a name'],
      unique: true,
      trim: true
    },
    url: {
      type: String,
      required: [true, 'A URL is required']
    }
  },
  {
    _id: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

evolutionSchema.virtual('sprite').get(function () {
  return setSprite(this);
});

export default evolutionSchema;
