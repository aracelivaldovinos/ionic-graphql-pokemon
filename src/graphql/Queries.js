import {gql} from '@apollo/client';

export const GET_POKEMON_QUERY = gql `
query{
  allPokemon{
    name
    height
    weight
    color
    capture_rate
    growth_rate
  }
}
`