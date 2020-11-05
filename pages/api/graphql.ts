import { ApolloServer, Config } from 'apollo-server-micro'
import firebaseAdmin from '../../server/firebase-admin'
import { resolvers } from './resolvers'
import { gql } from 'apollo-server-micro'

const typeDefs = gql`
  type User {
    first: String
    email: String
  }

  type Query {
    me: User
  }
`
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (context) => {
    const token = context.req.headers?.token
    const user = token ? await firebaseAdmin.auth().verifyIdToken(token) : null

    return { ...context, user: user }
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
