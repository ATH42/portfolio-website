import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
