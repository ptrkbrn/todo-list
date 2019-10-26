import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({todo: evt.target.value})
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const { addTodo } = this.props;
        const { todo } = this.state;
        const newTodo = {text: todo, id: uuid()}
        addTodo(newTodo);
        this.setState({todo: ''});
    }
    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Add a new todo..."
                    value={this.state.todo}
                    onChange={this.handleChange}
                    autoFocus
                    autoComplete="off"
                    required />
                <button className="NewTodoForm-button">Add</button>
            </form>
        )
    }
}

export default NewTodoForm;
