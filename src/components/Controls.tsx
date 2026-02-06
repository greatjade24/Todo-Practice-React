import { useState } from 'react'
import './Controls.css'

function Controls({ onSubmit }: any) {
  const [text, setText] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const handleSubmit = () => {
    onSubmit(text)
    setText('')
  }

  return (
    <div className="controls">
      <input
        type="text"
        className="input"
        value={text}
        onChange={handleChange}
      />
      <button
        className="button"
        onClick={handleSubmit}
      >
        추가
      </button>
      <select className="select">
        <option value="">전체</option>
        <option value="">할 일</option>
        <option value="">완료</option>
      </select>
    </div>
  )
}

export default Controls
