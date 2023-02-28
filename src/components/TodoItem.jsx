const TodoItem = ({ itemProps }) => {
  return (
    <li>
      <input type="checkbox" />
      {itemProps.title}
    </li>
  );
};
export default TodoItem;
