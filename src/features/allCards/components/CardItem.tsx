import { useEffect, useRef, useState, type FC } from "react"
import { BiSolidBrain } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import { FiEdit2 } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { useClickOutside } from "../../../shared/hooks/useClickOutside";

type MasteryLevel = 0 | 1 | 2 | 3 | 4 | 5

interface CardItemProps {
  question: string,
  answer: string,
  category: string,
  currentMasteryLevel: MasteryLevel,
}

const CardItem: FC<CardItemProps> = ({question, answer, category, currentMasteryLevel}) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOptionOpen(false), isOptionOpen)

  return (
    <div className="border flex flex-col justify-between w-full rounded-xl bg-[var(--color-white)] shadow-[1px_1px_0_1px_var(--color-maroon)]">
      <div className="text-left text-xl font-semibold p-4">
        <h1>{question}</h1>
      </div>

      <div className="text-left p-4 border-y min-h-30 h-full">
        <span className="text-gray-600">Answer:</span>
        <p className="mt-1">{answer}</p>
      </div>

      <div className="flex items-center justify-between w-full ">
        <div className="border whitespace-nowrap rounded-full px-4 py-2 m-4 my-3 font-semibold text-sm shadow-[1px_1px_0_1px_var(--color-maroon)]">
          {category}
        </div>

        <div className="border-x w-full px-3 self-stretch flex items-center gap-2 text-xs">
          {
            (currentMasteryLevel === 5)
            ? (<div className="flex items-center gap-2 border rounded-full px-4 py-2 mr-3 my-3 text-sm font-semibold bg-[var(--color-aqua)] shadow-[.5px_.5px_0_1px_var(--color-maroon)]">
                <BiSolidBrain size={16} />
                Mastered 5/5
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

        <div ref={dropdownRef} className="relative">
          <button className="p-4"
            onClick={() => setIsOptionOpen(prev => !prev)}
          >
            <SlOptionsVertical />
          </button>

          <div  className={`absolute top-12 z-10 min-w-[150px] flex flex-col rounded p-1 bg-[var(--color-white)] shadow-[0px_0px_3px_var(--color-maroon)]/30 transition-all duration-200 ${
              isOptionOpen 
                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}>
            <button className="flex items-center gap-2 px-2 py-1 w-full text-left hover:bg-gray-100">
              <FiEdit2 size={13} />
              Edit
            </button>
            <button className="flex items-center gap-2 px-2 py-1 w-full text-left hover:bg-gray-100">
              <AiFillDelete size={13} />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardItem
