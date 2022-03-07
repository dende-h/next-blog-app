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
	InputGroup,
	InputRightElement,
	IconButton
} from "@chakra-ui/react";
import { Auth } from "aws-amplify";
import { NextPage } from "next";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useInputForm } from "../hooks/useInputForm";
import { useIsShow } from "../hooks/useIsShow";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import Router from "next/router";

const SignUp: NextPage = () => {
	const email = useInputForm();
	const password = useInputForm();
	const confirmPassword = useInputForm();
	const passwordShow = useIsShow();
	const confirmPasswordShow = useIsShow();
	const [isInvalid, setIsInvalid] = useState(false);
	const regexPassword = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])/;
	const regexEmail = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

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
			Router.push("/sign-in");
		} catch (error) {
			console.log("error signing up:", error);
		}
	};

	return (
		<>
			<Flex justify="center" minHeight="">
				<Box bg="blue.50" w="sm" p={4} borderRadius="md" shadow="md">
					<Heading color="teal" as="h1" size="lg" textAlign="center" fontFamily={"cursive"}>
						User SingUp Form
					</Heading>
					<Divider my={2} />
					<Stack spacing={6} py={4} px={10}>
						<FormControl>
							<FormLabel htmlFor="email">
								{email.value === "" && <Text>email</Text>}
								{regexEmail.test(email.value) && <Text>email : OK</Text>}
								{regexEmail.test(email.value) || email.value === "" || (
									<Text color={"red"}>email : 形式を確認して下さい</Text>
								)}
							</FormLabel>
							<Input
								bg="grey.200"
								id="email"
								placeholder="メールアドレス"
								type={"email"}
								value={email.value}
								onChange={email.onChangeInputForm}
							/>
							<FormLabel htmlFor="password">
								{password.value === "" && <Text>password</Text>}
								{password.value.length > 7 && regexPassword.test(password.value) && <Text>password : OK</Text>}
								{password.value.length > 7 || regexPassword.test(password.value) || password.value === "" || (
									<Box>
										<Text color={"red"}>password : 不十分です</Text>
										<Text color={"red"}>大文字を含む英数字8文字以上</Text>
									</Box>
								)}
							</FormLabel>
							<InputGroup>
								<Input
									bg="grey.200"
									id="password"
									type={passwordShow.isShow ? "text" : "password"}
									placeholder="英数字8文字以上"
									value={password.value}
									onChange={password.onChangeInputForm}
								/>
								<InputRightElement>
									<IconButton
										aria-label="showButton"
										colorScheme={"twitter"}
										borderRadius="full"
										size="sm"
										onClick={passwordShow.onClickShow}
										icon={passwordShow.isShow ? <ViewOffIcon /> : <ViewIcon />}
									/>
								</InputRightElement>
							</InputGroup>
							<FormLabel htmlFor="comfirmedPassword">
								{confirmPassword.value === "" && <Text>comfirmedPassword</Text>}
								{password.value === confirmPassword.value && confirmPassword.value !== "" && (
									<Text>comfirmedPassword : OK</Text>
								)}
								{password.value === confirmPassword.value || confirmPassword.value === "" || (
									<Text color={"red"}>comfirmedPassword : 不一致</Text>
								)}
							</FormLabel>
							<InputGroup>
								<Input
									bg="grey.200"
									id="comfirmedPassword"
									type={confirmPasswordShow.isShow ? "text" : "password"}
									placeholder="英数字8文字以上"
									value={confirmPassword.value}
									onChange={confirmPassword.onChangeInputForm}
								/>
								<InputRightElement>
									<IconButton
										aria-label="showButton"
										colorScheme={"twitter"}
										borderRadius="full"
										size="sm"
										onClick={confirmPasswordShow.onClickShow}
										icon={confirmPasswordShow.isShow ? <ViewOffIcon /> : <ViewIcon />}
									/>
								</InputRightElement>
							</InputGroup>
						</FormControl>
						<Button colorScheme={"twitter"} outline="none" onClick={signUp} isDisabled={!isInvalid}>
							SignUp
						</Button>
						<Link href={"/sign-in"}>
							<Text
								as={"a"}
								fontSize={"15px"}
								fontFamily={"serif"}
								_hover={{ color: "teal", fontWeight: "bold", textDecoration: "underline" }}
							>
								すでにアカウントをお持ちの方はこちら
							</Text>
						</Link>
					</Stack>
				</Box>
			</Flex>
		</>
	);
};
export default SignUp;
