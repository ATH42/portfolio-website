import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Ypnos Ceramics">
      <Container>
        <Title>
          Ypnos Ceramics<Badge></Badge>
        </Title>
        <P>
          A minimalist approach to an e-commerce solution for handmade ceramics.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://studioscherben-c97xnl2ho-ath42.vercel.app/">
              https://studioscherben-c97xnl2ho-ath42.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web-Application</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Hydrogen, React(TS), GraphQL</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
          </ListItem>
        </List>
        <WorkImage src="/images/works/ypnos-1.png" alt="ceramics" />
        <WorkImage src="/images/works/ypnos-2.png" alt="ceramics" />
        <WorkImage src="/images/works/ypnos-3.png" alt="ceramics" />
      </Container>
    </Layout>
  )
}
export default Work
