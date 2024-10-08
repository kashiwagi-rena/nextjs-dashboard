"use client"

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState<string>('')
  const [todos, setTodos] = useState<string[]>([])

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const addTodos = () => {
    const newTodos = [...todos]
    newTodos.push(text)
    setTodos(newTodos)
    setText("")
  }

  const deleteTodo = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <main>
      <h1>TODO</h1>
      <div>
        <Todo><Todo/>
      </div>
    </main>
  );
}
