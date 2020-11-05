import { userInfo } from 'os'
import React from 'react'
import { useAuth } from '../auth/use-auth'
import { PageHeader, Button } from 'antd'
import { auth } from '../auth/firebase'
import { useRouter } from 'next/router'
import nookies from 'nookies'
import { ApolloQueryResult, gql } from '@apollo/client'

import { GetServerSidePropsContext } from 'next'
import { getSSRClient } from '../lib/apollo-client'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = nookies.get(context)
  const client = getSSRClient({ token: cookies?.token })
  const redirectToLogin = () => {
    context.res.writeHead(302, { Location: '/login' })
    context.res.end()
  }
  const res = await client
    .query({
      query: gql`
        query me {
          me {
            email
          }
        }
      `,
    })
    .catch(() => {
      redirectToLogin()
    })

  if (res && res?.data?.me) {
    const data = res?.data?.me
    return { props: { res: data } }
  }
  redirectToLogin()
  return { props: { res: null } }
}
export default function home({ res }) {
  const authContext = useAuth()
  const router = useRouter()

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Skwint"
        extra={[
          <Button
            key="1"
            type="primary"
            onClick={async () => {
              await auth.signOut()
              router.push('/')
            }}
          >
            Logout
          </Button>,
        ]}
      />
      <h1>Welcome {res?.email}</h1>
    </>
  )
}
