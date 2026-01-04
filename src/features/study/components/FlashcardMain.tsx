
import FlashcardViewer from './FlashcardViewer'
import StudyStatsPanel from './StudyStatsPanel'

const FlashcardMain = () => {
  return (
    <div className='flex gap-10 w-full'>
      <FlashcardViewer />
      <StudyStatsPanel />
    </div>
  )
}

export default FlashcardMain
