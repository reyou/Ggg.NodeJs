import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }

    static defaultProps = {
        categories: ["Web Design", "Web Development", "Mobile Development"]
    }

    handleSubmit(event) {
        console.log("handleSubmit", "handleSubmit");
        if (this.refs.title.value === '') {
            alert('Title is required!');
        }
        else {
            this.setState({
                newProject: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, function () {
                // console.log("this.state", this.state);
                this.props.addProject(this.state.newProject);
            });
        }
        event.preventDefault();
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });

        return (
            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label>
                        <input type="text" ref="title" />
                    </div>
                    <div>
                        <label>Category</label>
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
AddProject.propTypes = {
    categories: React.PropTypes.array,
    addProject: React.PropTypes.func
}
export default AddProject;
