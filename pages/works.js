import React from 'react'
import { Container, SimpleGrid, Heading } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'

import thumbnail from '../public/images/iu.png'
import wun from '../public/images/adaptive-icon.png'
import poke from '../public/images/poke.png'
import ypnos from '../public/images/ypnos.png'

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="roundtable"
            title="Roundtablehold.net"
            thumbnail={thumbnail}
          >
            A progression Tracker for Elden Ring.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="pokedex" title="Pokedex" thumbnail={poke}>
            A paginated Pokedex
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="wundera" title="Wundera" thumbnail={wun}>
            An app to simplify documentation of chronic wounds.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="ypnos" title="Ypnos Ceramics" thumbnail={ypnos}>
            An e-commerce solution for ceramics.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
