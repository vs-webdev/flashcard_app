import StatCard from './StatCard'
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { RiBrain2Line } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { FiInbox } from "react-icons/fi";

const StudyStatsPanel = () => {
  const cards = [
    {
      id: 1,
      title: 'Total Cards',
      count: 40,
      icon: HiOutlineSquare3Stack3D,
      bgColor: '#93acec',
    },
    {
      id: 2,
      title: 'Mastered',
      count: 11,
      icon: RiBrain2Line,
      bgColor: '#48d9cd'
    },
    {
      id: 3,
      title: 'In Progress',
      count: 21,
      icon: IoBookOutline,
      bgColor: '#f173a3'
    },
    {
      id: 4,
      title: 'Not Started',
      count: 8,
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
          <StatCard key={card.id} 
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
