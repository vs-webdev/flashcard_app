import ViewToggle from './ViewToggle'
import logo from '../../assets/logo.png'

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
