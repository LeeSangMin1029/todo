import React, { useContext, memo } from 'react';
import { getNowDate } from './util/date.js';
import EventContext from './hook/useEventContext.js';

// style
import IconButton from './style/IconButton.js';
import styled from 'styled-components';

const Header = styled.div`
  font-size: 1.5em;
  padding: 10px 0px 10px 0px;
`;

// 간단하게 todo 내용을 출력하는 모듈
const Todo = ({ todo }) => {
  const deleteEvent = useContext(EventContext);
  return (
    <div className='item'>
      <div className='content'>
        <Header>{todo.body}</Header>
        <div className='description'>{getNowDate(todo.createdAt)}</div>
      </div>
      <IconButton onClick={() => deleteEvent(todo.id)}>
        Delete
        <i className='close icon'></i>
      </IconButton>
    </div>
  );
};

export default memo(Todo);
