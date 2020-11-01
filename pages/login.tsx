import React, { useState } from 'react'
import { Form, Input, Button, Card, message } from 'antd'
import { Layout } from 'antd'
import firebase from '../auth/firebase'
import { useRouter } from 'next/router'

const tailLayout = {
  wrapperCol: {},
}

export default function login() {
  const router = useRouter()

  const onFinish = async (values) => {
    const { email, password } = values
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      router.push('/home')
    } catch (error) {
      message.error(error.message)
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card style={{ padding: 20, width: 400 }}>
        <Form
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Email" type="email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" block size="large">
              Log In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
