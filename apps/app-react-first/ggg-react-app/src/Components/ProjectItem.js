import React, { Component } from 'react';

class ProjectItem extends Component {
    deleteProject(id) {
        console.log("deleteProject", "deleteProject");
        this.props.onDelete(id);
    }
    render() {

        // console.log(this.props);
        return (
            <li className="Project">
                <strong id={this.props.project.id}>{this.props.project.title}</strong> - {this.props.project.category}
                <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
            </li>
        );
    }
}
ProjectItem.propTypes = {
    project: React.PropTypes.object,
    onDelete: React.PropTypes.func
}
export default ProjectItem;
