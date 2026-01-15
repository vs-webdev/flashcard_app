import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdAlert } from "react-icons/io";
import { useState, type FormEvent } from "react";
import type { CardInput } from "../../../shared/types/common.types";
import { useFlashcardStore } from "../../../store/store";

const CreateCardForm = () => {
  const addCard = useFlashcardStore(store => store.addCard)

  const [formData, setFormData] = useState<CardInput>({
    question: "",
    answer: "",
    category: ""
  })

  const [error, setError] = useState({
    question: false,
    answer: false,
    category: false,
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors = {
      question: !formData.question.trim(),
      answer: !formData.answer.trim(),
      category: !formData.category.trim(),
    }
    
    setError(newErrors)
    
    if (Object.values(newErrors).some(Boolean)) return;

    addCard(formData)

    setFormData({question: "", answer: "", category: ""})
  }

  console.log(error)

  return (
    <form 
      onSubmit={handleSubmit}
      className="border w-full p-8 flex flex-col gap-4 items-start rounded-xl bg-[var(--color-white)] shadow-[2px_2px_0px_2px_var(--color-maroon)]"
    >

      <div className="flex flex-col gap-2 items-start w-full">
        <label htmlFor="question" className="font-semibold text">
          Question
        </label>
        <input
          type="text"
          placeholder="e.g., What is the capital of France?"
          id="question"
          value={formData.question}
          onChange={e => setFormData({...formData, question: e.target.value})}
          className={`border rounded-md w-full px-3 py-3 ${
            error.question 
              ? 'border-[var(--color-error)] shadow-[2px_2px_0_var(--color-error)]' 
              : 'border-black-500'
          }`}
        />
        {error.question && (
          <span className="text-sm text-[var(--color-error)] flex items-center gap-1">
            <IoMdAlert />
            Please enter an question
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 items-start w-full">
        <label htmlFor="answer" className="font-semibold text">
          Answer
        </label>
        <textarea
          placeholder="e.g., Paris"
          id="answer"
          rows={3}
          value={formData.answer}
          onChange={e => setFormData({...formData, answer: e.target.value})}
          className={`border rounded-md w-full px-3 py-3 resize-none ${
            error.answer 
            ? 'border-[var(--color-error)] shadow-[2px_2px_0_var(--color-error)]' 
            : 'border-black-500'
          }`}
          />
          {error.answer && (
            <span className="text-sm text-[var(--color-error)] flex items-center gap-1">
              <IoMdAlert />
              Please enter an question
            </span>
          )}
      </div>

      <div className="flex flex-col gap-2 items-start w-full">
        <label htmlFor="category" className="font-semibold text">
          Category
        </label>
        <input
          type="text"
          placeholder="e.g., Geography"
          id="category"
          value={formData.category}
          onChange={e => setFormData({...formData, category: e.target.value})}
          className={`border rounded-md w-full px-3 py-3 ${
            error.category 
            ? 'border-[var(--color-error)] shadow-[2px_2px_0_var(--color-error)]' 
            : 'border-black-500'
          }`}
          />
          {error.category && (
            <span className="text-sm text-[var(--color-error)] flex items-center gap-1">
              <IoMdAlert />
              Please enter an question
            </span>
          )}
      </div>

      <button
        className="flex items-center gap-2 text-md leading-[10px] font-semibold px-4 py-2 border rounded-full mt-3 cursor-pointer bg-[var(--color-amber)] shadow-[1px_1px_1px_1px_var(--color-maroon)] active:shadow-none"
        type="submit"
      >
        <IoMdAddCircleOutline size={16} />
        Create Card
      </button>

    </form>
  )
}

export default CreateCardForm
