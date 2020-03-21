import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import {updateCurrent} from './reducers/todo'

function App(props) {
  return (
    <div className="App">
      <p>
        Welcome to React with Redux
      </p>
      <div className='Todo-App'>
        <TodoForm 
        currentTodo={props.currentTodo}
        changeCurrent={props.updateCurrent}
        />
        <TodoList todos={props.todos} />
      </div>
    </div>
  );
}

export default connect((state) => state, {updateCurrent})(App)
