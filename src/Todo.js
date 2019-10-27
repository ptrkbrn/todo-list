import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo,
            editing: false,
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.startEdit = this.startEdit.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }
    handleDelete() {
        const { id, deleteTodo } = this.props;
        deleteTodo(id);
    }
    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value});
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const { editTodo, id } = this.props;
        const { todo, editing } = this.state;
        editTodo(id, todo);
        this.setState({editing: !editing})
    }
    startEdit(evt) {
        const { editing } = this.state;
        this.setState({editing: !editing})
    }
    handleComplete(evt) {
        const { toggleTodo, id } = this.props;
        evt.stopPropagation();
        toggleTodo(id);
    }
    render() {
        const { todo, editing } = this.state;
        const { complete } = this.props;
        const displayTodo = !editing
                ? <p onClick={this.handleComplete} className={complete ? 'complete' : undefined}>
                     {todo}
                </p>
                : <form className="Todo-form" onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="todo"
                        value={todo}
                    />
                    <button className="Todo-button fas fa-check" />
                </form>
        return (
            <li className="Todo">
                {displayTodo}
                {!editing && <div className="Todo-buttons">
                    <button onClick={this.startEdit}className="Todo-button fas fa-edit" />
                    <button onClick={this.handleDelete} className="Todo-button fas fa-trash-alt" />
                </div>}
            </li>
        )
    }
}

export default Todo;
