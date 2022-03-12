import {
	Button,
	Flex,
	Box,
	Heading,
	Divider,
	Stack,
	Input,
	Text,
	FormControl,
	FormLabel,
	Checkbox
} from "@chakra-ui/react";
import { Auth } from "aws-amplify";
import Link from "next/link";
import { useState, useEffect, VFC, memo } from "react";
import { useInputForm } from "../hooks/useInputForm";
import Router from "next/router";
import { useSetRecoilState } from "recoil";
import { isSignUpState } from "../globalState/isSignUpState";

const SignUp: VFC = memo(() => {
	const email = useInputForm();
	const password = useInputForm();
	const confirmPassword = useInputForm();
	const code = useInputForm();
	const [isInvalid, setIsInvalid] = useState(false);
	const regexPassword = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])/;
	const regexEmail = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const SetIsSignUp = useSetRecoilState(isSignUpState);
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		email.value !== "" &&
		regexEmail.test(email.value) &&
		password.value === confirmPassword.value &&
		password.value.length > 7 &&
		regexPassword.test(password.value)
			? setIsInvalid(true)
			: setIsInvalid(false);
	}, [email.value, password.value, confirmPassword.value]);

	const signUp = async () => {
		try {
			const { user } = await Auth.signUp({
				username: email.value,
				password: password.value
			});
			console.log(user);
			setIsSubmitted(true);
			setIsError(false);
		} catch (error) {
			setIsError(true);
			setErrorMessage(`${error}`);
		}
	};

	const confirmSignUp = async () => {
		try {
			await Auth.confirmSignUp(email.value, code.value);
			await Auth.signIn(email.value, password.value);

			Router.push("/my-page");
		} catch (error) {
			setIsError(true);
			setErrorMessage(`${error}`);
		}
	};

	return (
		<>
			{isSubmitted ? (
				<>
					<Flex justify="center" minHeight="">
						<Box bg="blue.50" w="sm" p={4} borderRadius="md" shadow="md">
							<Heading color="teal" as="h1" size="lg" textAlign="center" fontFamily={"cursive"}>
								Comfirm SingUp
							</Heading>
							<Divider my={2} />
							<Stack spacing={6} py={4} px={10}>
								{isError ? <Text color={"red"}>{errorMessage}</Text> : <></>}
								<FormControl>
									<FormLabel htmlFor="code">
										<Text>Please enter the verification code</Text>
									</FormLabel>
									<Input
										bg="grey.200"
										id="code"
										placeholder="Verification code"
										type={"number"}
										value={code.value}
										onChange={code.onChangeInputForm}
									/>
								</FormControl>
								<Button colorScheme={"twitter"} outline="none" onClick={confirmSignUp}>
									Confirm Code
								</Button>
								<Link href={"/sign-in"}>
									<Text
										as={"a"}
										fontSize={"15px"}
										fontFamily={"serif"}
										_hover={{ color: "teal", fontWeight: "bold", textDecoration: "underline" }}
									>
										Not receiving mail?
									</Text>
								</Link>
							</Stack>
						</Box>
					</Flex>
				</>
			) : (
				<>
					<Flex justify="center" minHeight="">
						<Box bg="blue.50" w="sm" p={4} borderRadius="md" shadow="md">
							<Heading color="teal" as="h1" size="lg" textAlign="center" fontFamily={"cursive"}>
								User SingUp Form
							</Heading>
							<Divider my={2} />
							<Stack spacing={6} py={4} px={10}>
								{isError ? <Text color={"red"}>{errorMessage}</Text> : <></>}
								<FormControl>
									<FormLabel htmlFor="email">
										{regexEmail.test(email.value) && email.value !== "" ? <Text>email : OK</Text> : <Text>email</Text>}
									</FormLabel>
									<Input
										bg="grey.200"
										id="email"
										placeholder="Email Address"
										type={"email"}
										value={email.value}
										onChange={email.onChangeInputForm}
									/>
									{regexEmail.test(email.value) || email.value === "" || (
										<Text color={"red"}>Please check the format</Text>
									)}
									<FormLabel htmlFor="password">
										{password.value.length > 7 && regexPassword.test(password.value) ? (
											<Text>password : OK</Text>
										) : (
											<Text>password</Text>
										)}
									</FormLabel>
									<Input
										bg="grey.200"
										id="password"
										type={isChecked ? "text" : "password"}
										placeholder="At least 8 alphanumeric characters"
										value={password.value}
										onChange={password.onChangeInputForm}
									/>
									{password.value === "" || password.value.length > 7 || <Text color={"red"}>Not enough</Text>}
									{password.value === "" || regexPassword.test(password.value) || (
										<Text color={"red"}>At least 8 alphanumeric characters, including uppercase</Text>
									)}
									<FormLabel htmlFor="comfirmedPassword">
										{password.value === confirmPassword.value && confirmPassword.value !== "" ? (
											<Text>comfirmedPassword : OK</Text>
										) : (
											<Text>comfirmedPassword</Text>
										)}
									</FormLabel>
									<Input
										bg="grey.200"
										id="comfirmedPassword"
										type={isChecked ? "text" : "password"}
										placeholder="At least 8 alphanumeric characters"
										value={confirmPassword.value}
										onChange={confirmPassword.onChangeInputForm}
									/>
									{password.value === confirmPassword.value || confirmPassword.value === "" || (
										<Text color={"red"}>Inconsistency</Text>
									)}
								</FormControl>
								<Button colorScheme={"twitter"} outline="none" onClick={signUp} isDisabled={!isInvalid}>
									Sign Up
								</Button>
								<Text
									as={"a"}
									fontSize={"15px"}
									fontFamily={"serif"}
									_hover={{ color: "teal", fontWeight: "bold", textDecoration: "underline" }}
									onClick={() => SetIsSignUp(false)}
								>
									Already have an account?
								</Text>
							</Stack>
						</Box>
					</Flex>
					<Box textAlign={"center"} p="3">
						<Checkbox isChecked={isChecked} onChange={() => setIsChecked(!isChecked)}>
							Show password
						</Checkbox>
					</Box>
				</>
			)}
		</>
	);
});
export default SignUp;
