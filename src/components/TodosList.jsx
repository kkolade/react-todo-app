import React from 'react';
import TodoItem from './TodoItem';

function TodosList({ todosProps }) {
  return (
    <div>
      <ul>
        {todosProps.map((todo) => (
          <TodoItem itemProps={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodosList;
