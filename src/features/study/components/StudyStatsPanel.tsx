import StatCard from './StatCard'
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { RiBrain2Line } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { FiInbox } from "react-icons/fi";
import { useFlashcardStore } from '../../../store/store';

const StudyStatsPanel = () => {
  const total = useFlashcardStore(state => state.cards.length);
  const mastered = useFlashcardStore(state => 
    state.cards.filter(c => c.masteryLevel === 5).length
  );
  const inProgress = useFlashcardStore(state => 
    state.cards.filter(c => c.masteryLevel > 0 && c.masteryLevel < 5).length
  );
  const notStarted = useFlashcardStore(state => 
    state.cards.filter(c => c.masteryLevel === 0).length
  );

  const cards = [
    {
      title: 'Total Cards',
      count: total,
      icon: HiOutlineSquare3Stack3D,
      bgColor: '#93acec',
    },
    {
      title: 'Mastered',
      count: mastered,
      icon: RiBrain2Line,
      bgColor: '#48d9cd'
    },
    {
      title: 'In Progress',
      count: inProgress,
      icon: IoBookOutline,
      bgColor: '#f173a3'
    },
    {
      title: 'Not Started',
      count: notStarted,
      icon: FiInbox,
      bgColor: '#fd8ae5'
    },
  ]

  return (
    <div className='flex flex-col justify-between flex-1 border rounded-2xl p-6 min-w-[420px] bg-[var(--color-white)] shadow-[1px_1px_0_1px_var(--color-maroon)]'>
      <h2 className='text-3xl text-left font-bold'>
        Study Statistics
      </h2>
      {
        cards.map(card => (
          <StatCard key={card.title}           
            title={card.title} 
            count={card.count}
            icon={card.icon}
            bg={card.bgColor}
          />
        ) )
      }
    </div>
  )
}

export default StudyStatsPanel
