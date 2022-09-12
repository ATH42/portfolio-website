import Nextlink from 'next/link'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Roundtable Hold">
      <Container>
        <Title>
          Roundtable Hold (Contributor)<Badge>2022</Badge>
        </Title>
        <P>
          An easy to use progression Tracker with a holistic approach for all
          things Elden Ring.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://roundtablehold.net">
              https://roundtablehold.net/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web-Application, iOS, Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, yaml, Github Pages</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
          </ListItem>
        </List>
        <WorkImage
          src="/images/works/roundtable-1.png"
          alt="elden ring scenery"
        />
        <WorkImage
          my={2}
          src="/images/works/roundtable-2.png"
          alt="elden ring scenery"
        />
        <WorkImage
          src="/images/works/roundtable-3.png"
          alt="elden ring scenery"
        />
      </Container>
    </Layout>
  )
}
export default Work
