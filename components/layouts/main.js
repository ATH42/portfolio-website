import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import NoSsr from '../no-ssr'
import Navbar from '../navbar.js'
import VoxelAnimation from '../voxel-animation'

const Main = ({ children, router }) => {
  return (
    <Box as='main'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Alexander Theofilos Hoffmann - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW='container.md'>
        <NoSsr>
          <VoxelAnimation />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main
