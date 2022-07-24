import Link from 'next/link'
import { Image } from '@chakra-ui/react'
import { Text,  useColorModeValue, Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 1.8rem;
display: inline-flex
align-items: center;
height: 30px;
line-height: 20px;
padding:10px;

&:hover img {
    transform: rotate(35deg);
    transition: transform 0.1s ease-in-out;
}`

const Logo = () => {
  const flask = `/images/solaire.png`

  return (
    <Link href='/'>
      <a>
        <LogoBox>
          <Flex>
            <Image
              w={10}
              borderColor='whiteAlpha.800'
              borderWidth={2}
              alt='dings'
              borderStyle='solid'
              borderRadius='full'
              src={flask}
            />
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              fontFamily='M PLUS Rounded 1c'
              fontWeight='bold'
              ml={3}
              alignSelf='center'
            >
              Alexander Theofilos Hoffmann
            </Text>
          </Flex>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
