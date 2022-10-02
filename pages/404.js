import Nextlink from 'next/link'
import { Box, Heading, Text, Container, Button } from '@chakra-ui/react'
import Particle from '../components/particle'
const NotFound = () => {
  return (
    <>
      <Container>
        <Heading as="h1">404</Heading>
        <Text>The Page you&apos;re looking for was not found</Text>
        <Particle />
        <Box my={6} align="center">
          <Nextlink href="/">
            <Button colorScheme="blue">Return to Home</Button>
          </Nextlink>
        </Box>
      </Container>
    </>
  )
}

export default NotFound
