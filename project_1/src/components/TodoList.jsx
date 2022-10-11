import TodoItem from './TodoItem';

export function TodoList({todos, toggleTodoComplete, removeTodo}) {
  console.log({...todos});

  return (
    <ul>
      {todos.map(todo =>
        <TodoItem
          key={todo.id}
          toggleTodoComplete={toggleTodoComplete}
          removeTodo={removeTodo}
          {...todo}
        />
      )}
    </ul>
  );
};

export default TodoList