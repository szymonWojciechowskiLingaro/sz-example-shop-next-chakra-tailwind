import type { NextPage } from 'next'
import Layout from '@components/layout/layout'
import HeroBlock from '@containers/HeroBlock'
import TestimonialCarousel from '@containers/Testimonials'
import { Container } from '@chakra-ui/react'
import NewArrivalsProductFeed from "@components/product/new-arrivals-product-feed";
import FeaturesBlock from "@containers/FeaturesBlock";

const Home: NextPage = () => {
  return (
    <Container maxW='1920px' p={{ base: "16px", md: "32px", lg: "40px" }}>
      <HeroBlock />
      <NewArrivalsProductFeed />
      <FeaturesBlock />
      <TestimonialCarousel sectionHeading="Testimonials" />
    </Container>
  )
}

Home.Layout = Layout

export default Home
