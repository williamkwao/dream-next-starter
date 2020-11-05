import { admin } from 'firebase-admin/lib/auth'
import { getUser } from '../service/user'

type context = {
  user?: admin.auth.DecodedIdToken
}

export const resolvers = {
  Query: {
    me: async (_parent, _args, ctx: context, _info) => {
      const decodedToken = ctx?.user
      if (!decodedToken) {
        return null
      }
      const user = await getUser(decodedToken.uid)

      return {
        first: user.displayName,
        email: user.email,
      }
    },
  },
}
