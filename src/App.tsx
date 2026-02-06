import Layout from './components/Layout'
import Title from './components/Title'
import Controls from './components/Controls'
import TodoList from './components/TodoList'
import { useRef, useState } from 'react'
import type { ITodoItem } from './interface'

function App() {
  const idRef = useRef(0)
  const [list, setList] = useState<ITodoItem[]>([])

  const handleSubmit = (value: string) => {
    setList((prevList) =>
      prevList.concat({
        id: (idRef.current += 1),
        text: value,
        completed: false,
      }),
    )
  }

  const handleToggle = (id: number) => {
    setList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed }
        }

        return item
      }),
    )
  }

  const handleToggleAll = (flag: boolean) => {
    setList((prevList) =>
      prevList.map((item) => {
        return { ...item, completed: flag }
      }),
    )
  }

  const handleDelete = (id: number) => {
    setList((prevList) => prevList.filter((item) => item.id !== id))
  }

  const handleDeleteCompleted = () => {
    setList((prevList) => prevList.filter((item) => !item.completed))
  }

  const handleUpdate = (id: number, text: string) => {
    setList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return { ...item, text }
        }

        return item
      }),
    )
  }

  return (
    <div>
      <Layout>
        <Title />
        <Controls onSubmit={handleSubmit} />
        <TodoList
          data={list}
          onToggle={handleToggle}
          onToggleAll={handleToggleAll}
          onDelete={handleDelete}
          onDeleteCompleted={handleDeleteCompleted}
          onUpdate={handleUpdate}
        />
      </Layout>
    </div>
  )
}

export default App
