import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const VoxelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)
// eslint-disable-next-line no-alert
// eslint-disable-next-line react/display-name
export const VoxelContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    mt={['-20px', '20px', '20px']}
    mb={['-120px', '-160px', '-260px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <VoxelContainer>
      <VoxelSpinner />
    </VoxelContainer>
  )
}

export default Loader
