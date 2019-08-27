import React from 'react';
import Posts from './containers/Posts';
import { getAllPosts } from './services';
import './App.css';

class App extends React.Component {

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
    console.log(this.state.posts);
    return (
      <div className="App">
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}


export default App;
