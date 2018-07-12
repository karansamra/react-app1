import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import Posts from './Components/Posts';
import AddProjects from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }


  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    });
  }

  getPosts() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      dataType: 'json',
      data: {},
      success: function(data, status, xhr) {
        this.setState({
          posts: data
        }, function() {
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, error) {
        console.log(error);
      }
    })
  }

  componentWillMount() {
    this.getProjects();
    this.getPosts();
  }

  componentDidMount() {
    this.getProjects();
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(project=>{
      return project.id === id
    });
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
       My App
       <AddProjects addProject = {this.handleAddProject.bind(this)}/>
       <br/>
       <Projects projects = {this.state.projects} deleteProject = {this.handleDeleteProject.bind(this)} ></Projects>
       <br/>
       <hr/>
       <Posts posts = {this.state.posts}></Posts>
      </div>
    );
  }
}

export default App;
