import { Box, Center, Spacer, Text } from "@chakra-ui/react";
import { Header } from "../atoms/Header";
import { DrawerMenu } from "../DrawerMenu";

export const MainHeader = () => {
	return (
		<Header backgroundColor={"teal.300"} w={"100%"}>
			<Center paddingX={"6"}>
				<Text fontSize={"25"} as="h1" fontFamily={"heading"}>
					PhraseDashBoard
				</Text>
			</Center>
			<Spacer />
			<Box marginRight={"6"}>
				<DrawerMenu />
			</Box>
		</Header>
	);
};
