import { useFlashcardStore } from "../../store/store"

const ViewToggle = () => {
  const setView = useFlashcardStore((state) => state.setView)
  const view = useFlashcardStore(state => state.view)

  return (
    <div className="border-2 relative p-1 text-sm rounded-full bg-[var(--color-white)] shadow-[1px_2px_0_0_var(--color-maroon)]">
      <div className="absolute top-1 bottom-1 bg-[var(--color-amber)] border rounded-full transition-all duration-500 ease-out" 
        style={{
          left: view === 'study' ? '0.3rem' : '50%',
          right: view === 'study' ? '50%' : '0.3rem'
        }}
      />
      <button 
        onClick={() => setView('study')}
        className="w-32 py-1 px-1 text-lg font-[500] transition-all duration-500 relative z-10 cursor-pointer"
      >
        Study Mode
      </button>
      <button
        onClick={() => setView('allCards')}
        className="w-32 py-1 px-1 text-lg font-[500] transition-all duration-500 relative z-10 cursor-pointer"
      >
        All Cards
      </button>
    </div>
  )
}

export default ViewToggle
