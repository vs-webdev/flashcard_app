import CreateCardForm from "./CreateCardForm"
import Gallery from "./Gallery"
import ModalOverlay from "./modal/ModalOverlay"
import { useFlashcardStore } from "../../../store/store"

const AllCardsMain = () => {
  const activeModal = useFlashcardStore((state) => state.activeModal)

  return (
    <div className="w-full">
      <CreateCardForm />
      <Gallery />
      {activeModal && (
        <ModalOverlay />
      )}
    </div>
  )
}

export default AllCardsMain
