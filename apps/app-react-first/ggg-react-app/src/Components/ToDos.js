import React, { Component } from 'react';
import ToDoItem from "./ToDoItem"
class ToDos extends Component {

    render() {
        let todoItems;
        if (this.props.todoItems) {
            todoItems = this.props.todoItems.map(todo => {
                // console.log(project);
                return (
                    <ToDoItem key={todo.id} todoItem={todo} />
                );
            });
        }
        // console.log(this.props);
        return (
            <div className="Todos">
                <h3>ToDo List</h3>
                {todoItems}
            </div>
        );
    }
}

ToDos.propTypes = {
    todoItems: React.PropTypes.array,
}

export default ToDos;
