import { useState, type FC } from "react"
import type { Card } from "../../../shared/types/common.types"

interface FlashcardProps {
  card: Card,
}
const Flashcard: FC<FlashcardProps> = ({card}) => {
  const [isReveal, setIsReveal] = useState(false)

  return (
    <div 
      className="border-2 rounded-2xl h-97 flex items-center justify-center p-6 cursor-pointer bg-[var(--color-magenta)] shadow-[2px_2px_0_1px_var(--color-maroon)]"
      onClick={() => setIsReveal(prev => !prev)}
    >
      {
        isReveal
        ? (<div>
          <p className="text-2xl font-semibold">
            {card?.answer}
          </p>
        </div>)
        : (<div className="flex flex-col justify-between items-center h-full">
            <div className="border rounded-full text-sm px-5 font-semibold py-2 w-fit bg-[var(--color-white)] shadow-[1px_1px_0px_1px_var(--color-maroon)]">
              {card?.category}
            </div>

            <div>
              <h1 className="text-4xl font-bold mb-6">
                {card?.question}
              </h1>
              <span>Click to reveal answer</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-18 h-2 border rounded-full bg-[var(--color-white)]">
                <div className="w-full h-full bg-[var(--color-maroon)]" 
                  style={{
                    width: `${((card?.masteryLevel) / 5) * 100}%`
                  }}
                />
              </div>
              <span className="leading-[1]">{card?.masteryLevel}/5</span>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Flashcard
