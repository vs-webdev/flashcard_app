import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const FlashcardNavigation = () => {
  return (
    <div className='w-full flex items-center justify-between'>
      <button className='flex items-center gap-1 px-4 py-2 font-semibold border rounded-full'>
        <GrFormPrevious size={20} />
        <span className="leading-[10px]">Previous</span>
      </button>
      <span className="font-[500]">Card 1 of 20</span>
      <button className='flex items-center gap-1 px-4 py-2 font-semibold border rounded-full'>
        <span className="leading-[10px]">Next</span>
        <GrFormNext size={20} />
      </button>
    </div>
  )
}

export default FlashcardNavigation
