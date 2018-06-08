import React, { Component } from 'react';
class ToDoItem extends Component {
    onChecked(todoItem) {
        let todoItemString = JSON.stringify(todoItem);
        alert(todoItemString);
    }
    render() {
        return (
            <li className="ToDo">
                <span>UserId: {this.props.todoItem.userId}</span>&nbsp;&nbsp;|&nbsp;&nbsp;
                Completed: <input type="checkbox" checked={this.props.todoItem.completed} onChange={this.onChecked.bind(this, this.props.todoItem)} />&nbsp;&nbsp;|&nbsp;&nbsp;
                Title: <strong id={this.props.todoItem.id}>{this.props.todoItem.title}</strong>
                <br />
            </li>
        );
    }
}
ToDoItem.propTypes = {
    todoItem: React.PropTypes.object,
}
export default ToDoItem;
