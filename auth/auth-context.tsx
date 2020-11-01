import firebase from './firebase'
import nookies from 'nookies'
import { createContext, useEffect, useState } from 'react'
import React from 'react'

export const AuthContext = createContext<{ user: firebase.User | null }>({
  user: null,
})

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<firebase.User | null>(null)

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null)
        nookies.set(undefined, 'token', '', {})
        return
      }

      const token = await user.getIdToken()
      setUser(user)
      console.log('token', token)
      nookies.set(undefined, 'token', token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}
