import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { CloseIcon } from '@chakra-ui/icons'
import { Slide } from '@chakra-ui/transition'
import { IconButton } from '@chakra-ui/button'
import {
  Box,
  Text,
  Stack,
  Heading,
  Divider,
  SimpleGrid
} from '@chakra-ui/layout'
import useDrawer from '../../hooks/useDrawer'

const Bancos = () => {
  const { bancosDrawer: isOpen, onClose } = useDrawer()

  return (
    <Slide direction="top" in={isOpen}>
      <Box
        w="full"
        pt="70px"
        pb="105px"
        h="100vh"
        bg="white"
        pos="relative"
        overflow="auto"
      >
        <IconButton
          mb={5}
          right={10}
          pos="absolute"
          icon={<CloseIcon />}
          style={{ zIndex: 5 }}
          colorScheme="secundary"
          top="calc(82px + 10px)"
          onClick={() => onClose('bancosDrawer')}
        />

        <Box pos="relative" w="full" h="180px">
          <Image src="/header-bank.png" layout="fill" />
        </Box>

        <Box maxW="90%" mx="auto" mt={8}>
          <Divider bg="bgSecundary" h={0.5} my={2} />

          <Stack divider={<Divider bg="bgSecundary" h={0.5} />}>
            <Box>
              <SimpleGrid gap={5} templateColumns="repeat(2, minmax(0, 1fr))">
                <Box pos="relative" w="full" h="50px">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src="/logo-interbank.png"
                  />
                </Box>
                <Box>
                  <Heading color="greenInter" fontSize="md" textAlign="right">
                    CUENTA CORRIENTE
                  </Heading>
                  <Heading color="blueInter" fontSize="lg" textAlign="right">
                    200-3002052537
                  </Heading>
                </Box>
              </SimpleGrid>
              <Text fontWeight="semibold" color="gray.500">
                T: Wali Asociados - R.U.C: 20605257161
              </Text>
            </Box>
            <Box>
              <SimpleGrid gap={5} templateColumns="1fr 2fr">
                <Box pos="relative" w="full" h="50px">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src="/logo-bcp.png"
                  />
                </Box>
                <Box>
                  <Heading color="orangeBcp" fontSize="md" textAlign="right">
                    CUENTA AHORROS
                  </Heading>
                  <Heading color="blueBcp" fontSize="lg" textAlign="right">
                    192-01799922-0-01
                  </Heading>
                </Box>
              </SimpleGrid>
              <Text fontWeight="semibold" color="gray.500">
                T: Wayner Chávez Niño
              </Text>
            </Box>
            <Box>
              <SimpleGrid gap={5} templateColumns="1fr 2fr">
                <Box pos="relative" w="full" h="50px">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src="/logo-bbva.png"
                  />
                </Box>
                <Box>
                  <Heading color="blueBBVA" fontSize="md" textAlign="right">
                    CUENTA AHORROS
                  </Heading>
                  <Heading color="blueBBVA" fontSize="lg" textAlign="right">
                    0011-0175-0200640503
                  </Heading>
                </Box>
              </SimpleGrid>
              <Text fontWeight="semibold" color="gray.500">
                T: Wayner Chávez Niño
              </Text>
            </Box>
            <Box>
              <SimpleGrid templateColumns="minmax(0, 1fr) 190px">
                <Box pos="relative" w="full" h="50px">
                  <Image
                    layout="fill"
                    objectFit="contain"
                    src="/logo-bancos.png"
                  />
                </Box>
                <Heading color="blue.700" fontSize="3xl" textAlign="right">
                  923 503 529
                </Heading>
              </SimpleGrid>
              <Text fontWeight="semibold" color="gray.500">
                T: Wayner Chávez Niño
              </Text>
            </Box>
          </Stack>
          <Divider bg="bgSecundary" h={0.5} my={2} />
        </Box>
      </Box>
    </Slide>
  )
}

Bancos.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default Bancos