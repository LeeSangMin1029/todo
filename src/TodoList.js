import React from "react";
import { List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
// 목록을 보여주는 컴포넌트
const TodoList = ({ todos, onClickDelete }) => {
  const list = todos.map((todo) => (
    <List.Item onClick={onClickDelete} key={todo.id}>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">{todo.body}</List.Header>
        <List.Description as="a">{todo.createdAt}</List.Description>
      </List.Content>
    </List.Item>
  ));
  return (
    <List divided relaxed>
      {list}
    </List>
  );
};
export default TodoList;
