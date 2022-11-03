import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hook';

import { addNewTodo, fetchTodos } from './store/todoSlice';

import TodoList from './components/TodoList';
import InputField from './components/InputField';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const { loading, error } = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();

  const addTask = () => {
    dispatch(addNewTodo(text));
    setText('');
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <InputField
        value={text}
        updateText={setText}
        handleAction={addTask}
      />

      {loading && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;
