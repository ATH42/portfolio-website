import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <IconButton
      mt={6}
      aria-label="Toggle theme"
      colorScheme={useColorModeValue('purple', 'yellow')}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    />
  )
}

export default ThemeToggle
