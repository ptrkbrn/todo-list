import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({text: evt.target.value})
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const { addTodo } = this.props;
        const newTodo = {...this.state, id: uuid(), complete: false}
        addTodo(newTodo);
        this.setState({text: ''});
    }
    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Add a new todo..."
                    value={this.state.text}
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
