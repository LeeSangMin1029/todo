import React, { useState } from "react";
import TodoList from "./TodoList";
import { EventProvider } from "./hook/useEventContext.js";
// style
import IconButton from "./style/IconButton.js";

// todo의 목록
const initTodos = [];
const TodoWorker = () => {
  const [todos, setTodo] = useState(initTodos);
  const [input, setInput] = useState("");
  const onClickAdding = () => {
    if (input === "") return;
    const createdAt = new Date();
    setTodo([...todos, { id: input + todos.length, body: input, createdAt }]);
    setInput("");
  };
  const onKeyEnter = (e) => {
    if (e.key === "Enter") {
      onClickAdding();
    }
  };
  const onChangeInput = (e) => {
    const { value: inputString } = e.target;
    setInput(inputString);
  };
  const onClickDelete = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };
  return (
    <EventProvider value={onClickDelete}>
      <div className="ui container">
        <TodoList todos={todos} />
        <div className="ui input">
          <input
            focus="true"
            onChange={onChangeInput}
            onKeyPress={onKeyEnter}
            value={input}
            placeholder="input..."
          />
          <IconButton onClick={onClickAdding}>
            Add
            <i className="plus icon"></i>
          </IconButton>
        </div>
      </div>
    </EventProvider>
  );
};
export default TodoWorker;
