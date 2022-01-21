import { useUI } from '@contexts/ui.context'
import dynamic from 'next/dynamic'
import Modal from '@components/common/modal'
const ProductPopup = dynamic(() => import('@components/product/product-popup'))

const ManagedModal: React.FC = () => {
  const { displayModal, closeModal, modalView } = useUI()
  return (
    <Modal isOpen={displayModal} onClose={closeModal}>
      {modalView === 'PRODUCT_VIEW' && <ProductPopup />}
    </Modal>
  )
}

export default ManagedModal
