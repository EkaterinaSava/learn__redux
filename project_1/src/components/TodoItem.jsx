const TodoItem = ({id, text, completed, toggleTodoComplete, removeTodo}) => {
  console.log(id, text, completed);

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodoComplete(id)}
      />
      <span>New todo: {text}</span>
      <span className='delete' onClick={() => removeTodo(id)}>&times;</span>
    </li>
  )
};

export default TodoItem