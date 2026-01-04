import { FaRegCheckCircle } from "react-icons/fa";
import { RiResetLeftLine } from "react-icons/ri";

const FlashcardActions = () => {
  return (
    <div className='flex justify-center items-center text-lg gap-6 mt-6'>
      <button className='flex items-center gap-2 border rounded-full font-[500] py-2 px-6 bg-[var(--color-amber)] shadow-[2px_2px_0_1px_var(--color-maroon)]'>
        <FaRegCheckCircle />
        I Know This
      </button>

      <button className='flex items-center gap-2 border rounded-full font-[500] py-2 px-6 bg-[var(--color-white)] shadow-[2px_2px_0_1px_var(--color-maroon)]'>
        <RiResetLeftLine />
        Reset Progress
      </button>
    </div>
  )
}

export default FlashcardActions
