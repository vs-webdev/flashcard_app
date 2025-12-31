import ViewToggle from './ViewToggle'
import logo from '../../assets/ChatGPT Image Dec 31, 2025, 08_08_35 PM.png'

const Header = () => {
  return (
    <header className='flex items-center justify-between mb-5'>
      <div className='flex items-center gap-2'>
        <div className='w-10 h-10 overflow-hidden'>
          <img src={logo} alt="" className='w-full scale-160 object-cover mt-[2px]'/>
        </div>
        <span className='text-2xl font-bold'>Flashcard</span>
      </div>

      <ViewToggle />
    </header>
  )
}

export default Header
