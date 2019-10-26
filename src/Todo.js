import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo,
            editing: false,
            complete: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.startEdit = this.startEdit.bind(this);
        this.markComplete = this.markComplete.bind(this);
    }
    handleClick() {
        const { id, deleteTodo } = this.props;
        deleteTodo(id);
    }
    handleChange(evt) {
        this.setState({todo: evt.target.value});
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const { editTodo, id } = this.props;
        const { todo, editing } = this.state;
        const newTodo = {text: todo, id: id};
        editTodo(newTodo);
        this.setState({editing: !editing})
    }
    startEdit(evt) {
        const { editing } = this.state;
        this.setState({editing: !editing})
    }
    markComplete() {
        const { complete } = this.state;
        this.setState({complete: !complete});
    }
    render() {
        const { todo, editing, complete } = this.state;
        const displayTodo = !editing
                ? <p className={complete ? 'complete' : undefined}>
                     {todo}
                </p>
                : <form className="Todo-form" onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        value={todo}
                    />
                    <button className="Todo-button fas fa-check"></button>
                </form>
        return (
            <div className="Todo" onClick={this.markComplete}>
                {displayTodo}
                {!editing && <div className="Todo-buttons">
                    <i onClick={this.startEdit}className="Todo-button fas fa-edit"></i>
                    <i onClick={this.handleClick} className="Todo-button fas fa-trash-alt" />
                </div>}
            </div>
        )
    }
}

export default Todo;
