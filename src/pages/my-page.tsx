import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import { useRouter } from "next/router";
import { ProtectRoute } from "../components/ProtectRoute";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isAuthenticatedState } from "../globalState/isAuthenticatedState";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { CreatePostInput, CreatePostMutation, ListPostsQuery } from "../API";
import { useEffect, useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import awsExports from "../aws-exports";
import { createPost } from "../graphql/mutations";
import { listPosts } from "../graphql/queries";
import { blogLists } from "../globalState/blogLists";

Amplify.configure({ ...awsExports, ssr: true });

const initialState = { name: "", title: "", content: "" };

const Mypage = () => {
	const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);
	const router = useRouter();
	const [formState, setFormState] = useState(initialState);
	const [blogList, setBloglist] = useRecoilState(blogLists);

	const setInput = (key: string, value: string) => {
		setFormState({ ...formState, [key]: value });
	};

	useEffect(() => {
		const dairyList = async () => {
			try {
				const result = (await API.graphql({
					query: listPosts
				})) as GraphQLResult<ListPostsQuery>;
				if (!result) return;
				console.log(result.data.listPosts.items);
				setBloglist(result.data.listPosts.items);
			} catch (error) {
				console.log(error);
			}
		};
		dairyList();
	}, []);

	const addDiary = async () => {
		try {
			if (!formState.title || !formState.content) return;
			const inputDairy: CreatePostInput = { ...formState };
			setFormState(initialState);
			(await API.graphql({
				authMode: "AMAZON_COGNITO_USER_POOLS",
				query: createPost,
				variables: {
					input: inputDairy
				}
			})) as GraphQLResult<CreatePostMutation>;
			console.log("OK");
		} catch (error) {
			console.log("error creating dairy :", error);
		}
	};

	const signOut = async () => {
		try {
			await Auth.signOut();
			setIsAuthenticated(false);
			router.push("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<ProtectRoute>
				<h1>Mypage</h1>
				<Input onChange={(e) => setInput("name", e.target.value)} value={formState.name}></Input>
				<Input onChange={(e) => setInput("title", e.target.value)} value={formState.title}></Input>
				<Input onChange={(e) => setInput("content", e.target.value)} value={formState.content}></Input>
				<Button onClick={addDiary}>Create Todo</Button>
				<Box>
					{blogList.map((item) => {
						return (
							<Box key={item.id}>
								<Text> {item.owner}</Text>
								<Text> {item.content}</Text>
							</Box>
						);
					})}
				</Box>
				logdIn
				<button onClick={signOut}>ログアウト</button>
			</ProtectRoute>
		</div>
	);
};
export default Mypage;
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
