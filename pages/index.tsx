import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '@/api'
import { PokemonListResponse, SmallPokemon } from '@/interfaces'
import { Layout } from '@/components/layouts'
import { Grid } from '@nextui-org/react'
import { PokemonCard } from '@/components/pokemon'

interface IProps {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<IProps> = ({ pokemons }) => {
  return (
    <Layout title='Listado de pokemons'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,
    id: i + 1
  }));

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage