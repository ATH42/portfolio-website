import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
const About = () => {
  return (
    <Box position="relative">
      <Image w="full" borderRadius="lg" src="/images/IMG_2257.png" alt="ath" />
      <Text
        position="absolute"
        transform="translate(-0%, -280%)"
        fontSize="3xl"
        fontWeight="bold"
        color="blue.300"
        p={4}
        textAlign="center"
        textDecor={'blink'}
      >
        Alexander Theofilos Hoffmann, or ATH, is driven by an insatiable
        curiosity to understand the world around him. This quest for knowledge
        fuels his transition from a culinary career to software engineering. ATH
        finds inspiration in the intricacies of nature and the vastness of the
        cosmos, constantly seeking to unravel the mysteries they hold.
      </Text>
    </Box>
  )
}

export default About
