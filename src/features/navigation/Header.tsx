import ViewToggle from './ViewToggle'

const Header = () => {
  return (
    <header className='flex items-center justify-between'>
      <div>
        <span>Flashcard</span>
      </div>

      <ViewToggle />
    </header>
  )
}

export default Header
