import type { FC } from "react";
import type { Card, CardMastery } from "../../../shared/types/common.types";
import { useShallow } from "zustand/shallow";
import { useFlashcardStore } from "../../../store/store";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiResetLeftLine } from "react-icons/ri";

interface FlashcardActionsProps {
  card: Card,
}

const FlashcardActions: FC<FlashcardActionsProps> = ({card}) => {
  const {updateCard} = useFlashcardStore(useShallow(state => ({
    updateCard: state.updateCard
  })))

  const updateMastery = () => {
    const newLevel = Math.min(5, card?.masteryLevel + 1) as CardMastery;
    updateCard(card?.id, {masteryLevel: newLevel})
  }

  const resetMastery = () => updateCard(card?.id, {masteryLevel: 0});

  return (
    <div className='flex justify-center items-center text-lg gap-6 mt-6'>
      <button 
        className='flex items-center gap-2 border rounded-full disabled:opacity-75 font-[500] py-2 px-6 bg-[var(--color-amber)] shadow-[2px_2px_0_1px_var(--color-maroon)]'
        onClick={updateMastery}
        disabled={card?.masteryLevel === 5}
      >
        <FaRegCheckCircle />
        I Know This
      </button>

      <button 
        className='flex items-center gap-2 border rounded-full disabled:opacity-75 font-[500] py-2 px-6 bg-[var(--color-white)] shadow-[2px_2px_0_1px_var(--color-maroon)]'
        onClick={resetMastery}
        disabled={card?.masteryLevel === 0}
      >
        <RiResetLeftLine />
        Reset Progress
      </button>
    </div>
  )
}

export default FlashcardActions
