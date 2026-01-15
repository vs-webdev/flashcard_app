import { useEffect, useState } from 'react'
import { selectFilteredCards } from '../../../store/selectors.ts'
import { useShallow } from 'zustand/shallow'
import { useFlashcardStore } from '../../../store/store.ts'
import CardControls from '../../../shared/components/CardControls.tsx'
import Flashcard from './Flashcard.tsx'
import FlashcardActions from './FlashcardActions'
import FlashcardNavigation from './FlashcardNavigation.tsx'

const FlashcardViewer = () => {
  const filteredCards = useFlashcardStore(useShallow(selectFilteredCards))
  const {selectedCategories} = useFlashcardStore(useShallow(state => ({
    selectedCategories: state.selectedCategories,
  })))
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const currentCard = filteredCards[currentCardIndex]
  
  useEffect(() => {
    setCurrentCardIndex(prev =>
      Math.min(prev, Math.max(filteredCards.length - 1, 0))
    )
  }, [filteredCards])

  const isFilterEmpty = filteredCards.length === 0;
  
  const handleNextClick = () => setCurrentCardIndex(prev => Math.min(filteredCards.length - 1, prev + 1))
  const handlePrevClick = () => setCurrentCardIndex(prev => Math.max(0, prev - 1))

  return (
    <div className='border rounded-2xl w-full bg-[var(--color-white)] shadow-[1px_1px_0px_1px_var(--color-maroon)]'>
      <div className='px-6 py-4'>
        <CardControls />
      </div>

      {
        isFilterEmpty
          ? (<div className='border-t h-147 flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-semibold mb-3'>Category mastered!</h1>
            <p className='text-xl w-150'>
              All cards in {
                selectedCategories.map(category => (
                  <span key={category}>{category} </span>
                ))
            } category are mastered. Turn off 'Hide mastered'  or selected different category to continue studying.
            </p>
          </div>)
          : (<div>
            <div className='p-6 border-t border-b'>
              <Flashcard card={currentCard} />
              <FlashcardActions card={currentCard} />
            </div>
            <div className='px-6 py-5'>
              <FlashcardNavigation
                handleNextClick={handleNextClick}
                handlePrevClick={handlePrevClick}
                currentCardIndex={currentCardIndex + 1}
                totalCards={filteredCards.length}
              />
            </div>
          </div>)
      }
    </div>
  )
}

export default FlashcardViewer
