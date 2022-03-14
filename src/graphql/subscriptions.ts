/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      userName
      blog {
        items {
          id
          title
          content
          userBlogId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      profile
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      userName
      blog {
        items {
          id
          title
          content
          userBlogId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      profile
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      userName
      blog {
        items {
          id
          title
          content
          userBlogId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      profile
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($owner: String) {
    onCreateBlog(owner: $owner) {
      id
      title
      content
      userBlogId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($owner: String) {
    onUpdateBlog(owner: $owner) {
      id
      title
      content
      userBlogId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($owner: String) {
    onDeleteBlog(owner: $owner) {
      id
      title
      content
      userBlogId
      createdAt
      updatedAt
      owner
    }
  }
`;
