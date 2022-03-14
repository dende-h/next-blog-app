/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  userName?: string | null,
  profile?: string | null,
};

export type ModelUserConditionInput = {
  userName?: ModelStringInput | null,
  profile?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
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

export type User = {
  __typename: "User",
  id: string,
  userName?: string | null,
  blog?: ModelBlogConnection | null,
  profile?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items:  Array<Blog | null >,
  nextToken?: string | null,
};

export type Blog = {
  __typename: "Blog",
  id: string,
  title?: string | null,
  content?: string | null,
  userBlogId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  userName?: string | null,
  profile?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateBlogInput = {
  id?: string | null,
  title?: string | null,
  content?: string | null,
  userBlogId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelBlogConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  userBlogId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
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

export type UpdateBlogInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  userBlogId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  userName?: ModelStringInput | null,
  profile?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  userBlogId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    userName?: string | null,
    blog?:  {
      __typename: "ModelBlogConnection",
      items:  Array< {
        __typename: "Blog",
        id: string,
        title?: string | null,
        content?: string | null,
        userBlogId?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    profile?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    userName?: string | null,
    blog?:  {
      __typename: "ModelBlogConnection",
      items:  Array< {
        __typename: "Blog",
        id: string,
        title?: string | null,
        content?: string | null,
        userBlogId?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    profile?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    userName?: string | null,
    blog?:  {
      __typename: "ModelBlogConnection",
      items:  Array< {
        __typename: "Blog",
        id: string,
        title?: string | null,
        content?: string | null,
        userBlogId?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    profile?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "Blog",
    id: string,
    title?: string | null,
    content?: string | null,
    userBlogId?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "Blog",
    id: string,
    title?: string | null,
    content?: string | null,
    userBlogId?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "Blog",
    id: string,
    title?: string | null,
    content?: string | null,
    userBlogId?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    userName?: string | null,
    blog?:  {
      __typename: "ModelBlogConnection",
      items:  Array< {
        __typename: "Blog",
        id: string,
        title?: string | null,
        content?: string | null,
        userBlogId?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    profile?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      userName?: string | null,
      blog?:  {
        __typename: "ModelBlogConnection",
        nextToken?: string | null,
      } | null,
      profile?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "Blog",
    id: string,
    title?: string | null,
    content?: string | null,
    userBlogId?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      title?: string | null,
      content?: string | null,
      userBlogId?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlogsByUserBlogIdQueryVariables = {
  userBlogId: string,
  updatedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetBlogsByUserBlogIdQuery = {
  getBlogsByUserBlogId?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      title?: string | null,
      content?: string | null,
      userBlogId?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    userName?: string | null,
    blog?:  {
      __typename: "ModelBlogConnection",
      items:  Array< {
        __typename: "Blog",
        id: string,
        title?: string | null,
        content?: string | null,
        userBlogId?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    profile?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    userName?: string | null,
    blog?:  {
      __typename: "ModelBlogConnection",
      items:  Array< {
        __typename: "Blog",
        id: string,
        title?: string | null,
        content?: string | null,
        userBlogId?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    profile?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    userName?: string | null,
    blog?:  {
      __typename: "ModelBlogConnection",
      items:  Array< {
        __typename: "Blog",
        id: string,
        title?: string | null,
        content?: string | null,
        userBlogId?: string | null,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    profile?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateBlogSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "Blog",
    id: string,
    title?: string | null,
    content?: string | null,
    userBlogId?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateBlogSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "Blog",
    id: string,
    title?: string | null,
    content?: string | null,
    userBlogId?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteBlogSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "Blog",
    id: string,
    title?: string | null,
    content?: string | null,
    userBlogId?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};
