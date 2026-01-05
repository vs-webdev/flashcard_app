import type { FC } from "react"
import DeleteModal from "./DeleteModal"
import EditModal from "./EditModal"

type modalType = 'edit' | 'delete'

interface modalProps {
  modalName: modalType,
}

const ModalOverlay: FC<modalProps> = ({modalName}) => {
  return (
    <div className="fixed flex items-center justify-center z-10 inset-0 w-screen h-screen bg-gray-500/50">
      {modalName === "edit"
        ? <EditModal />
        : <DeleteModal /> 
      }
    </div>
  )
}

export default ModalOverlay
