import React from 'react';
import { getPost } from '../../services';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        id: '',
        title: '',
        body: '',
        user: {
          name: ''
        }
      }
    }
  }
  componentDidMount() {
    getPost(this.props.match.params.id).then(data => this.setState({ post: data.post }));
  }
  render() {
    return (
      <div style={{maxWidth: '500px', margin: 'auto'}}>
        <h1>{this.state.post.title}</h1>
        <h3>{this.state.post.user.name}</h3>
        <p>{this.state.post.body}</p>
      </div>

    );
  }
}
export default Post;
