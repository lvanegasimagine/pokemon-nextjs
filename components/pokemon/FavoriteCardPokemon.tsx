import React from 'react'
import { Grid, Card } from '@nextui-org/react'
import { useRouter } from 'next/router'

interface IPokemonCardFavoriteProps {
  pokemonId: number
}

export const FavoriteCardPokemon: React.FC<IPokemonCardFavoriteProps> = ({ pokemonId }) => {

  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`)
  }
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId}>
      <Card isHoverable isPressable css={{ padding: 10 }} onPress={onFavoriteClicked}>
        <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`} width={'100%'} height={140} />
      </Card>
    </Grid>
  )
}
