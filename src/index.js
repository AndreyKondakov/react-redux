import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const state = {
  todos: [
    {id: 1, name: 'Creacte statuc UI.', isComplete: true},
    {id: 2, name: 'Creacte initial state.', isComplete: true},
    {id: 3, name: 'Use state to Render UI.', isComplete: false},
  ]
}

ReactDOM.render(<App todos={state.todos} />, document.getElementById('root'));
serviceWorker.unregister();
