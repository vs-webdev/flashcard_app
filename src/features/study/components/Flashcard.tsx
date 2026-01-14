import { useEffect, useState, type FC } from "react"
import type { Card } from "../../../shared/types/common.types"
import { BiSolidBrain } from "react-icons/bi";

interface FlashcardProps {
  card: Card,
}
const Flashcard: FC<FlashcardProps> = ({card}) => {
  const [isReveal, setIsReveal] = useState(false)

  useEffect(() => {
    setIsReveal(false)
  }, [card])

  return (
    <div 
      className="border-2 rounded-2xl h-97 flex items-center justify-center p-6 cursor-pointer bg-[var(--color-magenta)] shadow-[1px_1px_0_1px_var(--color-maroon)]"
      onClick={() => setIsReveal(prev => !prev)}
    >
      {
        isReveal
        ? (<div className="flex flex-col items-center justify-start h-full ">
            <div className="border rounded-full text-sm px-5 font-semibold py-2 w-fit bg-[var(--color-white)] shadow-[1px_1px_0px_1px_var(--color-maroon)]">
              {card?.category}
            </div>

            <div className="h-full flex flex-col items-center justify-center">
              <span className="text-xl font-medium">Answer:</span>
              <p className="text-2xl font-semibold mt-4">
                {card?.answer}
              </p>
            </div>
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

        <div className="flex items-center gap-3 text-xs">
          {
            (card?.masteryLevel === 5)
            ? (<div className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm font-semibold bg-[var(--color-aqua)] shadow-[.5px_.5px_0_1px_var(--color-maroon)]">
                <BiSolidBrain size={16} />
                Mastered 5/5
              </div>)
            : (<>
              <div className="w-24 h-2.5 border rounded-full bg-[var(--color-white)]">
                <div className="w-full h-full bg-[var(--color-maroon)]" 
                  style={{
                    width: `${((card?.masteryLevel) / 5) * 100}%`
                  }}
                />
              </div>
              <span className="leading-[1] text-base">{card?.masteryLevel}/5</span>
              </>)
          }
        </div>
          </div>
        )
      }
    </div>
  )
}

export default Flashcard
