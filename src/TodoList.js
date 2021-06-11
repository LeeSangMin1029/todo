import React from "react";
import Todo from "./Todo.js";

// style
import { List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
// 목록을 보여주는 컴포넌트
const TodoList = ({ todos, onClickDelete }) => {
  return (
    <List divided relaxed>
      {todos.map((todo) => (
        <Todo onClick={onClickDelete} key={todo.id} todo={todo} />
      ))}
    </List>
  );
};
export default TodoList;
