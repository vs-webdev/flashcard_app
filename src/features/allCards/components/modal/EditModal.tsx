import { IoCloseSharp } from "react-icons/io5";
import { IoMdAlert } from "react-icons/io";
import { useState, type FC, type FormEvent } from "react";
import { useFlashcardStore } from "../../../../store/store";
import type { Card, CardInput } from "../../../../shared/types/common.types";

interface EditModalProps {
  card: Card,
}

const EditModal: FC<EditModalProps> = ({card}) => {
  const setActiveModal = useFlashcardStore(state => state.setActiveModal)
  const updateCard = useFlashcardStore(state => state.updateCard)

  const [formData, setFormData] = useState<CardInput>({
    question: card.question,
    answer: card.answer,
    category: card.category,
  })

  const [error, setError] = useState({
    question: false,
    answer: false,
    category: false,
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trimmedData = {
      question: formData.question.trim(),
      answer: formData.answer.trim(),
      category: formData.category.trim(),
    }
    
    const newErrors = {
      question: !formData.question.trim(),
      answer: !formData.answer.trim(),
      category: !formData.category.trim(),
    }
    
    setError(newErrors)

    if (Object.values(newErrors).some(Boolean)) return;

    updateCard(card.id, trimmedData)
    setActiveModal(null)

    setFormData({question: "", answer: "", category: ""})
  }

  return (
    <div className="flex flex-col p-8 w-140 border rounded-xl text-left bg-[var(--color-white)] shadow-[1px_1px_0_1px_var(--color-maroon)]">
      <button
        className="ml-auto"
        onClick={() => setActiveModal(null)}
      >
        <IoCloseSharp size={20} />
      </button>
      <h1 className="text-2xl font-semibold">Edit your card</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="modal-question" className="font-semibold">
            Question
          </label>
          <input 
            type="text" 
            id="modal-question"
            value={formData.question}
            onChange={e => setFormData(prev => ({...prev, question: e.target.value}))}
            placeholder="e.g., What does HTML stand for?"
            className={`border outline-none rounded-md w-full px-3 py-3 shadow-[1px_1px_0_1px_var(--color-maroon)] ${
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

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="modal-answer" className="font-semibold">
            Answer
          </label>
          <textarea 
            rows={3}
            id="modal-answer"
            value={formData.answer}
            onChange={e => setFormData(prev => ({...prev, answer: e.target.value}))}
            placeholder="e.g., Hyper Text Markup Language"
            className={`border outline-none rounded-md w-full px-3 py-3 shadow-[1px_1px_0_1px_var(--color-maroon)] resize-none ${
              error.answer 
                ? 'border-[var(--color-error)] shadow-[2px_2px_0_var(--color-error)]' 
                : 'border-black-500'
            }`}
          />
        {error.answer && (
          <span className="text-sm text-[var(--color-error)] flex items-center gap-1">
            <IoMdAlert />
            Please enter an answer
          </span>
        )}
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="modal-category" className="font-semibold">
            Category
          </label>
          <input 
            type="text" 
            id="modal-category"
            value={formData.category}
            onChange={e => setFormData(prev => ({...prev, category: e.target.value}))}
            placeholder="e.g., Javascript"
            className={`border outline-none rounded-md w-full px-3 py-3 shadow-[1px_1px_0_1px_var(--color-maroon)] ${
              error.category 
                ? 'border-[var(--color-error)] shadow-[2px_2px_0_var(--color-error)]' 
                : 'border-black-500'
            }`}
          />
        {error.category && (
          <span className="text-sm text-[var(--color-error)] flex items-center gap-1">
            <IoMdAlert />
            Please enter an category
          </span>
        )}
        </div>

        <button
          className="text-sm leading-4 font-semibold w-max self-end px-4 py-2 border rounded-full mt-8 cursor-pointer bg-[var(--color-amber)] shadow-[1px_1px_1px_1px_var(--color-maroon)] active:shadow-none"
          type="submit"
        >
          Update Card
        </button>
      </form>
    </div>
  )
}

export default EditModal
