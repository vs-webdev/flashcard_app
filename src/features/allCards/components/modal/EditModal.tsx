import { IoCloseSharp } from "react-icons/io5";
import { useState, type FC, type FormEvent } from "react";

type FormData = {
  question: string;
  answer: string;
  category: string;
}

interface editModalProps {
  question: string,
  answer: string,
  category: string,
}

const EditModal: FC<editModalProps> = ({question, answer, category}) => {
  const [formData, setFormData] = useState<FormData>({
    question,
    answer,
    category,
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.question.trim() || !formData.answer.trim() || !formData.category.trim()) {
      console.log('error')
      return;
    };

    console.log(formData.question, formData.answer, formData.category)
    setFormData({question: "", answer: "", category: ""})
  }

  return (
    <div className="flex flex-col p-8 w-140 border rounded-xl text-left bg-[var(--color-white)] shadow-[1px_1px_0_1px_var(--color-maroon)]">
      <button
        className="ml-auto"
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
            className="border outline-none rounded-md w-full px-3 py-3 shadow-[1px_1px_0_1px_var(--color-maroon)]"
          />
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
            className="border outline-none rounded-md w-full px-3 py-3 resize-none shadow-[1px_1px_0_1px_var(--color-maroon)]"
          />
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
            className="border outline-none rounded-md w-full px-3 py-3 shadow-[1px_1px_0_1px_var(--color-maroon)]"
          />
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
