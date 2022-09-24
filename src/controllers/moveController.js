import Move from '../models/moveModel.js';
import APIFeatures from '../helpers/apiFeatures.js';
import tryCatch from '../helpers/tryCatch.js';
import setStringPadding from '../helpers/pad.js';

export const getAllMoves = tryCatch(async (req, res, next) => {
  const features = new APIFeatures(Move.find({}), req.query)
    .filter()
    .sort()
    .limitFields();
  const docs = await features.query;

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: docs.length,
    data: {
      data: docs
    }
  });
});

export const getMove = tryCatch(async (req, res, next) => {
  const features = new APIFeatures(
    Move.find({ _id: req.params.id }),
    req.query
  ).limitFields();
  const docs = await features.query;

  res.status(200).json({
    status: 'success',
    data: {
      data: docs
    }
  });
});

export const getAllTms = tryCatch(async (req, res, next) => {
  const features = new APIFeatures(
    Move.find({ tm: { $exists: true } }),
    req.query
  )
    .filter()
    .sort()
    .limitFields();
  const docs = await features.query;

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: docs.length,
    data: {
      docs
    }
  });
});

export const getTm = tryCatch(async (req, res, next) => {
  const query = setStringPadding(req.params.id, 2, 0);
  const features = new APIFeatures(
    Move.find({ tm: query }),
    req.query
  ).limitFields();
  const doc = await features.query;

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: doc.length,
    data: {
      doc
    }
  });
});

export const getAllHms = tryCatch(async (req, res, next) => {
  const features = new APIFeatures(
    Move.find({ hm: { $exists: true } }),
    req.query
  )
    .filter()
    .sort()
    .limitFields();
  const docs = await features.query;

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: docs.length,
    data: {
      docs
    }
  });
});

export const getHm = tryCatch(async (req, res, next) => {
  const query = setStringPadding(req.params.id, 2, 0);
  const features = new APIFeatures(
    Move.find({ hm: query }),
    req.query
  ).limitFields();
  const doc = await features.query;

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: doc.length,
    data: {
      doc
    }
  });
});

export const aliasAllMoves = (req, res, next) => {
  req.query.fields = '-__v,-id,+hm,+tm';
  req.query.sort = 'name';

  next();
};

export const aliasAllMachines = (req, res, next) => {
  req.query.fields = '-__v,-id,+hm,+tm';
  req.query.sort = 'tm,hm';

  next();
};

export const aliasOneMove = (req, res, next) => {
  req.query.fields = '-__v';

  next();
};
