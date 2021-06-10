import Todo from "./Todo.js";

// 목록을 보여주는 컴포넌트
const TodoList = ({ todos, onClickDelete }) => {
  const list = todos.map((todo) => (
    <Todo key={todo.id} value={todo.body}></Todo>
  ));
  return <ul onClick={onClickDelete}>{list}</ul>;
};
export default TodoList;
