import React from 'react'
import { Box, Heading, Text, Flex, AspectRatio } from '@chakra-ui/layout'

const UbicanosDesk = () => {
  return (
    <Box id="ubicanos" w="full" bg="white">
      <Flex
        w={{ base: '90%' }}
        mx="auto"
        flexDir="column"
        align={{ base: 'center', xl: 'flex-start' }}
      >
        <Box>
          <Heading mb={2} color="primary.500">
            Ubícanos en:
          </Heading>
          <Text fontSize={{ base: 'lg' }} mb={6} color="secundary.500">
            “ingresar al Correo Corporativo <br />
            ingresar al Correo Corporativo”
          </Text>
        </Box>
        <Flex>
          <Box maxW="300px" mb={6} mr={5}>
            <AspectRatio ratio={1} mb={4}>
              <iframe
                loading="lazy"
                // style={{ display: isOpen ? 'block' : 'none' }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.890185810459!2d-77.00020268578656!3d-12.119665546559304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7f07aacf4bd%3A0xc51e56a54e01242b!2sAv.%20Aviaci%C3%B3n%204557%2C%20Surquillo%2015038!5e0!3m2!1ses!2spe!4v1623368284298!5m2!1ses!2spe"
              />
            </AspectRatio>

            <Text textAlign="center" color="bgPrimary" fontWeight="semibold">
              San Miguel:
            </Text>
            <Text textAlign="center" color="bgSecundary" fontWeight="semibold">
              C.C. Shopping Center Av. La Mar 2275 Int. 77
            </Text>
          </Box>
          <Box maxW="300px" mb={6}>
            <AspectRatio ratio={1} mb={4}>
              <iframe
                loading="lazy"
                // style={{ display: isOpen ? 'block' : 'none' }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.890185810459!2d-77.00020268578656!3d-12.119665546559304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7f07aacf4bd%3A0xc51e56a54e01242b!2sAv.%20Aviaci%C3%B3n%204557%2C%20Surquillo%2015038!5e0!3m2!1ses!2spe!4v1623368284298!5m2!1ses!2spe"
              />
            </AspectRatio>
            <Text textAlign="center" color="bgPrimary" fontWeight="semibold">
              San Miguel:
            </Text>
            <Text textAlign="center" color="bgSecundary" fontWeight="semibold">
              C.C. Shopping Center Av. La Mar 2275 Int. 77
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default UbicanosDesk