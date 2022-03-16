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
import { useRecoilState, useSetRecoilState } from "recoil";
import { isSignUpState } from "../globalState/isSignUpState";
import { isAuthenticatedState } from "../globalState/isAuthenticatedState";

const SignIn: VFC = memo(() => {
	const email = useInputForm();
	const password = useInputForm();
	const code = useInputForm();
	const newPassword = useInputForm();
	const [isForgotPassword, setIsForgotPassword] = useState(false);
	const [isSendCode, setIsSendCode] = useState(false);
	const setIsSignUp = useSetRecoilState(isSignUpState);
	const [isChecked, setIsChecked] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedState);
	const [isDisabledSignInButton, SetIsDisabledSignInButton] = useState(true);
	const [isDisabledConfirmButton, SetIsDisabledConfirmButton] = useState(true);
	const [isDisabledResetButton, SetIsDisabledResetButton] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const regexPassword = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])/;

	useEffect(() => {
		isAuthenticated && Router.push("PhraseDashBoard");
	}, []);

	useEffect(() => {
		email.value !== "" && password.value !== "" && !isLoading
			? SetIsDisabledSignInButton(false)
			: SetIsDisabledSignInButton(true);
	}, [email.value, password.value]);

	useEffect(() => {
		email.value !== "" && !isLoading ? SetIsDisabledConfirmButton(false) : SetIsDisabledConfirmButton(true);
	}, [email.value, password.value]);

	useEffect(() => {
		code.value !== "" && newPassword.value.length > 7 && regexPassword.test(newPassword.value) && !isLoading
			? SetIsDisabledResetButton(false)
			: SetIsDisabledResetButton(true);
	}, [code.value, newPassword.value]);

	const signIn = async () => {
		try {
			setIsLoading(true);
			await Auth.signIn(email.value, password.value);
			setIsAuthenticated(true);
			Router.push("PhraseDashBoard");
		} catch (error) {
			toast.error("Could not Sign in.");
			setIsLoading(false);
		}
	};
	const sendCode = async () => {
		try {
			setIsLoading(true);
			await Auth.forgotPassword(email.value);
			setIsSendCode(true);
			setIsLoading(false);
		} catch (error) {
			toast.error("Please check your email address");
			setIsLoading(false);
		}
	};

	const resetPassword = async () => {
		try {
			setIsLoading(true);
			await Auth.forgotPasswordSubmit(email.value, code.value, newPassword.value);
			setIsForgotPassword(false);
			setIsSendCode(false);
			toast.success("completed reset password");
			setIsLoading(false);
		} catch (error) {
			toast.error("Please confirm your entry");
			setIsLoading(false);
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
									<FormControl>
										<FormLabel htmlFor="email">
											<Text>Please enter the verification code</Text>
										</FormLabel>
										<Input
											bg="grey.200"
											placeholder="Verification code"
											type={"text"}
											value={code.value}
											onChange={code.onChangeInputForm}
										/>
										<FormLabel htmlFor="email">
											{newPassword.value.length > 7 && regexPassword.test(newPassword.value) ? (
												<Text>New password : OK</Text>
											) : (
												<Text>New password</Text>
											)}
										</FormLabel>
										<Input
											bg="grey.200"
											placeholder="New password"
											type={isChecked ? "text" : "password"}
											value={newPassword.value}
											onChange={newPassword.onChangeInputForm}
										/>
										{newPassword.value === "" || newPassword.value.length > 7 || <Text color={"red"}>Not enough</Text>}
										{newPassword.value === "" || regexPassword.test(newPassword.value) || (
											<Text color={"red"}>At least 8 alphanumeric characters, including uppercase</Text>
										)}
									</FormControl>
									<Button
										colorScheme={"twitter"}
										outline="none"
										onClick={resetPassword}
										isDisabled={isDisabledResetButton}
										isLoading={isLoading}
									>
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
									<FormControl>
										<FormLabel htmlFor="email">
											<Text>Please enter your email address</Text>
										</FormLabel>
										<Input
											bg="grey.200"
											placeholder="Enter email"
											type={"email"}
											value={email.value}
											onChange={email.onChangeInputForm}
										/>
									</FormControl>
									<Button
										colorScheme={"twitter"}
										outline="none"
										onClick={sendCode}
										isDisabled={isDisabledConfirmButton}
										isLoading={isLoading}
									>
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
								<Button
									colorScheme={"twitter"}
									outline="none"
									onClick={signIn}
									isDisabled={isDisabledSignInButton}
									isLoading={isLoading}
								>
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
