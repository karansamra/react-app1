import React, { Component } from 'react';

class PostItems extends Component {

  render() {
    return (
      <li className="postItems">
        <strong>{this.props.post.title}</strong>
      </li>
    );
  }
}

export default PostItems;