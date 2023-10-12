import React from "react";
import { SimpleGrid, Spinner, Center } from "@chakra-ui/react";
import ListItem from "./ListItem";
import { useGetPhotos } from "../hooks/useGetPhotos";

const List = () => {
	const { isLoading, photos } = useGetPhotos();

	return (
		<div style={{ minHeight: "90vh", width: "100%" }}>
			<SimpleGrid columns={[1, 2, 3]} gap={20} padding={20}>
				{photos.images.map((photo) => (
					<ListItem
						key={photo.id}
						pictureSrc={photo.urls.regular}
						author={photo.user.username}
					/>
				))}
			</SimpleGrid>
			{isLoading && (
				<Center pb={5}>
					<Spinner />
				</Center>
			)}
		</div>
	);
};

export default List;
//templateColumns="repeat(3, 1fr)"
