import { IoShuffle } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { useFlashcardStore } from "../../store/store";
import { useEffect, useMemo, useState } from "react";

const CardControls = () => {
  const cards = useFlashcardStore(state => state.cards)

  const categories = useMemo(() => {
    return Array.from(new Set(cards.map(card => card.category)))
  }, [cards])

  const [showCategories, setShowCategories] = useState<boolean>(false)

  useEffect(() => {
    const handler = () => setShowCategories(false)
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-6'>
        <div className="relative z-0">
          <button 
            className='flex items-center gap-2 border px-5 py-3 rounded-full text-lg font-[500] bg-[var(--color-white)]'
            onClick={(e) => {
              e.stopPropagation()
              setShowCategories(prev => !prev)}
            } 
          >
            <span className="leading-[10px]">All Categories</span>
            <FaChevronDown size={15} />
          </button>

          <div 
            className={`absolute mt-2 rounded-lg overflow-hidden h-61 border divide-y bg-white transition ${showCategories ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
            onClick={e => e.stopPropagation()}
          >
            {
              categories.map((category, index) => (
                <div key={index}>
                  <label htmlFor={category} 
                    className="w-full py-2 px-4 text-left flex items-center hover:bg-gray-100 cursor-pointer whitespace-nowrap cursor-pointer select-none"
                  >
                  <input 
                    type="checkbox" 
                    id={category}
                    className="mr-2"
                  />
                    {category}
                  </label>
                </div>
              ))
            }
          </div>
        </div>

        <div className='flex items-center gap-3 select-none'>
          <input 
            type='checkbox' 
            id='hideMastered' 
            className="accent-[var(--color-amber)] w-4 h-4 checked:outline-1"
            checked={hideMastered} 
            onChange={toggleHideMastered} 
          />
          <label htmlFor="hideMastered" className='text-lg font-[500]'>Hide Mastered</label>
        </div>
      </div>

      <button 
        className='flex items-center gap-2 border px-4 py-2 rounded-full bg-[var(--color-white)]'
        onClick={handleShuffle}
      >
        <IoShuffle size={22} />
        <span className="leading-[10px] font-semibold">Shuffle</span>
      </button>
    </div>
  )
}

export default CardControls
