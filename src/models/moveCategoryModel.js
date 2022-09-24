import mongoose from 'mongoose';
import moveTemplateSchema from './moveTemplateModel.js';

const moveCategorySchema = new mongoose.Schema({
  byLevelUp: {
    type: [moveTemplateSchema]
  },

  byTm: {
    type: [moveTemplateSchema]
  },

  byHm: {
    type: [moveTemplateSchema]
  }
});

export default moveCategorySchema;
