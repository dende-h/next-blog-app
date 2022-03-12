import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { ProtectRoute } from "../components/ProtectRoute";
import { useSetRecoilState } from "recoil";
import { isAuthenticatedState } from "../globalState/isAuthenticatedState";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api";
import { ListTodosQuery, CreateTodoInput } from "../API";
import { createTodo, deleteTodo } from "../graphql/mutations";
import { listTodos } from "../graphql/queries";
import { useEffect, useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";

const initialState = { name: "", description: "" };

const Mypage = () => {
	const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);
	const router = useRouter();
	const [formState, setFormState] = useState(initialState);
	const [todos, setTodos] = useState<CreateTodoInput[]>([]);

	const setInput = (key: string, value: string) => {
		setFormState({ ...formState, [key]: value });
	};

	const asyncFunc = async () => {
		try {
			const todoData = (await API.graphql(graphqlOperation(listTodos))) as GraphQLResult<ListTodosQuery>;
			if (todoData.data?.listTodos?.items) {
				const todos = todoData.data.listTodos.items as CreateTodoInput[];
				setTodos(todos);
				console.log(todos);
			}
		} catch (error) {
			console.log("error fetching todos");
		}
		asyncFunc();
		console.log(todos);
	};

	const addTodo = async () => {
		try {
			if (!formState.name || !formState.description) return;
			const todo: CreateTodoInput = { ...formState };
			setTodos([...todos, todo]);
			setFormState(initialState);
			(await API.graphql(graphqlOperation(createTodo, { input: todo }))) as GraphQLResult<CreateTodoInput>;
		} catch (error) {
			console.log("error creating todo :", error);
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
				<Input onChange={(e) => setInput("description", e.target.value)} value={formState.description}></Input>
				<Button onClick={addTodo}>Create Todo</Button>
				<Box>
					{todos.map((item) => {
						item.name;
					})}
				</Box>
				logdIn
				<button onClick={signOut}>ログアウト</button>
			</ProtectRoute>
		</div>
	);
};
export default Mypage;
