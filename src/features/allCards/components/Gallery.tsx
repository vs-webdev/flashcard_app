import data from '../../../data'
import CardItem from './CardItem'

const Gallery = () => {
  return (
    <div className='w-full mt-15'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-6'>
          <button className='border px-6 py-2 rounded-full text-lg font-[500] bg-[var(--color-white)]'>All Categories</button>
          <div className='flex gap-2'>
            <input type='checkbox' id='hideMastered' />
            <label htmlFor="hideMastered" className='text-lg font-[500]'>Hide Mastered</label>
          </div>
        </div>

        <button className='border px-6 py-2 rounded-full bg-[var(--color-white)]'>Shuffle</button>
      </div>

      <ul className='grid grid-cols-3 gap-8 w-full mt-10'>
        {
          data.map(card => (
            <CardItem
              key={card.id}
              question={card.question}
              answer={card.answer}
              category={card.category}
              currentMasteryLevel={card.masteryLevel}
            />
          ))
        }
      </ul>
      {
        (data.length > 12) && (
          <button className='border px-6 py-2 mt-10 rounded-full text-lg font-[500] bg-[var(--color-white)] shadow-[1px_2px_0_1px_var(--color-maroon)]'>
            Load More
          </button>
        )
      }
    </div>
  )
}

export default Gallery
