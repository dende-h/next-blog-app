import { Amplify, API, withSSRContext } from "aws-amplify";
import { ProtectRoute } from "../components/ProtectRoute";
import { useRecoilState, useSetRecoilState } from "recoil";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { useEffect, useState } from "react";
import { Box, Button, Center, IconButton, Input, Stack, Text, Wrap, WrapItem, Spacer } from "@chakra-ui/react";
import awsExports from "../aws-exports";

import { blogLists } from "../globalState/blogLists";
import { Footer } from "../components/atoms/Footer";
import { PhraseCord } from "../components/PhraseCard";
import { AddPhraseCord } from "../components/AddPhraseCard ";
import MainHeaderLayout from "../templates/MainHeaderLayout";

Amplify.configure({ ...awsExports, ssr: true });

const initialState = { title: "", content: "" };

const PhraseDashBoard = () => {
	const [formState, setFormState] = useState(initialState);
	const [blogList, setBloglist] = useRecoilState(blogLists);

	const setInput = (key: string, value: string) => {
		setFormState({ ...formState, [key]: value });
	};

	return (
		<Box>
			<ProtectRoute>
				<Center>
					<Wrap p={"4"}>
						<WrapItem _hover={{ cursor: "pointer" }}>
							<PhraseCord />
						</WrapItem>
						<WrapItem>
							<PhraseCord />
						</WrapItem>
						<WrapItem>
							<PhraseCord />
						</WrapItem>
						<WrapItem>
							<PhraseCord />
						</WrapItem>
						<WrapItem>
							<PhraseCord />
						</WrapItem>
						<WrapItem>
							<AddPhraseCord />
						</WrapItem>
					</Wrap>
				</Center>
			</ProtectRoute>
			<Footer backgroundColor={"teal.300"} w={"100%"}></Footer>
		</Box>
	);
};
export default PhraseDashBoard;
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
