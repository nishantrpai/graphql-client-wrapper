import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import gql from 'graphql-tag';
const restLink = new RestLink({ uri: "https://jsonplaceholder.typicode.com" });

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

export function getAllPosts() {
  return new Promise(function (resolve, reject) {
    const postsQuery = gql`
      query postsQuery {
        posts @rest(type: "[Post]", path: "/posts") {
          id
          title
        }
      }
    `
    client.query({ query: postsQuery })
      .then(response => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch(err => {
        console.log(err);
        reject([]);
      })
  });
}

