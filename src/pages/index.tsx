import Layout from '@components/layout/layout'
import HeroBlock from '@containers/HeroBlock'
import TestimonialCarousel from '@containers/Testimonials'
import { Container } from '@chakra-ui/react'
import AvailableProducts from "@components/product/available-products";
import FeaturesBlock from "@containers/FeaturesBlock";

const Home = () => {
  return (
    <Container maxW='1920px' p={{ base: "16px", md: "32px", lg: "40px" }}>
      <HeroBlock />
      <AvailableProducts />
      <FeaturesBlock />
      <TestimonialCarousel sectionHeading="Testimonials" />
    </Container>
  )
}

Home.Layout = Layout

export default Home
