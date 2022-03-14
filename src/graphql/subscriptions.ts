/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($author: String) {
    onCreatePost(author: $author) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($author: String) {
    onUpdatePost(author: $author) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($author: String) {
    onDeletePost(author: $author) {
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
export const onCreateName = /* GraphQL */ `
  subscription OnCreateName($owner: String) {
    onCreateName(owner: $owner) {
      id
      handleName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateName = /* GraphQL */ `
  subscription OnUpdateName($owner: String) {
    onUpdateName(owner: $owner) {
      id
      handleName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteName = /* GraphQL */ `
  subscription OnDeleteName($owner: String) {
    onDeleteName(owner: $owner) {
      id
      handleName
      createdAt
      updatedAt
      owner
    }
  }
`;
