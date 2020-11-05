import firebaseAdmin from '../../../server/firebase-admin'
import { admin } from 'firebase-admin/lib/auth'
type UserRecord = admin.auth.UserRecord

export async function getUser(userID: string): Promise<UserRecord> {
  return firebaseAdmin.auth().getUser(userID)
}
