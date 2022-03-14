/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createName = /* GraphQL */ `
  mutation CreateName(
    $input: CreateNameInput!
    $condition: ModelNameConditionInput
  ) {
    createName(input: $input, condition: $condition) {
      id
      handleName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateName = /* GraphQL */ `
  mutation UpdateName(
    $input: UpdateNameInput!
    $condition: ModelNameConditionInput
  ) {
    updateName(input: $input, condition: $condition) {
      id
      handleName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteName = /* GraphQL */ `
  mutation DeleteName(
    $input: DeleteNameInput!
    $condition: ModelNameConditionInput
  ) {
    deleteName(input: $input, condition: $condition) {
      id
      handleName
      createdAt
      updatedAt
      owner
    }
  }
`;
