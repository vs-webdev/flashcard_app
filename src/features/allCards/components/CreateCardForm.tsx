import { useState, type FormEvent } from "react";

type FlashcardFormData = {
  question: string;
  answer: string;
  category: string;
}

const CreateCardForm = () => {
  const [formData, setFormData] = useState<FlashcardFormData>({
    question: "",
    answer: "",
    category: ""
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
    <form 
      onSubmit={handleSubmit}
      className="border w-full p-8 flex flex-col gap-4 items-start rounded-xl bg-[var(--color-white)] shadow-[1px_1px_1px_1px_var(--color-maroon)]"
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
          className="border rounded-md w-full px-3 py-3"
        />
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
          className="border rounded-md w-full px-3 py-3 resize-none"
        />
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
          className="border rounded-md w-full px-3 py-3"
        />
      </div>

      <button
        className="text-sm leading-4 font-bold px-4 py-2 border rounded-full mt-3 cursor-pointer bg-[var(--color-amber)] shadow-[1px_1px_1px_1px_var(--color-maroon)] active:shadow-none"
        type="submit"
      >
        Create Card
      </button>

    </form>
  )
}

export default CreateCardForm
