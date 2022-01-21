import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FC } from 'react'

type ModalProps = {
  isOpen?: boolean
  children?: React.ReactNode
  onClose: () => void
}

const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const size = useBreakpointValue({ base: 'full' ,sm: '2xl', md: '3xl', lg: '5xl', xl: '6xl' })

  return (
    <ChakraModal isOpen={!!isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent >
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />

        <ModalBody>{children}</ModalBody>

        <ModalFooter>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal
