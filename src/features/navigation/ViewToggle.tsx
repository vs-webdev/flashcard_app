import { useState } from "react"

type ToggleMode = 'study' | 'allCards'

const ViewToggle = () => {
  const [toggleViewState, setToggleViewState] = useState<ToggleMode>('study')

  return (
    <div className="border-2 relative p-1 text-sm rounded-full bg-[var(--color-white)] shadow-[1px_2px_0_0_var(--color-maroon)]">
      <div className="absolute top-1 bottom-1 bg-[var(--color-amber)] border rounded-full transition-all duration-500 ease-out" 
        style={{
          left: toggleViewState === 'study' ? '0.3rem' : '50%',
          right: toggleViewState === 'study' ? '50%' : '0.3rem'
        }}
      />
      <button 
        onClick={() => setToggleViewState('study')}
        className="w-32 py-1 px-1 text-lg font-[500] transition-all duration-500 relative z-10 cursor-pointer"
      >
        Study Mode
      </button>
      <button
        onClick={() => setToggleViewState('allCards')}
        className="w-32 py-1 px-1 text-lg font-[500] transition-all duration-500 relative z-10 cursor-pointer"
      >
        All Cards
      </button>
    </div>
  )
}

export default ViewToggle
