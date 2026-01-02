
const CardControls = () => {
  return (
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
  )
}

export default CardControls
