import React from 'react';
import Posts from './containers/Posts';
import Post from './containers/Post';
import { getAllPosts } from './services';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={Posts} />
          <Route path="/posts/:id" component={Post} />
        </Router>
      </div>
    );
  }
}


export default App;
