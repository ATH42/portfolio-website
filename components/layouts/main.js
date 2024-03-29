import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar.js'
import dynamic from 'next/dynamic'
import Loader from '../voxelLoader'

const LazyVoxel = dynamic(() => import('../voxel-animation'), {
  ssr: false,
  loading: () => <Loader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Alexander Theofilos Hoffmann - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md">
        <LazyVoxel />
        {children}
      </Container>
    </Box>
  )
}

export default Main
