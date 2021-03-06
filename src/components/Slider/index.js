import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Flex, Heading } from '@chakra-ui/layout'

import ReactSlider from 'react-slidy'
import { Button } from '@chakra-ui/button'

const Slider = ({
  heading,
  children,
  theme = 'white',
  sizeHeading = '4xl',
  ...props
}) => {
  const [actualSlide, setActualSlide] = useState(0)

  const isWhite = theme === 'white'

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide)
  }

  return (
    <Flex
      {...props}
      flexDir="column"
      pt={{ md: 56 }}
      py={{ base: 28 }}
      minH={{ base: '800px', lg: 'unset' }}
      bg={isWhite ? 'white' : 'transparent'}
      justify={{ base: 'center', md: 'flex-start' }}
    >
      <Heading
        as="h1"
        mx="auto"
        textAlign="center"
        fontSize={sizeHeading}
        mb={10}
        maxW={{ base: '80%', md: '500px' }}
        color={isWhite ? 'bgPrimary' : 'white'}
      >
        {heading}
      </Heading>
      <ReactSlider
        showArrows={!!0}
        slide={actualSlide}
        doAfterSlide={updateSlide}
      >
        {children}
      </ReactSlider>
      <Flex mt={5} ml={{ base: '10%', md: 0 }} justify={{ md: 'center' }}>
        {Array(3)
          .fill(null)
          .map((_, index) => {
            const active = index === actualSlide
            const bg = isWhite ? 'bgPrimary' : 'white'
            return (
              <Button
                ml={1}
                size="xs"
                key={index}
                rounded="full"
                variant="unstyled"
                bg={active ? bg : 'bgSecundary'}
                transform={`scale(${active ? 1 : 0.7})`}
                onClick={() => updateSlide({ currentSlide: index })}
              />
            )
          })}
      </Flex>
    </Flex>
  )
}

Slider.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node,
  heading: PropTypes.string,
  sizeHeading: PropTypes.any
}

export default Slider
