import express from 'express';
import pokemonRouter from './pokemonRoutes.js';
import moveRouter from './moveRoutes.js';
// import testRouter from '../../tests/routes/testRoutes.js';

const router = express.Router();

router.use('/pokemon', pokemonRouter);
router.use('/moves', moveRouter);
// router.use('/test', testRouter);

export default router;
