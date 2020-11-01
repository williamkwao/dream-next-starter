import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'
import { PageHeader, Button } from 'antd'
import Link from 'next/link'

export default function Home() {
  return (
    <PageHeader
      className="site-page-header"
      title="Skwint"
      extra={[
        <Link href="/login">
          <Button key="1" type="primary">
            Login
          </Button>
        </Link>,
      ]}
    />
  )
}
