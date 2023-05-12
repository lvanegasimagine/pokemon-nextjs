import React from 'react';
import { Grid } from '@nextui-org/react'
import { FavoriteCardPokemon } from './FavoriteCardPokemon'

interface IPokemonsProps {
  pokemons: number[]
}

export const FavoritePokemons: React.FC<IPokemonsProps> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {
        pokemons.map((id: number) => <FavoriteCardPokemon key={id} pokemonId={id} />)
      }
    </Grid.Container>
  )
}
