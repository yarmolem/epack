import React from 'react'
import Image from 'next/image'
// import PropTypes from 'prop-types'
import { Flex, Text, Heading, Box } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

const Hero = (props) => {
  return (
    <Flex
      mx="auto"
      id="inicio"
      minH="100vh"
      align="center"
      justify="center"
      maxW={{ base: '80%' }}
      flexDir={{ base: 'column', md: 'row' }}
      {...props}
    >
      <Flex flexDir="column" align="flex-start">
        <Heading
          as="h1"
          maxW={{ base: '330px', md: '700px' }}
          color="white"
          mb={{ base: 1, ms: 2 }}
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
      <Box pos="relative" w={[300, 350, 400, 600]} h={[300, 350, 400, 600]}>
        <Image src="/1.png" objectFit="contain" layout="fill" />
      </Box>
    </Flex>
  )
}

Hero.propTypes = {}

export default Hero