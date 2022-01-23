import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useUI } from '@contexts/ui.context'
import Cart from '@components/cart'

function Drawer() {
  const { displayCart, closeCart } = useUI()
  const btnRef = useRef(null)

  return (
    <>
      <ChakraDrawer
        isOpen={displayCart}
        placement="right"
        onClose={closeCart}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>

          <DrawerBody>
            <Cart />
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </>
  )
}

export default Drawer
