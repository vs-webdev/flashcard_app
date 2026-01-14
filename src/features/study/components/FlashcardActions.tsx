import { FaRegCheckCircle } from "react-icons/fa";
import { RiResetLeftLine } from "react-icons/ri";
import { useFlashcardStore } from "../../../store/store";
import { useShallow } from "zustand/shallow";
import type { FC } from "react";

interface FlashcardActionsProps {
  cardId: string,
  masteryLevel: number,
}

const FlashcardActions: FC<FlashcardActionsProps> = ({cardId, masteryLevel}) => {
  const {updateCard} = useFlashcardStore(useShallow(state => ({
    updateCard: state.updateCard
  })))

  return (
    <div className='flex justify-center items-center text-lg gap-6 mt-6'>
      <button 
        className='flex items-center gap-2 border rounded-full disabled:opacity-75 font-[500] py-2 px-6 bg-[var(--color-amber)] shadow-[2px_2px_0_1px_var(--color-maroon)]'
        onClick={() => updateCard(cardId, {masteryLevel: 5})}
        disabled={masteryLevel === 5}
      >
        <FaRegCheckCircle />
        I Know This
      </button>

      <button 
        className='flex items-center gap-2 border rounded-full disabled:opacity-75 font-[500] py-2 px-6 bg-[var(--color-white)] shadow-[2px_2px_0_1px_var(--color-maroon)]'
        onClick={() => updateCard(cardId, {masteryLevel: 0})}
        disabled={masteryLevel === 0}
      >
        <RiResetLeftLine />
        Reset Progress
      </button>
    </div>
  )
}

export default FlashcardActions
