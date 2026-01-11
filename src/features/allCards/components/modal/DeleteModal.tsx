import type { FC } from "react"
import { useFlashcardStore } from "../../../../store/store"

interface DeleteModalProps {
  cardId: string,
}

const DeleteModal: FC<DeleteModalProps> = ({cardId}) => {
  const setActiveModal = useFlashcardStore(state => state.setActiveModal)
  const deleteCard = useFlashcardStore(state => state.deleteCard)

  const handleDelete = () => {
    deleteCard(cardId)
    setActiveModal(null)
  }

  return (
    <div className="flex flex-col w-120 border rounded-xl text-left bg-[var(--color-white)] shadow-[1px_1px_0_1px_var(--color-maroon)]">
      <div className="p-6">
        <h1 className="text-xl font-semibold mb-2">Delete this card?</h1>
        <p>This action cant be undone</p>
      </div>

      <div className="w-full border-t px-6 pt-3 pb-4 flex justify-end gap-4">
        <button
          className="text-sm leading-4 font-semibold w-max self-end px-4 py-2 border rounded-full cursor-pointer bg-[var(--color-white)] shadow-[1px_1px_1px_1px_var(--color-maroon)] active:shadow-none"
          onClick={() => setActiveModal(null)}
        >
          Cancel
        </button>
        <button
          className="text-sm leading-4 font-semibold w-max self-end px-4 py-2 border rounded-full cursor-pointer bg-[var(--color-amber)] shadow-[1px_1px_1px_1px_var(--color-maroon)] active:shadow-none"
          onClick={handleDelete}
        >
          Delete Card
        </button>
      </div>
    </div>
  )
}

export default DeleteModal
