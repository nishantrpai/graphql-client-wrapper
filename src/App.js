import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
// setup your `RestLink` with your endpoint
import Posts from '../src/containers/Posts';
import './App.css';
const restLink = new RestLink({ uri: "https://jsonplaceholder.typicode.com/" });
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

function getAllPosts(){
  
}

function App() {
  return (
    <div className="App">
      <Posts/>
    </div>
  );
}

const 

export default App;
