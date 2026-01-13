import { useShallow } from 'zustand/shallow'
import { useFlashcardStore } from '../../../store/store'
import { selectFilteredCards } from '../../../store/selectors'
import CardControls from '../../../shared/components/CardControls'
import CardItem from './CardItem'

const Gallery = () => {
  const filteredCards = useFlashcardStore(useShallow(selectFilteredCards))

  return (
    <div className='w-full mt-15'>
      <CardControls />

      <ul className='grid grid-cols-3 gap-8 w-full mt-10'>
        {
          filteredCards.map(card => (
            <CardItem
              key={card.id}
              id={card.id}
              question={card.question}
              answer={card.answer}
              category={card.category}
              currentMasteryLevel={card.masteryLevel}
            />
          ))
        }
      </ul>
      {
        (filteredCards.length > 12) && (
          <button className='border px-6 py-2 mt-10 rounded-full text-lg font-[500] bg-[var(--color-white)] shadow-[1px_2px_0_1px_var(--color-maroon)]'>
            Load More
          </button>
        )
      }
    </div>
  )
}

export default Gallery
