import React from 'react'
// import PropTypes from 'prop-types'
import { Flex, Text, SimpleGrid, Box } from '@chakra-ui/layout'
import { motion } from 'framer-motion'
import InView from 'react-intersection-observer'

const Noticias = (props) => {
  const parser = (i) => parseFloat(`0.${i}`)
  return (
    <Flex
      mx="auto"
      flexDir="column"
      whiteSpace="normal"
      justify="flex-start"
      maxW={{ base: '80%', md: '1000px' }}
      {...props}
    >
      <Box display={{ base: 'block', md: 'none' }}>
        <SimpleGrid
          gap={2}
          templateColumns={{
            base: 'repeat(2, minmax(0, 1fr))',
            md: 'repeat(3, minmax(0, 1fr))'
          }}
        >
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <Flex
                key={i}
                w="full"
                bg="bgSecundary"
                height={{ base: '150px', md: '200px' }}
              >
                <Text color="#000">noticias</Text>
              </Flex>
            ))}
        </SimpleGrid>
      </Box>
      <InView>
        {({ ref, inView }) => (
          <Box ref={ref} display={{ base: 'none', md: 'block' }}>
            <SimpleGrid
              gap={2}
              templateColumns={{
                base: 'repeat(2, minmax(0, 1fr))',
                md: 'repeat(3, minmax(0, 1fr))'
              }}
            >
              {Array(3)
                .fill(null)
                .map((_, i) => (
                  <Flex
                    as={motion.div}
                    initial={{ y: 60, opacity: 0 }}
                    animate={
                      inView
                        ? { y: 0, opacity: 1, transition: { delay: parser(i) } }
                        : { y: 60, opacity: 0 }
                    }
                    key={i}
                    w="full"
                    bg="bgSecundary"
                    height={{ base: '150px', md: '200px' }}
                  >
                    <Text color="black">noticias</Text>
                  </Flex>
                ))}
            </SimpleGrid>
          </Box>
        )}
      </InView>
    </Flex>
  )
}

Noticias.propTypes = {}

export default Noticias
