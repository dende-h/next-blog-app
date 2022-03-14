/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePostInput = {
  id?: string | null,
  title: string,
  content: string,
  author: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  author?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  content: string,
  author: string,
  handlename?: Name | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type Name = {
  __typename: "Name",
  id: string,
  handleName?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  author?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateNameInput = {
  id?: string | null,
  handleName?: string | null,
};

export type ModelNameConditionInput = {
  handleName?: ModelStringInput | null,
  and?: Array< ModelNameConditionInput | null > | null,
  or?: Array< ModelNameConditionInput | null > | null,
  not?: ModelNameConditionInput | null,
};

export type UpdateNameInput = {
  id: string,
  handleName?: string | null,
};

export type DeleteNameInput = {
  id: string,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  author?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelNameFilterInput = {
  id?: ModelIDInput | null,
  handleName?: ModelStringInput | null,
  and?: Array< ModelNameFilterInput | null > | null,
  or?: Array< ModelNameFilterInput | null > | null,
  not?: ModelNameFilterInput | null,
};

export type ModelNameConnection = {
  __typename: "ModelNameConnection",
  items:  Array<Name | null >,
  nextToken?: string | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    author: string,
    handlename?:  {
      __typename: "Name",
      id: string,
      handleName?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    author: string,
    handlename?:  {
      __typename: "Name",
      id: string,
      handleName?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    author: string,
    handlename?:  {
      __typename: "Name",
      id: string,
      handleName?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateNameMutationVariables = {
  input: CreateNameInput,
  condition?: ModelNameConditionInput | null,
};

export type CreateNameMutation = {
  createName?:  {
    __typename: "Name",
    id: string,
    handleName?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateNameMutationVariables = {
  input: UpdateNameInput,
  condition?: ModelNameConditionInput | null,
};

export type UpdateNameMutation = {
  updateName?:  {
    __typename: "Name",
    id: string,
    handleName?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteNameMutationVariables = {
  input: DeleteNameInput,
  condition?: ModelNameConditionInput | null,
};

export type DeleteNameMutation = {
  deleteName?:  {
    __typename: "Name",
    id: string,
    handleName?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    author: string,
    handlename?:  {
      __typename: "Name",
      id: string,
      handleName?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      content: string,
      author: string,
      handlename?:  {
        __typename: "Name",
        id: string,
        handleName?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNameQueryVariables = {
  id: string,
};

export type GetNameQuery = {
  getName?:  {
    __typename: "Name",
    id: string,
    handleName?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListNamesQueryVariables = {
  filter?: ModelNameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNamesQuery = {
  listNames?:  {
    __typename: "ModelNameConnection",
    items:  Array< {
      __typename: "Name",
      id: string,
      handleName?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  author?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    author: string,
    handlename?:  {
      __typename: "Name",
      id: string,
      handleName?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  author?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    author: string,
    handlename?:  {
      __typename: "Name",
      id: string,
      handleName?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  author?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    content: string,
    author: string,
    handlename?:  {
      __typename: "Name",
      id: string,
      handleName?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateNameSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateNameSubscription = {
  onCreateName?:  {
    __typename: "Name",
    id: string,
    handleName?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateNameSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateNameSubscription = {
  onUpdateName?:  {
    __typename: "Name",
    id: string,
    handleName?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteNameSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteNameSubscription = {
  onDeleteName?:  {
    __typename: "Name",
    id: string,
    handleName?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
