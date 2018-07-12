import React, { Component } from 'react';

class ProjectsItems extends Component {

  deleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
        &nbsp;<input type = "button" name = "deleteProject" value = "delete" onClick = {this.deleteProject.bind(this, this.props.project.id)}/>
      </li>
    );
  }
}

export default ProjectsItems;