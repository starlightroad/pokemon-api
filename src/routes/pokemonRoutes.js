import express from 'express';
import * as pokemonController from '../controllers/pokemonController.js';

const router = express.Router();

router
  .route('/top-5')
  .get(
    pokemonController.aliasAllPokemon,
    pokemonController.aliasTopPokemon,
    pokemonController.getAllPokemon
  );

router
  .route('/')
  .get(pokemonController.aliasAllPokemon, pokemonController.getAllPokemon);

router
  .route('/:id')
  .get(pokemonController.aliasOnePokemon, pokemonController.getPokemon);

export default router;
