import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App(props) {
  return (
    <div className="App">
      <p>
        Welcome to React with Redux
      </p>
      <div className='Todo-App'>
        <TodoForm 
        currentTodo={props.currentTodo}
        changeCurrent={props.changeCurrent}
        />
        <TodoList todos={props.todos} />
      </div>
    </div>
  );
}

// export default App;
const mapStateToProps = (state) => state
const ConnectedApp = connect(mapStateToProps)(App)
export default ConnectedApp
