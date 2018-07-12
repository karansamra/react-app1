import React, { Component } from 'react';
import ProjectsItems from './ProjectItems';
class Projects extends Component {
  
    deleteProject(id) {
        this.props.deleteProject(id);
    }
  
    render() {
      let projectItems;
      if(this.props.projects) {
          projectItems = this.props.projects.map(
              project => {
                  return(<ProjectsItems key = {project.id} project = {project} onDelete = {this.deleteProject.bind(this)}></ProjectsItems>);
              }
          );
      }
    return (
      <div className="Projects">
       My Projects
       <ul>
        {projectItems}
       </ul> 
      </div>
    );
  }
}

export default Projects;
