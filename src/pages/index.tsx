import type { NextPage } from 'next'
import { Text } from '@chakra-ui/react'
import Layout from '@components/layout/layout'
import HeroBlock from '@containers/HeroBlock'
import TestimonialCarousel from '@containers/Testimonials'
import { Container } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <Container maxW='1920px' p={{ base: "16px", md: "32px", lg: "40px" }}>
      <HeroBlock />
      <Text fontSize={{ base: '12px', sm: '30px', md: '40px', lg: '56px', '2xl': '100px' }}>
        This is responsive text
      </Text>
      <TestimonialCarousel sectionHeading="Testimonials" />
    </Container>
  )
}

Home.Layout = Layout

export default Home
