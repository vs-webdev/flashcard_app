
type MasteryLevel = 1 | 2 | 3 | 4 | 5

type CardItemProps = {
  question: string,
  answer: string,
  category: string,
  currentMasteryLevel: MasteryLevel
}

const CardItem = ({question, answer, category, currentMasteryLevel}: CardItemProps) => {

  return (
    <div className="border mt-10 rounded-xl bg-[var(--color-white)] shadow-[1px_1px_0_1px_var(--color-maroon)]">
      <div className="text-left text-lg font-semibold px-3 py-2">
        <h1>{question}</h1>
      </div>

      <div className="text-left px-3 border-y py-2 min-h-30">
        <span className="text-gray-600">Answer:</span>
        <p>{answer}</p>
      </div>

      <div className="flex items-center justify-between w-full px-3">
        <div className="border rounded-full px-4 py-2 mr-3 my-3 font-semibold text-xs shadow-[.5px_.5px_0_1px_var(--color-maroon)]">
          {category}
        </div>
        <div className="border-x px-3 self-stretch flex items-center gap-2 text-xs">
          {
            (currentMasteryLevel === 5)
            ? (<div className="border rounded-full px-4 py-2 mr-3 my-3 font-semibold bg-[var(--color-aqua)] text-xs shadow-[.5px_.5px_0_1px_var(--color-maroon)]">
                Mastered 1/5
              </div>)
            : (<>
                <div className="w-18 h-2 border rounded-full">
                  <div className="w-full h-full bg-[var(--color-maroon)]" 
                    style={{
                      width: `${(currentMasteryLevel / 5) * 100}%`
                    }}
                  />
                </div>
                <span className="leading-4">{currentMasteryLevel}/5</span>
              </>)
          }


        </div>
        <div className="px-2 ml-3">
          I
        </div>
      </div>
    </div>
  )
}

export default CardItem
