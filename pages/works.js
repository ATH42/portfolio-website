import React from 'react'
import { Container, SimpleGrid, Heading } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'

import thumbnail from '../public/images/iu.png'
import burger from '../public/images/burger.png'

const Works = () => {
  return (
    <Container>
      <Heading as='h3' fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id='elden'
            title='Roundtablehold.net'
            thumbnail={thumbnail}
          >
            A progression Tracker for Elden Ring
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id='dnd' title='bYourger' thumbnail={burger}>
            create your burger with exchangable stories
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id='okgo' title='bYourger' thumbnail={burger}>
            create your burger with exchangable stories
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
