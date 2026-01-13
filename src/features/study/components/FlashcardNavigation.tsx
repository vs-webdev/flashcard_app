import type { FC } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

interface FlashcardNavigationProps {
  handleNextClick: () => void,
  handlePrevClick: () => void,
  currentCardIndex: number,
  totalCards: number,
}

const FlashcardNavigation: FC<FlashcardNavigationProps> = ({handleNextClick, handlePrevClick, currentCardIndex, totalCards}) => {
  return (
    <div className='w-full flex items-center justify-between'>
      <button 
        className='flex items-center gap-1 px-4 py-2 disabled:opacity-75 font-semibold border rounded-full'
        onClick={handlePrevClick}
        disabled={currentCardIndex === 1}
      >
        <GrFormPrevious size={20} />
        <span className="leading-[10px]">Previous</span>
      </button>
      <span className="font-[500]">Card {currentCardIndex} of {totalCards}</span>
      <button 
        className='flex items-center gap-1 px-4 py-2 disabled:opacity-75 font-semibold border rounded-full'
        onClick={handleNextClick}
        disabled={currentCardIndex === totalCards}
      >
        <span className="leading-[10px]">Next</span>
        <GrFormNext size={20} />
      </button>
    </div>
  )
}

export default FlashcardNavigation
