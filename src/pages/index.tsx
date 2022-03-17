import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
// import { Authenticator } from "@aws-amplify/ui-react";
import { NextPage } from "next";
import { Box, Text } from "@chakra-ui/react";
// import { useRecoilValue } from "recoil";
import awsExports from "../aws-exports";
// import SignIn from "../components/SignIn";
// import SignUp from "../components/SignUp";
// import { isSignUpState } from "../globalState/isSignUpState";
// import { createPost } from "../graphql/mutations";
import { listBlogs, listUsers } from "../graphql/queries";
//import styles from "../styles/Home.module.css";
// import Head from "next/head";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { ListBlogsQuery, ListUsersQuery } from "../API";
// import "@aws-amplify/ui-react/styles.css";

Amplify.configure({ ...awsExports, ssr: true });

type Blog = {
	id: string;
	title?: string;
	content?: string;
	userBlogId?: string;
	createdAt?: string;
	updatedAt?: string;
	owner?: string;
};

type User = {
	id: string;
	userName?: string;
	blog?: Blog;
	profile?: string;
	createdAt?: Date;
	updatedAt?: Date;
	owner?: string;
};
export const getStaticProps = async ({ req }) => {
	const SSR = withSSRContext({ req });
	try {
		const response = (await SSR.API.graphql({ query: listUsers })) as GraphQLResult<ListUsersQuery>;
		console.log(response.data.listUsers.items);
		return {
			props: {
				users: response.data.listUsers.items
			},
			revalidate: 10
		};
	} catch (error) {
		console.log(error);
	}
};

// const handleCreatePost = async (event: React.FormEvent<HTMLFormElement>) => {
// 	event.preventDefault();

// 	const form = new FormData(event.currentTarget);

// 	try {
// 		const result = (await API.graphql({
// 			authMode: "AMAZON_COGNITO_USER_POOLS",
// 			query: createPost,
// 			variables: {
// 				input: {
// 					title: form.get("title"),
// 					content: form.get("content")
// 				}
// 			}
// 		})) as GraphQLResult<CreatePostMutation>;
// 		if ("data" in result && result.data) {
// 			const data = result.data as CreatePostMutation;
// 			window.location.href = `/posts/${data.createPost.id}`;
// 		}
// 	} catch ({ errors }) {
// 		console.error(...errors);
// 		throw new Error(errors[0].message);
// 	}
// };

// const Index = ({ posts = [] }: { posts: Post[] }) => {
// 	return (
// 		<>
// 			<div>
// 				<Head>
// 					<title>Amplify + Next.js</title>
// 					<link rel="icon" href="/favicon.ico" />
// 				</Head>

// 				<main>
// 					<h1>Amplify + Next.js</h1>

// 					<p>
// 						<code>{posts.length}</code>
// 						posts
// 					</p>

// 					<div>
// 						{posts.map((post) => (
// 							<a href={`/posts/${post.id}`} key={post.id}>
// 								<h3>{post.title}</h3>
// 								<p>{post.content}</p>
// 							</a>
// 						))}

// 						<div>
// 							<h3>New Post</h3>

// 							<Authenticator />

// 							<form onSubmit={handleCreatePost}>
// 								<fieldset>
// 									<legend>Title</legend>
// 									<input defaultValue={`Today, ${new Date().toLocaleTimeString()}`} name="title" />
// 								</fieldset>

// 								<fieldset>
// 									<legend>Content</legend>
// 									<textarea defaultValue="I built an Amplify app with Next.js!" name="content" />
// 								</fieldset>

// 								<button>Create Post</button>
// 								<button type="button" onClick={() => Auth.signOut()}>
// 									Sign out
// 								</button>
// 							</form>
// 						</div>
// 					</div>
// 				</main>
// 			</div>
// 		</>
// 	);
// };
// export default Index;

const Index = ({ users = [] }: { users: User[] }) => {
	return (
		<>
			<Box>index page</Box>
			{users.map((item) => {
				return <Text>{item.userName}</Text>;
			})}
		</>
	);
};
export default Index;
