import { useState } from "react"

type ToggleMode = 'study' | 'allCards'

const ViewToggle = () => {
  const [toggleViewState, setToggleViewState] = useState<ToggleMode>('study')

  return (
    <div className="border-2 relative p-1 text-sm rounded-full">
      <div className="absolute top-1 bottom-1 bg-[var(--color-amber)] border rounded-full transition-all duration-500 ease-out" 
        style={{
          left: toggleViewState === 'study' ? '0.3rem' : '50%',
          right: toggleViewState === 'study' ? '50%' : '0.3rem'
        }}
      />
      <button 
        onClick={() => setToggleViewState('study')}
        className="w-26 py-1 transition-all duration-500 relative z-10 cursor-pointer"
      >
        Study Mode
      </button>
      <button
        onClick={() => setToggleViewState('allCards')}
        className="w-26 py-1 transition-all duration-500 relative z-10 cursor-pointer"
      >
        All Cards
      </button>
    </div>
  )
}

export default ViewToggle
