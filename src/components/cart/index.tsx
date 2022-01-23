import Scrollbar from "@components/common/Scrollbar";
import { useCart } from '@contexts/cart/cart.context'
import { motion } from 'framer-motion'
import { fadeInOut } from '@utils/motion/fade-in-out'
import { useUI } from '@contexts/ui.context'
import usePrice from '@framework/product/use-price'
import CartItem from './cart-item'
import EmptyCart from './empty-cart'
import Link from '@components/ui/link'
import cn from 'classnames'
import { ROUTES } from '@settings/routes'

export default function Index() {
  const { closeCart } = useUI()
  const { items, total, isEmpty } = useCart()
  const { price: cartTotal } = usePrice({
    amount: total,
    currencyCode: 'USD',
  })
  return (
    <div className="flex flex-col w-full h-full justify-between">
      {!isEmpty ? (
        <Scrollbar className="cart-scrollbar w-full flex-grow">
          <div className="w-full px-5 md:px-7">
            {items?.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
        </Scrollbar>
      ) : (
        <motion.div
          layout
          initial="from"
          animate="to"
          exit="from"
          variants={fadeInOut(0.25)}
          className="px-5 md:px-7 pt-8 pb-5 flex justify-center flex-col items-center"
        >
          <EmptyCart />
          <h3 className="text-lg text-heading font-bold pt-8">Empty Cart</h3>
        </motion.div>
      )}

      <div
        className="flex flex-col px-5 md:px-7 pt-2 pb-5 md:pb-7"
        onClick={closeCart}
      >
        <Link
          href={isEmpty === false ? ROUTES.CHECKOUT : '/'}
          className={cn(
            'w-full px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded-md text-sm sm:text-base text-white focus:outline-none transition duration-300 hover:bg-gray-600',
            {
              'cursor-not-allowed bg-gray-400 hover:bg-gray-400': isEmpty,
            }
          )}
        >
          <span className="w-full pe-5 -mt-0.5 py-0.5">
            Proceed to checkout
          </span>
          <span className="ms-auto flex-shrink-0 -mt-0.5 py-0.5">
            <span className="border-s border-white pe-5 py-0.5" />
            {cartTotal}
          </span>
        </Link>
      </div>
    </div>
  )
}
