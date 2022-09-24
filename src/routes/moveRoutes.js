import express from 'express';
import * as moveController from '../controllers/moveController.js';

const router = express.Router();

router.route('/').get(moveController.aliasAllMoves, moveController.getAllMoves);

router
  .route('/tms')
  .get(moveController.aliasAllMachines, moveController.getAllTms);

router
  .route('/hms')
  .get(moveController.aliasAllMachines, moveController.getAllHms);

router
  .route('/tms/:id')
  .get(moveController.aliasAllMachines, moveController.getTm);

router
  .route('/hms/:id')
  .get(moveController.aliasAllMachines, moveController.getHm);

router.route('/:id').get(moveController.aliasOneMove, moveController.getMove);

export default router;
