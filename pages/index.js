import { Box, Container, Heading, Image } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

const Home = () => {
  const bg = useColorModeValue('blue.400', 'red.400')
  return (
    <Container>
      <Box borderRadius="lg" bg={bg} p={2} mb={6} align="center">
        Hello, I&apos;m Alexander a junior Frontend Developer based in Leipzig{' '}
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Alexander Theofilos Hoffmann
          </Heading>
          <p>
            Multi-Interested ( Junior Developer / Chef / Philobotanist / Dad )
          </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
