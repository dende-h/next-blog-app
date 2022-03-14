import { memo, VFC } from "react";
import { Box, Button, Divider, IconButton, Input, Stack, Text } from "@chakra-ui/react";
export const PhraseCord: VFC = memo(() => {
	return (
		<Box
			w="250px"
			h="100px"
			bg="yellow.100"
			borderRadius={"lg"}
			shadow="none"
			_hover={{ bg: "yellow.200", shadow: "lg", marginBottom: "1", marginLeft: "-1" }}
			p="1"
		>
			<Stack spacing={"1"}>
				<Box textAlign="center">
					<Text>title</Text>
				</Box>
				<Divider />
				<Box textAlign="center">
					<Text>TitleName</Text>
				</Box>
				<Box>Last update:</Box>
			</Stack>
		</Box>
	);
});
