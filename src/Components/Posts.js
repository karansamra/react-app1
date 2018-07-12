import React, { Component } from 'react';
import PostItems from './PostItems';
class Posts extends Component {
  
    render() {
      let postItems;
      if(this.props.posts) {
        postItems = this.props.posts.map(
              post => {
                  return(<PostItems key = {post.id} post = {post} ></PostItems>);
              }
          );
      }
    return (
      <div className="Posts">
       My Posts
       <ul>
        {postItems}
       </ul> 
      </div>
    );
  }
}

export default Posts;