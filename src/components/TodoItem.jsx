import { useState } from 'react';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({ itemProps, handleChange, delTodo, setUpdate }) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li className={styles.item} style={viewMode}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={itemProps.completed}
          onChange={() => handleChange(itemProps.id)}
        />
        <span style={itemProps.completed ? completedStyle : null}>
          {itemProps.title}
        </span>
        <button type="submit" onClick={handleEditing}>
          Edit
        </button>
        <button type="submit" onClick={() => delTodo(itemProps.id)}>
          Delete
        </button>
      </div>
      <input
        type="text"
        value={itemProps.title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, itemProps.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default TodoItem;
