const TodoItem = ({ itemProps, handleChange, delTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={itemProps.completed}
        onChange={() => handleChange(itemProps.id)}
      />
      {itemProps.title}
      <button onClick={() => delTodo(itemProps.id)}>Delete</button>
    </li>
  );
};
export default TodoItem;
