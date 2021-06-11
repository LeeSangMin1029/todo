import React, { useState } from "react";
import TodoList from "./TodoList";
import { getNowDate } from "./util/date.js";
// style
import { Input, Button } from "semantic-ui-react";

// todo의 목록
const initTodos = [];
const TodoWorker = () => {
  const [todos, setTodo] = useState(initTodos);
  const [input, setInput] = useState("");
  const onClickAdding = () => {
    if (input === "") return;
    const createdAt = getNowDate();
    setTodo([...todos, { id: input + todos.length, body: input, createdAt }]);
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
      <Input
        focus
        onChange={onChangeInput}
        value={input}
        placeholder="input..."
      />
      <Button onClick={onClickAdding}>추가</Button>
    </>
  );
};
export default TodoWorker;
