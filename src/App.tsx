import './App.css'
import { useEffect } from 'react'
import data from './data'
import { useFlashcardStore } from './store/store'
import Header from './features/navigation/Header'
import FlashcardMain from './features/study/components/FlashcardMain'
import AllCardsMain from './features/allCards/components/AllCardsMain'

function App() {
  const loadCards = useFlashcardStore(state => state.loadCards)
  const view = useFlashcardStore(state => state.view)

  useEffect(() => {
    loadCards(data)
  }, [loadCards])
  
  return (
    <>
      <div className='w-full'>
        <Header />
        {
          view === 'study'
            ? <FlashcardMain />
            : <AllCardsMain />
        }
      </div>
    </>
  )
}

export default App
