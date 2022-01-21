import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useUI } from '@contexts/ui.context'

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
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>heahehae hae haeh aeh hea</DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={closeCart}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </ChakraDrawer>
    </>
  )
}

export default Drawer
