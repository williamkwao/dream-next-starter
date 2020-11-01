import '../styles/globals.css'
import 'antd/dist/antd.css'

import { AuthProvider } from '../auth/auth-context'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
