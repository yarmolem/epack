import React from 'react'
import Image from 'next/image'
// import PropTypes from 'prop-types'
import { Flex, Text, Heading, Box } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

const Hero = (props) => {
  return (
    <Flex
      {...props}
      mx="auto"
      zIndex="2"
      mt="-65px"
      id="inicio"
      align="center"
      justify="center"
      bgColor="bgPrimary"
      bgBlendMode="darken"
      bgPosition={{ lg: '100% 30%' }}
      minH={{ base: 'calc(100vh + 50px)' }}
      bgSize={{ base: 'cover', lg: '100% 80%' }}
      bgRepeat={{ base: 'no-repeat', lg: 'repeat' }}
      bgImage={{ base: 'url(slide1_cp.webp)', lg: 'url(slide2.png)' }}
    >
      <Flex
        align="center"
        justify="center"
        maxW={{ base: '90%' }}
        flexDir={{ base: 'column', md: 'row' }}
        transform={{ base: 'translateY(-20px)', md: 'translateY(-50px)' }}
      >
        <Flex maxW={{ base: '80%' }} flexDir="column" align="flex-start">
          <Heading
            as="h1"
            color="white"
            mb={{ base: 1, ms: 2 }}
            maxW={{ base: '330px', md: '700px' }}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', xl: '6xl' }}
          >
            BOLSAS DE PAPEL BIODEGRADABLES
          </Heading>
          <Text
            mb={1}
            color="white"
            fontSize="lg"
            fontWeight="400"
            display={{ base: 'block', sm: 'none' }}
          >
            Bolsas con asa, sin asa, Doy Pack, Cajas, Hang tag, Scker
          </Text>
          <Heading color="bgSecundary" size="lg" mb={{ base: 2, ms: 3 }}>
            Pedido mínimo: 100und
          </Heading>
          <Button
            fontSize="lg"
            colorScheme="secundary"
            display={{ base: 'none', sm: 'block' }}
          >
            Contáctanos
          </Button>
        </Flex>
        <Box pos="relative" w={[300, 350, 400, 600]} h={[250, 350, 400, 600]}>
          <Image src="/1.png" objectFit="contain" layout="fill" />
        </Box>
      </Flex>
    </Flex>
  )
}

Hero.propTypes = {}

export default Hero
