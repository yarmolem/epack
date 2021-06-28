import React, { useEffect, useState } from 'react'
import d from 'next/dynamic'
import PropTypes from 'prop-types'
import { Flex, Heading } from '@chakra-ui/layout'

import { Button } from '@chakra-ui/button'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useInView } from 'react-intersection-observer'

import useDrawer from '../../hooks/useDrawer'
import { SliderLoader } from './SliderLoader'

const ReactSlider = d(() => import('react-slidy'), {
  ssr: false,
  loading: SliderLoader
})

const Slider = ({
  heading,
  children,
  theme = 'white',
  sizeHeading = '4xl',
  ...props
}) => {
  const { loadChunks } = useDrawer()
  const { ref, inView } = useInView()
  const [load, setLoad] = useState(false)
  const [actualSlide, setActualSlide] = useState(0)
  const [is670pxOrLess] = useMediaQuery('(max-height: 670px)')

  useEffect(() => {
    if (inView) setLoad(true)
    if (loadChunks) setLoad(true)
  }, [inView, loadChunks])

  const isWhite = theme === 'white'

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide)
  }

  return (
    <Flex
      {...props}
      ref={ref}
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
        mb={is670pxOrLess ? 5 : 10}
        maxW={{ base: '80%', md: '500px' }}
        color={isWhite ? 'bgPrimary' : 'white'}
      >
        {heading}
      </Heading>
      {load ? (
        <ReactSlider
          showArrows={!!0}
          slide={actualSlide}
          doAfterSlide={updateSlide}
        >
          {children}
        </ReactSlider>
      ) : null}
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
