import { Box, Container, Heading, Image } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

const Home = () => {
  const bg = useColorModeValue('blue.400', 'red.400')
  const me = `/images/solaire.png`
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
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            alt="dings"
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src={me}
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Home
