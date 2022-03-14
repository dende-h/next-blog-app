/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      content
      author
      handlename {
        id
        handleName
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        author
        handlename {
          id
          handleName
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getName = /* GraphQL */ `
  query GetName($id: ID!) {
    getName(id: $id) {
      id
      handleName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listNames = /* GraphQL */ `
  query ListNames(
    $filter: ModelNameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        handleName
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
