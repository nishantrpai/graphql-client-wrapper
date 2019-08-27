import React from 'react';

class Posts extends React.Component {
  render() {
    const { posts } = this.props;
    console.log(posts, posts.length > 0);
    return (
      <div>
        {posts.length > 0 && posts.map(post => <p><a href={`/posts/${post.id}`}>{post.title}</a></p>)}
      </div>
    );
  }
}
export default Posts;
