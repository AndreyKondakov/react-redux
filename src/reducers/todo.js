const initState = {
    todos: [
      {id: 1, name: 'Creacte statuc UI.', isComplete: true},
      {id: 2, name: 'Creacte initial state.', isComplete: true},
      {id: 3, name: 'Use state to Render UI.', isComplete: false},
    ]
}
export default (state = initState, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return {...state, todos: state.todos.concat(action.payload)}
    default:
      return state
    }
}
