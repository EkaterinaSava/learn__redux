import { useState } from 'react';
import { useAppDispatch } from './hook';

import { addTodo } from './store/todoSlice';

import TodoList from './components/TodoList';
import InputField from './components/InputField';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const dispatch = useAppDispatch();

  const addTask = () => {
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <div>
      <InputField
        value={text}
        updateText={setText}
        handleAction={addTask}
      />

      <TodoList />
    </div>
  );
}

export default App;
