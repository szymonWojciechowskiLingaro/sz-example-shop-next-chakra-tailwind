import { useNewArrivalProductsQuery } from '@framework/product/get-all-new-arrival-products'
import ProductsBlock from '@containers/ProductsBlock'

export default function NewArrivalsProductFeed() {
  const { data, isLoading, error } = useNewArrivalProductsQuery({ limit: 10 })
  return (
    <ProductsBlock
      sectionHeading="Productos"
      products={data}
      loading={isLoading}
      error={error?.message}
      uniqueKey="new-arrivals"
    />
  )
}
