import React, { useContext } from "react";
import { getNowDate } from "./util/date.js";
import EventContext from "./hook/useEventContext.js";
// style
import IconButton from "./style/IconButton.js";
import { List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
// 간단하게 todo 내용을 출력하는 모듈
const Todo = ({ todo }) => {
  const deleteEvent = useContext(EventContext);
  return (
    <List.Item>
      <List.Content>
        <List.Header as="a">{todo.body}</List.Header>
        <List.Description as="a">{getNowDate(todo.createdAt)}</List.Description>
      </List.Content>
      <IconButton onClick={deleteEvent}>
        Delete
        <i className="close icon"></i>
      </IconButton>
    </List.Item>
  );
};

export default Todo;
