import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
    static defaultProps = {
        savedTodos: JSON.parse(localStorage.getItem("todos")),
    }
    constructor(props) {
        super(props);
        const { savedTodos } = this.props;
        this.state = {
            todos: savedTodos ? savedTodos : [],
        }
        this.add = this.add.bind(this);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }
    add(newTodo) {
        this.setState(
            {todos: [...this.state.todos, newTodo]},
            () => localStorage.setItem("todos", JSON.stringify(this.state.todos)));
    }
    edit(newTodo) {
        const { todos } = this.state;
        this.setState(
            () => (
                {todos: todos.map(todo => todo.id === newTodo.id ? todo = newTodo : todo)}
            ),
            () => localStorage.setItem("todos", JSON.stringify(this.state.todos))
        )
    }
    delete(todoId) {
        this.setState(
            state => (
                {todos: state.todos.filter(todo => todo.id !== todoId)}
            ),
            () => localStorage.setItem("todos", JSON.stringify(this.state.todos))
        )
    }
    render() {
        const { todos } = this.state;
        return (
            <div className="TodoList">
                <div className="TodoList-top">
                    <header className="TodoList-header">
                        <h1>Todo List</h1>
                        <p>Keep track of yr shit. Created w/ React.</p>
                        <hr />
                    </header>
                    <div className="TodoList-todos">
                        {todos.filter(todo => todo.text).map(todo => <Todo todo={todo.text} id={todo.id} key={todo.id} editTodo={this.edit} deleteTodo={this.delete}/>)}
                    </div>
                </div>
                {!todos[0]  && <h1 className="TodoList-filler">Todos go here.</h1>}
                <NewTodoForm addTodo={this.add} />
            </div>
        )
    }
}

export default TodoList;
