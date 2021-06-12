import React, { useCallback, useState, useRef, memo } from 'react';
import TodoList from './TodoList';
import { EventProvider } from './hook/useEventContext.js';
// style
import IconButton from './style/IconButton.js';

const TodoWorker = () => {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState('');
  const nextId = useRef(0);
  const onClickAdding = useCallback(() => {
    if (input === '') return;
    const createdAt = new Date();
    const user = {
      id: nextId.current,
      body: input,
      createdAt,
    };
    setTodo((todos) => todos.concat(user));
    setInput('');
    nextId.current += 1;
  }, [input]);
  const onKeyEnter = (e) => {
    if (e.key === 'Enter') {
      onClickAdding();
    }
  };
  const onChangeInput = useCallback((e) => {
    const { value: inputString } = e.target;
    setInput(inputString);
  }, []);
  const onClickDelete = useCallback((id) => {
    setTodo((todos) => todos.filter((todo) => todo.id !== id));
  }, []);
  return (
    <EventProvider value={onClickDelete}>
      <div className='ui container'>
        <TodoList todos={todos} />
        <div className='ui input'>
          <input
            focus='true'
            onChange={onChangeInput}
            onKeyPress={onKeyEnter}
            value={input}
            placeholder='input...'
          />
          <IconButton onClick={onClickAdding}>
            Add
            <i className='plus icon'></i>
          </IconButton>
        </div>
      </div>
    </EventProvider>
  );
};
export default memo(TodoWorker);
