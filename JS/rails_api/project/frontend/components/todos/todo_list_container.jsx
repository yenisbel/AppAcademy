import { connect } from "react-redux";
import ToDoList from './todo_list';

import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../../actions/todo_actions';
import {allTodos} from '../../reducers/selectors';


const mapStateToProps = (state) => ({
    todos: allTodos(state),
    errors: state.errors
});

const mapDispatchToProps = dispatch => ({
    requestTodos: () => dispatch(fetchTodos()),
    createTodo: todo => dispatch(createTodo(todo)),
    updateTodo: todo => dispatch(updateTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);