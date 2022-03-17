import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	useDisclosure,
	Input,
	Stack,
	Box,
	Text,
	Divider,
	IconButton,
	Icon
} from "@chakra-ui/react";
import Link from "next/link";
import React, { memo } from "react";
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";
import awsExports from "../aws-exports";
import { useRecoilState } from "recoil";
import { isAuthenticatedState } from "../globalState/isAuthenticatedState";
import { useRouter } from "next/router";
import { CgMenuBoxed } from "react-icons/cg";

Amplify.configure({ ...awsExports, ssr: true });

export const DrawerMenu = memo(() => {
	const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedState);
	const router = useRouter();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	const signOut = async () => {
		try {
			await Auth.signOut();
			setIsAuthenticated(false);
			router.push("/blogApp/SignIn");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{isAuthenticated ? (
				<>
					<Icon
						boxSize={"8"}
						ref={btnRef}
						onClick={onOpen}
						as={CgMenuBoxed}
						_hover={{ cursor: "pointer", opacity: "0.8" }}
						color="gray.200"
					/>
					<Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
						<DrawerOverlay />
						<DrawerContent fontFamily={"sans-serif"}>
							<DrawerCloseButton />
							<DrawerHeader>Menu</DrawerHeader>

							<DrawerBody>
								<Stack spacing={"4"}>
									<Divider borderColor={"gray"} />
									<Link href={"/blogApp/PhraseDashBoard"}>
										<Text as={"a"} _hover={{ cursor: "pointer", fontWeight: "bold" }} onClick={onClose}>
											Phrese dash board
										</Text>
									</Link>
									<Divider borderColor={"gray"} />
									<Link href={"/blogApp/MyPhrase"}>
										<Text as={"a"} _hover={{ cursor: "pointer", fontWeight: "bold" }} onClick={onClose}>
											My Phrese
										</Text>
									</Link>
									<Divider borderColor={"gray"} />
									<Link href={"/blogApp/UserInfo"}>
										<Text as={"a"} _hover={{ cursor: "pointer", fontWeight: "bold" }} onClick={onClose}>
											User info
										</Text>
									</Link>
									<Divider borderColor={"gray"} />
									<Link href={"/blogApp/Contact"}>
										<Text as={"a"} _hover={{ cursor: "pointer", fontWeight: "bold" }} onClick={onClose}>
											Contact
										</Text>
									</Link>
									<Divider borderColor={"gray"} />
									<Box>
										<Text onClick={signOut} _hover={{ cursor: "pointer", fontWeight: "bold" }}>
											Sign out
										</Text>
									</Box>
									<Divider borderColor={"gray"} />
								</Stack>
							</DrawerBody>
						</DrawerContent>
					</Drawer>
				</>
			) : (
				<></>
			)}
		</>
	);
});
