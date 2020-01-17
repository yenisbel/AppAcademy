import React from 'react';
import ErrorList from './error_list';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    update(field){
        return (e)=> this.setState({[field]: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const todo = Object.assign({}, this.state);
        this.props.createTodo({todo}).then(
            // to clear the form
            () => this.setState({
                title: "",
                body: "",
            })
        );
    }
    render() {
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <ErrorList errors={this.props.errors} />
                <label>Title:
                    <input
                        className="input"
                        ref="title"
                        value={this.state.title}
                        placeholder="Title"
                        onChange={this.update('title')}
                        required />
                </label>
                <br/>
                <label>Body:
                    <textarea
                        className="input"
                        ref="body"
                        cols='20'
                        value={this.state.body}
                        rows='5'
                        placeholder="description!"
                        onChange={this.update('body')}
                        required></textarea>
                </label>
                <button className="create-button">Create Todo!</button>
            </form>
        );
    }
}

export default TodoForm;