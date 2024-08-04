export default function Todo(text, todos) {
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
        <input type="type" value={text} onChange={changeText} />
        <button onClick={addTodos}>追加</button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo}>
              <p>{todo}</p>
              <button onClick={() => deleteTodo(index)}>完了</button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
