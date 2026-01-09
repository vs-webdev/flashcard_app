import { useFlashcardStore } from "../../store/store";
import { useEffect, useMemo, useState, useRef } from "react";
import { IoShuffle } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const CardControls = () => {
  const cards = useFlashcardStore(state => state.cards);
  const toggleHideMastered = useFlashcardStore(state => state.toggleHideMastered);
  const hideMastered = useFlashcardStore(state => state.hideMastered);
  const handleShuffle = useFlashcardStore(state => state.shuffleCards);
  
  const categories = useMemo(() => {
    return Array.from(new Set(cards.map(card => card.category)));
  }, [cards]);

  const [showCategories, setShowCategories] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowCategories(false);
      }
    };
    
    document.addEventListener('click', handler);
    
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-6'>
        <div className="relative z-10" ref={dropdownRef}>
          <button 
            className='flex items-center gap-2 border px-5 py-3 rounded-full text-lg font-[500] bg-[var(--color-white)]'
            onClick={() => setShowCategories(prev => !prev)}
          >
            <span className="leading-[10px]">All Categories</span>
            <FaChevronDown 
              size={15} 
              className={`transition-transform ${showCategories ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Dropdown */}
          <div 
            className={`absolute mt-2 rounded-lg overflow-hidden border divide-y bg-white transition-all shadow-lg ${
              showCategories 
                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            {categories.length === 0 ? (
              <div className="py-3 px-4 text-gray-500 text-sm italic whitespace-nowrap">
                No categories yet
              </div>
            ) : (
              categories.map((category) => (
                <div key={category}>
                  <label 
                    htmlFor={category} 
                    className="w-full py-2 px-4 text-left flex items-center hover:bg-gray-100 cursor-pointer whitespace-nowrap select-none"
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
            )}
          </div>
        </div>

        <div className='flex gap-2 select-none'>
          <input 
            type='checkbox' 
            id='hideMastered' 
            checked={hideMastered} 
            onChange={toggleHideMastered} 
          />
          <label htmlFor="hideMastered" className='text-lg font-[500]'>
            Hide Mastered
          </label>
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
  );
};

export default CardControls;