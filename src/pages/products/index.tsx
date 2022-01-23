import Container from '@components/ui/container'
import Layout from '@components/layout/layout'
import AvailableProducts from '@components/product/available-products'
import FeaturesBlock from "@containers/FeaturesBlock";

export default function Products() {
  return (
    <>
      <Container>
        <div className={`flex pt-8 pb-16 lg:pb-20`}>
          <div className="w-full lg:-ms-9">
            <AvailableProducts />
          </div>
        </div>
        <FeaturesBlock />
      </Container>
    </>
  )
}

Products.Layout = Layout
