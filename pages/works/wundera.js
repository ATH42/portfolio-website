import Nextlink from 'next/link'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Wundera">
      <Container>
        <Title>
          Wundera<Badge>2021/2022</Badge>
        </Title>
        <P>
          WUNDERA® is a mobile and easy-to-use app for the documentation of
          chronic wounds, which helps you to quickly, easily and uncomplicatedly
          record chronic wounds and to store and forward them in a
          DSGVO-compliant manner.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://wundera.health">
              https://wundera.health/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web-Application, iOS, Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack | Web-App</Meta>
            <span>
              Vite, React(TS), React-Navigation, React-Table, Tailwind CSS
            </span>
          </ListItem>
          <ListItem>
            <Meta>Stack | Mobile-App</Meta>
            <span>Expo, React-Native(TS), React-Navigation, Redux</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
          </ListItem>
        </List>
        <WorkImage src="/images/works/wun-1.png" alt="wundera" />
        <WorkImage src="/images/works/wun-2.png" alt="wundera" />
        <WorkImage src="/images/works/wun-3.png" alt="wundera" />
        <WorkImage src="/images/works/wun-4.png" alt="wundera" />
        <WorkImage src="/images/works/wun-5.png" alt="wundera" />
        <WorkImage src="/images/works/wun-6.png" alt="wundera" />
      </Container>
    </Layout>
  )
}
export default Work
