import CardControls from '../../../shared/components/CardControls.tsx'
import Flashcard from './Flashcard.tsx'
import FlashcardActions from './FlashcardActions'
import FlashcardNavigation from './FlashcardNavigation.tsx'

const FlashcardViewer = () => {
  return (
    <div className='border rounded-2xl w-full bg-[var(--color-white)] shadow-[1px_1px_0px_1px_var(--color-maroon)]'>
      <div className='px-6 py-4'>
        <CardControls />
      </div>

      <div className='p-6 border-t border-b'>
        <Flashcard />
        <FlashcardActions />
      </div>

      <div className='px-6 py-5'>
        <FlashcardNavigation />
      </div>
    </div>
  )
}

export default FlashcardViewer
