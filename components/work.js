import Nextlink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => {
  return (
    <>
      <Box>
        <Nextlink href="/works">
          <Link>Works</Link>
        </Nextlink>
      </Box>
      <span>
        &nbsp;
        <ChevronRightIcon />
        &nbsp;
      </span>
      <Heading as="h3" display="inline-block" fontSize={20} mb={4}>
        {children}
      </Heading>
    </>
  )
}

export const WorkImage = ({ src, alt }) => {
  return <Image borderRadius="lg" w="full" src={src} alt={alt} my={2} />
}

export const Meta = ({ children }) => {
  return (
    <Badge colorScheme="green" mr={2}>
      {children}
    </Badge>
  )
}
