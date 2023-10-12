import { Center, GridItem, Image, Text } from "@chakra-ui/react";

const ListItem = ({ pictureSrc, author }) => {
	return (
		<GridItem>
			<Center>
				<Image src={pictureSrc} height={300} />
			</Center>
			<Text fontSize="md" align="center" mt={2}>
				{author}
			</Text>
		</GridItem>
	);
};

export default ListItem;
