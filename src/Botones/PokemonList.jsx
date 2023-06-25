import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { CardPokemon } from '../components/CardPokemon';
import { Loader } from '../components/Loader';
import Botones from './CerraSesion';


export const PokemonList = () => {
	const { allPokemons, loading, filteredPokemons } =
		useContext(PokemonContext);

	return (
		<>
    
			{loading ? (
				<Loader />
			) : (
				<div className='card-list-pokemon container'>
					{filteredPokemons.length ? (
						<>
							{filteredPokemons.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					) : (
						<>
							{allPokemons.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					)}
				</div>
        
			)}
      <Botones></Botones>
		</>
	);
};