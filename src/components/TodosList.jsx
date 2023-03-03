import React from 'react';
import TodoItem from './TodoItem';

function TodosList({ todosProps, handleChange, delTodo }) {
  return (
    <div>
      <ul>
        <ul>
          {todosProps.map((todo) => (
            <TodoItem
              key={todo.id}
              itemProps={todo}
              handleChange={handleChange}
              delTodo={delTodo}
            />
          ))}
        </ul>
      </ul>
    </div>
  );
}

export default TodosList;
