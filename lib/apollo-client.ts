import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
const URI = 'http://localhost:3000/api/graphql'

export function getSSRClient({ token }) {
  return new ApolloClient({
    uri: URI,
    cache: new InMemoryCache(),
    credentials: 'same-origin',
    headers: {
      token: token,
    },
  })
}
export const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache(),
})
