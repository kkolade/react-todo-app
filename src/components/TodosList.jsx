import React from 'react';
import TodoItem from './TodoItem';

function TodosList({
  todosProps, handleChange, delTodo, setUpdate,
}) {
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
              setUpdate={setUpdate}
            />
          ))}
        </ul>
      </ul>
    </div>
  );
}

export default TodosList;
