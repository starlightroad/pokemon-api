import mongoose from 'mongoose';

const moveTemplateSchema = new mongoose.Schema(
  {
    level: {
      type: Number,
      validate: {
        validator: (value) => typeof value === 'number',
        message: 'Level must be a number'
      },
      select: false
    },

    tm: {
      type: String,
      select: false
    },

    hm: {
      type: String,
      select: false
    },

    name: {
      type: String,
      unique: false,
      required: [true, 'A move must have a name'],
      validate: {
        validator: (value) => value.length > 0,
        message: 'A move must have a name'
      }
    },

    type: {
      type: String,
      required: [true, 'A move must have a type']
    },

    category: {
      type: String,
      required: [true, 'A move must have a category'],
      enum: {
        values: ['physical', 'special', 'status'],
        message: 'Category must be either physical, special, or status'
      }
    },

    pp: {
      type: Number,
      validate: {
        validator: (value) => +value || value !== '',
        message: 'PP must be a number.'
      }
    },

    power: {
      type: Number,
      validate: {
        validator: (value) => value !== '',
        message:
          'The power value of a move must include a number. If the move does not have a power value, please leave it blank.'
      }
    },

    accuracy: {
      type: Number,
      validate: {
        validator: (value) => (+value <= 100 && +value >= 0) || value === '',
        message:
          "A Pokemon's accuracy must be one of the following: less than 100 and greater than or equal to 0, left blank if the move does not need an accuracy"
      }
    },

    effect: String
  },
  {
    _id: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

export default moveTemplateSchema;
