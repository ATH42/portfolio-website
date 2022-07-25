import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  Button
} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'

const Home = () => {
  const bg = useColorModeValue('blackAlpha.100', 'whiteAlpha.400')
  const me = `/images/me.png`
  return (
    <Layout>
      <Container>
        <Box borderRadius='lg' bg={bg} p={2} mb={6} align='center'>
          Hello, I&apos;m Alexander a junior Frontend Developer based in
          Leipzig!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
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
            align='center'
          >
            <Image
              borderColor='whiteAlpha.800'
              borderWidth={2}
              alt='dings'
              borderStyle='solid'
              maxWidth='100px'
              display='inline-block'
              borderRadius='full'
              src={me}
            />
          </Box>
        </Box>
        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            Work
          </Heading>
          <Divider w={10} m={2} />
          <Paragraph>
            Alexander is a self taught Frontend Developer and enthusiastic
            Web-Designer with a passion for solving Real World Problems with
            code. His distinct need for cognition in tandem with a calm and
            focused mind let him reach goals efficiently. When not online, he is
            probably out being partners in Crime with his 1 1/2 year old
            daughter. Currently, he is working on an Online Store called{' '}
            {'Studio Scherben'}.{/*TODO add linl */}
          </Paragraph>
          <Box align='center' my={4}>
            <NextLink href='/works'>
              <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.7}>
          <Heading as='h3' variant='section-title'>
            Bio
          </Heading>
          <Divider w={10} m={2} />
          <BioSection>
            <BioYear>1988</BioYear>
            Born in a small rural town in Niedersachsen, Germany
          </BioSection>
          <BioSection>
            <BioYear>2009</BioYear>
            Started English and Philosophy Minor in Düsseldorf, Germany
          </BioSection>
          <BioSection>
            <BioYear>2010</BioYear>
            Continued studies in Leipzig
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Became Chef de Cuisine at Meins, Deins, Unser
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Chef de Cuisine at PEKAR
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Landed first Job as Junior Software Developer at Sciendis
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            His daughter Io was born 🪐
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Helped Build and release Wundera App
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Became Elden Lord
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Is maintaining and managing 2 major projects at sciendis
          </BioSection>
        </Section>
        <Section delay={1}>
          <Heading as='h3'>He 💕&apos;s</Heading>
          <Divider w={2} m={2} />
          <Paragraph>
            Art and Painting Miniatures, Music, all things Horro, Dungeons &
            Dragons, Gaming, Being a Dad, Coding (specially on weekends), fast
            bikes, lakes.
          </Paragraph>
          <Paragraph></Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
