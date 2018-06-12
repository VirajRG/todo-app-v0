import { connect } from 'react-redux'
import TodoComponent from './todo-component'

const todos = [
  {id:0, title:'Dummy Todo', desp:'This todo is to guide you. Click the above button you want to create a new todo and click the respective icons if you want to edit or delete the todo'}
];

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo : (title, desp) => {
      dispatch({type:'ADD_TODO', title, desp});
    },
    editTodo : (id, title, desp) => {
      console.log('edit todo with id', id);
      dispatch({type:'EDIT_TODO', id, title, desp});
    },
    deleteTodo : (id) => {
      console.log('delete todo with id', id);
      dispatch({type:'DELETE_TODO', id});
    },
    fetchTodos : () => {
      dispatch({type:'FETCH_TODOS', todos:todos})
    }
  }
}

const mapStateToProps = state => {
  return {
    todos:state.todos
  }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoComponent)

export default TodoContainer
