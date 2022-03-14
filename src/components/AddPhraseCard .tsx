import { memo, VFC } from "react";
import { Box, Button, Center, Divider, Icon, IconButton, Input, Stack, Text } from "@chakra-ui/react";
import { MdOutlineAddBox } from "react-icons/md";
export const AddPhraseCord: VFC = memo(() => {
	return (
		<Center
			w="250px"
			h="100px"
			backgroundColor={"gray.200"}
			borderRadius={"lg"}
			shadow="none"
			_hover={{ opacity: 0.6, shadow: "lg", marginBottom: "1", marginLeft: "-1" }}
			p="1"
		>
			<Icon as={MdOutlineAddBox} />
		</Center>
	);
});
