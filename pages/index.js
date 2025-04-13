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
  const bg = useColorModeValue('orange.400', 'whiteAlpha.400')
  const textColor = useColorModeValue('whiteAlpha.900', 'gray.800')
  const me = `/images/io_ath.png`
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={bg}
          opacity={0.6}
          p={2}
          mb={6}
          align="center"
          color={textColor}
        >
          Oi, I&apos;m Alexander a Fullstack Developer based in Leipzig!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Alexander Theofilos Hoffmann
            </Heading>
            <p>
              Multi-Interested ( Fullstack Developer / Chef / Philobotanist /
              Astrolad / Dad )
            </p>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
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
        <Section>
          <Heading as="h3" variant="section-title">
            Professional Journey
          </Heading>
          <Divider w={10} m={2} />
          <Paragraph>
            Alexander is a self-taught Frontend Developer and passionate Web
            Designer, dedicated to tackling real-world challenges through
            coding. His unique cognitive drive, combined with a serene and
            focused mindset, enables him to achieve his objectives effectively.
            When not immersed in the digital world, he enjoys adventures with
            daughter. Currently, he is deep diving <strong>C#</strong> and Unity
            Game Development.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
                Explore Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.7}>
          <Heading as="h3" variant="section-title">
            Biography
          </Heading>
          <Divider w={10} m={2} />
          <BioSection>
            <BioYear>1988</BioYear>
            Born in a charming rural town in Niedersachsen, Germany,
            Alexander&apos;s early life was rooted in a close-knit community.
          </BioSection>
          <BioSection>
            <BioYear>2009</BioYear>
            Embarked on his academic path in Düsseldorf, Germany, focusing on
            English and Philosophy, sparking a lifelong love for learning.
          </BioSection>
          <BioSection>
            <BioYear>2010</BioYear>
            Continued his studies in Leipzig, broadening his perspectives and
            deepening his academic pursuits.
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Took on the role of Head Chef at Meins, Deins, Unser, showcasing his
            leadership and culinary skills.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Advanced his culinary career as Executive Chef at PEKAR, further
            refining his expertise.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Transitioned into tech, starting as a Junior Software Developer at
            Sciendis, marking a pivotal career change.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Joyfully welcomed his daughter, Io, into the world, enriching his
            personal life.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Played a key role in developing and launching the Wundera App,
            highlighting his growing tech acumen.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Embraced a personal milestone by earning the title of Elden Lord.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Began managing two major projects at Sciendis, underscoring his
            leadership and project management skills.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Started as a solo developer at BRBase and successfully launched the
            project by the end of the year, demonstrating his entrepreneurial
            spirit and technical prowess.
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Contributed to community-driven projects, emphasizing his commitment
            to using technology for social good.
          </BioSection>
          <BioSection>
            <BioYear>2025</BioYear>
            Celebrates a decade of dynamic career shifts, from culinary arts to
            software development, embodying adaptability and passion.
          </BioSection>
        </Section>

        <Section delay={1}>
          <Heading as="h3">His Passions</Heading>
          <Divider w={2} m={2} />
          <Paragraph>
            Art and miniature painting, music, all things horror, Dungeons &
            Dragons, gaming, fatherhood, weekend coding sessions, fast bikes,
            and lakes.
          </Paragraph>
        </Section>
        <Section delay={1.2}>
          <Box h={20}></Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
