import DeleteModal from "./DeleteModal"
import EditModal from "./EditModal"
import { useFlashcardStore } from "../../../../store/store"

const ModalOverlay = () => {
  const activeModal = useFlashcardStore(state => state.activeModal)
  const cards = useFlashcardStore(state => state.cards)

  if (!activeModal) return null;

  const card = cards.find(card => card.id === activeModal.cardId)
  if (!card) return null;
  
  return (
    <div className="fixed flex items-center justify-center z-10 inset-0 w-screen h-screen bg-gray-500/50">
      {activeModal.type === "edit" && <EditModal card={card} />}
      {activeModal.type === "delete" && <DeleteModal cardId={activeModal.cardId} />}
    </div>
  )
}

export default ModalOverlay
