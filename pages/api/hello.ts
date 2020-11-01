// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import firebaseAdmin from '../../server/firebase-admin'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const token = req.headers?.token.toString()
  console.log('request mamba', req.headers)
  res.statusCode = 200
  try {
    const user = await firebaseAdmin.auth().verifyIdToken(token)
    res.json({ name: 'John Doe', email: user.email })
  } catch (error) {
    res.statusCode = 401
    throw error
  }
}
