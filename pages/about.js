import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
const About = () => {
  return (
    <Box>
      <Image w="full" borderRadius="lg" src="/images/io-alex.png" alt="ath" />

      <Text paddingY={10} paddingX={10}>
        Alexander Theofilos Hoffmann, or ATH for short, embodies a dynamic
        fusion of backgrounds, transitioning from a successful career as a chef
        to a thriving role in software engineering. ATH&apos;s interests are as
        varied as they are passionate: from collecting comics and tabletop game
        figurines to immersing in D&D adventures, exploring nature through
        biking, hiking, and camping. An advocate for outdoor bliss, ATH
        cherishes animals and plants of all sorts and sizes. More often than not
        ATH deep dives into enthralling rabbit holes of unconventional topics,
        showcasing a vibrant curiosity and diverse array of interests.{' '}
      </Text>
    </Box>
  )
}

export default About
