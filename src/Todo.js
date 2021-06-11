import React from "react";
import { getNowDate } from "./util/date.js";
// style
import { List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
// 간단하게 todo 내용을 출력하는 모듈
const Todo = ({ todo }) => {
  return (
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">{todo.body}</List.Header>
        <List.Description as="a">{getNowDate(todo.createdAt)}</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default Todo;
