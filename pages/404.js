import Nextlink from 'next/link'
import { Box, Heading, Text, Container, Button } from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text>The Page you&apos;re looking for was not found</Text>
      <Box my={6} align="center">
        <Nextlink href="/">
          <Button colorScheme="blue">Return to Home</Button>
        </Nextlink>
      </Box>
    </Container>
  )
}

export default NotFound
