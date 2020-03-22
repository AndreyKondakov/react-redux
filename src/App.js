import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Message from './components/Message'

function App(props) {
  return (
    <div className="App">
      <p>
        Welcome to React with Redux
      </p>
      <div className='Todo-App'>
        <Message />
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}

export default App
