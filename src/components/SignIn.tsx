import {
	Box,
	Button,
	Checkbox,
	Divider,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	Text
} from "@chakra-ui/react";
import { memo, useEffect, useState, VFC } from "react";

import { useInputForm } from "../hooks/useInputForm";
import { Auth } from "aws-amplify";
import Router from "next/router";
import { toast } from "react-hot-toast";
import { useSetRecoilState } from "recoil";
import { isSignUpState } from "../globalState/isSignUpState";

const SignIn: VFC = memo(() => {
	const email = useInputForm();
	const password = useInputForm();
	const code = useInputForm();
	const newPassword = useInputForm();
	const [isForgotPassword, setIsForgotPassword] = useState(false);
	const [isSendCode, setIsSendCode] = useState(false);
	const setIsSignUp = useSetRecoilState(isSignUpState);
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		const abortController = new AbortController();
		const isAuth = async () => {
			const currentUser = await Auth.currentAuthenticatedUser();
			try {
				currentUser ? Router.push("my-page") : Router.push("sign-in");
			} catch (error) {
				console.log(error);
			}
		};
		isAuth();
		return () => {
			abortController.abort();
		};
	}, []);

	const signIn = async () => {
		try {
			await Auth.signIn(email.value, password.value);
			Router.push("my-page");
		} catch (error) {
			console.log(error);
		}
	};
	const sendCode = async () => {
		try {
			await Auth.forgotPassword(email.value);
			setIsSendCode(true);
		} catch (error) {
			console.log(error);
		}
	};

	const resetPassword = async () => {
		try {
			await Auth.forgotPasswordSubmit(email.value, code.value, newPassword.value);
			setIsForgotPassword(false);
			setIsSendCode(false);
			toast.success("completed reset password");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{isForgotPassword ? (
				<>
					<Flex justify="center" minHeight="">
						<Box bg="blue.50" w="sm" p={4} borderRadius="md" shadow="md">
							<Heading color="teal" as="h1" size="lg" textAlign="center" fontFamily={"cursive"}>
								Password reset
							</Heading>
							<Divider my={2} />
							{isSendCode ? (
								<Stack spacing={6} py={4} px={10}>
									<Input
										bg="grey.200"
										placeholder="Verification code"
										type={"text"}
										value={code.value}
										onChange={code.onChangeInputForm}
									/>
									<Input
										bg="grey.200"
										placeholder="New password"
										type={isChecked ? "text" : "password"}
										value={newPassword.value}
										onChange={newPassword.onChangeInputForm}
									/>
									<Button colorScheme={"twitter"} outline="none" onClick={resetPassword}>
										Reset password
									</Button>
									<Text
										as={"a"}
										fontSize={"15px"}
										fontFamily={"serif"}
										_hover={{ color: "teal", fontWeight: "bold", textDecoration: "underline" }}
									>
										If you do not receive an email
									</Text>
								</Stack>
							) : (
								<Stack spacing={6} py={4} px={10}>
									<Input
										bg="grey.200"
										placeholder="Enter email"
										type={"email"}
										value={email.value}
										onChange={email.onChangeInputForm}
									/>

									<Button colorScheme={"twitter"} outline="none" onClick={sendCode}>
										confirm
									</Button>
									<Text
										as={"a"}
										fontSize={"15px"}
										fontFamily={"serif"}
										_hover={{ color: "teal", fontWeight: "bold", textDecoration: "underline" }}
									>
										If you do not receive an email
									</Text>
								</Stack>
							)}
						</Box>
					</Flex>
					<Box textAlign={"center"} p="3">
						<Text
							as={"a"}
							fontSize={"15px"}
							fontFamily={"serif"}
							_hover={{ color: "teal", fontWeight: "bold", textDecoration: "underline" }}
							onClick={() => {
								setIsForgotPassword(false);
								setIsSendCode(false);
							}}
						>
							Go to sign-in page
						</Text>
					</Box>
				</>
			) : (
				<>
					<Flex justify="center" minHeight="">
						<Box bg="blue.50" w="sm" p={4} borderRadius="md" shadow="md">
							<Heading color="teal" as="h1" size="lg" textAlign="center" fontFamily={"cursive"}>
								User Login Form
							</Heading>
							<Divider my={2} />
							<Stack spacing={6} py={4} px={10}>
								<FormControl>
									<FormLabel htmlFor="email">
										<Text>Email</Text>
									</FormLabel>
									<Input
										bg="grey.200"
										placeholder="Enter email"
										type={"email"}
										value={email.value}
										onChange={email.onChangeInputForm}
									/>
									<FormLabel htmlFor="password">
										<Text>Password</Text>
									</FormLabel>
									<Input
										bg="grey.200"
										placeholder="Enter Password"
										type={isChecked ? "text" : "password"}
										value={password.value}
										onChange={password.onChangeInputForm}
									/>
								</FormControl>
								<Button colorScheme={"twitter"} outline="none" onClick={signIn}>
									Sign in
								</Button>
								<Text
									as={"a"}
									fontSize={"15px"}
									fontFamily={"serif"}
									_hover={{ color: "teal", fontWeight: "bold", textDecoration: "underline" }}
									onClick={() => {
										setIsSignUp(true);
									}}
								>
									If you don't have an account ?
								</Text>
							</Stack>
						</Box>
					</Flex>
					<Box textAlign={"center"} p={"4"}>
						<Box>
							<Checkbox isChecked={isChecked} onChange={() => setIsChecked(!isChecked)}>
								Show password
							</Checkbox>
						</Box>
						<Text
							as={"a"}
							fontSize={"15px"}
							fontFamily={"serif"}
							_hover={{ color: "teal", fontWeight: "bold", textDecoration: "underline" }}
							onClick={() => {
								setIsForgotPassword(true);
							}}
						>
							Forgot your password?
						</Text>
					</Box>
				</>
			)}
		</>
	);
});
export default SignIn;
