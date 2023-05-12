import React, { useEffect, useState } from 'react'
import { NoFavorites } from '@/components/ui'
import { Layout } from '@/components/layouts'
import { pokemons } from '@/utils'
import { FavoritePokemons } from '@/components/pokemon'

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(pokemons());
  }, [])


  return (
    <Layout title='Pokemon Favoritos'>
      {favoritePokemons.length === 0 ? <NoFavorites /> : <FavoritePokemons pokemons={favoritePokemons} />}
    </Layout>
  )
}

export default FavoritesPage