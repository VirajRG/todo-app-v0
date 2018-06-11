let ID = 1;
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: ID++,
          title: action.title,
          desp : action.desp
        }
      ];
    case 'FETCH_TODOS':
      return action.todos;
    case 'EDIT_TODO':
      var todos = state;
      var index = state.findIndex((obj => obj.id == action.id));
      todos[index].title = action.title;
      todos[index].desp = action.desp;
      return todos;
    case 'DELETE_TODO':
      var newTodos = state.filter(function(todo) {
        return todo.id !== action.id;
      });
      return newTodos;
    default:
      return state;
  }
}
export default todos;