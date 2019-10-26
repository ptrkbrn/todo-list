import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.add = this.add.bind(this);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
    }
    add(newTodo) {
        this.setState(state => ({todos: [...state.todos, newTodo]}));
    }
    edit(newTodo) {
        const { todos } = this.state;
        this.setState(() => ({todos: todos.map(todo => todo.id === newTodo.id ? todo = newTodo : todo)}))
    }
    delete(todoId) {
        this.setState(state => ({todos: state.todos.filter(todo => todo.id !== todoId)}))
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
