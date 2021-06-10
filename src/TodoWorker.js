import { useState } from "react";
import TodoList from "./TodoList";

// todo의 목록
const initTodos = [];

const TodoWorker = () => {
  const [todos, setTodo] = useState(initTodos);
  const [input, setInput] = useState("");
  const onClickAdding = () => {
    if (input === "") return;
    setTodo([...todos, { id: input + todos.length, body: input }]);
    setInput("");
  };
  const onChangeInput = (e) => {
    const { value: inputString } = e.target;
    setInput(inputString);
  };
  const onClickDelete = (e) => {
    const { innerHTML: string } = e.target;
    setTodo(todos.filter((todo) => todo.body !== string));
  };
  return (
    <>
      <TodoList todos={todos} onClickDelete={onClickDelete} />
      <input onChange={onChangeInput} value={input} />
      <button onClick={onClickAdding}>추가</button>
    </>
  );
};
export default TodoWorker;
