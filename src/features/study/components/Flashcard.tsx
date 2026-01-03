
const Flashcard = () => {
  return (
    <div className="border-2 rounded-2xl flex flex-col gap-24 items-center p-6 bg-[var(--color-magenta)] shadow-[2px_2px_0_1px_var(--color-maroon)]">
      <div className="border rounded-full text-sm px-5 font-semibold py-2 w-fit bg-[var(--color-white)] shadow-[1px_1px_0px_1px_var(--color-maroon)]">
        Web Development
      </div>

      <div>
        <h1 className="text-4xl font-bold mb-6">
          What does HTML stand for?
        </h1>
        <span>Click to reveal answer</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-18 h-2 border rounded-full bg-[var(--color-white)]">
          <div className="w-full h-full bg-[var(--color-maroon)]" 
            style={{
              width: `${(0 / 5) * 100}%`
            }}
          />
        </div>
        <span className="leading-[1]">0/5</span>
      </div>
    </div>
  )
}

export default Flashcard
