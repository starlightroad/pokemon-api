import Pokemon from '../models/pokemonModel.js';
import APIFeatures from '../helpers/apiFeatures.js';
import tryCatch from '../helpers/tryCatch.js';

export const getAllPokemon = tryCatch(async (req, res, next) => {
  const features = new APIFeatures(Pokemon.find({}), req.query)
    .filter()
    .sort()
    .limit()
    .limitFields();
  const docs = await features.query;

  res.status(200).json({
    status: 'success',
    results: docs.length,
    data: {
      data: docs
    }
  });
});

export const getPokemon = tryCatch(async (req, res, next) => {
  let query = req.params.id;
  const isNumber = Number(query);

  if (isNumber) query = { no: query.padStart(3, 0) };
  else query = { name: query };

  const features = new APIFeatures(
    Pokemon.find(query),
    req.query
  ).limitFields();
  const doc = await features.query;

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    data: {
      data: doc
    }
  });
});

export const aliasTopPokemon = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-stats.total';

  next();
};

export const aliasAllPokemon = (req, res, next) => {
  req.query.sort = 'no';
  req.query.fields = '-__v,-_id,-stats._id';

  next();
};

export const aliasOnePokemon = (req, res, next) => {
  req.query.fields =
    '-__v,-_id,+moves,-stats._id,-moves._id,-moves.byLevelUp._id,-moves.byTm._id,-moves.byHm._id,+evolution,-evolution._id';

  next();
};
