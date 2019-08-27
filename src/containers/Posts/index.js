import React from 'react';
import { getAllPosts } from '../../services';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    getAllPosts().then(data => { this.setState({ posts: data.posts }) });
  }

  render() {
    const { posts } = this.state;
    console.log(posts, posts.length > 0);
    return (
      <div>
        {posts.length > 0 && posts.map(post => <p><a href={`/posts/${post.id}`}>{post.title}</a></p>)}
      </div>
    );
  }
}
export default Posts;
