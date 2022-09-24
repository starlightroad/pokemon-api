import mongoose from 'mongoose';
import moveTemplateSchema from './moveTemplateModel.js';

const moveSchema = new mongoose.Schema(moveTemplateSchema, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

const Move = mongoose.model('Move', moveSchema);

export default Move;
