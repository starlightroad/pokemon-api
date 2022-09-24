import mongoose from 'mongoose';
import statSchema from './statModel.js';
import moveCategorySchema from './moveCategoryModel.js';
import evolutionSchema from './evolutionModel.js';
import setSprite from '../helpers/sprite.js';

const pokemonSchema = new mongoose.Schema(
  {
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
    species: {
      type: String,
      required: [true, 'A pokemon must belong to a species']
    },
    type: {
      type: [String],
      validate: {
        validator: (value) => value.length > 0 && value.length < 3,
        message: 'A Pokemon must have at least one type and a max of two types'
      },
      enum: {
        values: [
          'bug',
          'dragon',
          'electric',
          'fighting',
          'fire',
          'flying',
          'ghost',
          'grass',
          'ground',
          'ice',
          'normal',
          'poison',
          'psychic',
          'rock',
          'water'
        ],
        message: 'An invalid type was entered: {VALUE}'
      }
    },
    stats: {
      type: statSchema,
      required: [true, 'A Pokemon must have stats']
    },
    moves: {
      type: moveCategorySchema,
      required: [true, 'A Pokemon must have moves'],
      select: false
    },
    evolution: {
      type: [evolutionSchema],
      select: false
    }
  },
  {
    _id: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

pokemonSchema.virtual('sprite').get(function () {
  return setSprite(this);
});

// pokemonSchema.virtual('generation').get(() => 1);

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

export default Pokemon;
