import { userInfo } from 'os'
import React from 'react'
import { useAuth } from '../auth/use-auth'
import { PageHeader, Button } from 'antd'
import { auth } from '../auth/firebase'
import { useRouter } from 'next/router'
import nookies from 'nookies'

import { GetServerSidePropsContext } from 'next'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log('context here', context.req)
  const cookies = nookies.get(context)

  const res = await (
    await fetch('http://localhost:3000/api/hello', {
      credentials: 'include',
      headers: {
        token: cookies.token,
      },
    })
  )
    .json()
    .catch(() => {
      context.res.writeHead(302, { Location: '/login' })
      context.res.end()
    })
  console.log('res', res)
  return { props: { res } }
}
export default function home({ res }) {
  const authContext = useAuth()
  const router = useRouter()
  console.log('res', res)

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
