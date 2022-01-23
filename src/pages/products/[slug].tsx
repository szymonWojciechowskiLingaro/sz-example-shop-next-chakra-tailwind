import Container from '@components/ui/container'
import Layout from '@components/layout/layout'
import ProductSingleDetails from '@components/product/product-single-details'
import RelatedProducts from '@containers/RelatedProducts'

export default function ProductPage() {
  return (
    <Container>
      <ProductSingleDetails />
      <RelatedProducts sectionHeading="Productos similares" />
    </Container>
  )
}

ProductPage.Layout = Layout
