import { useState, useEffect } from "react";
import { fetchPhotos } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../reducers/app";

export const useGetPhotos = () => {
	const [isLoading, setIsLoading] = useState(true);

	const dispatch = useDispatch();
	const photos = useSelector((state) => state.app.list);

	const activePage = photos.images.length / 30 + 1;

	const getPhotos = async () => {
		if (photos.total !== 0 && photos.images.length === photos.total) return;
		setIsLoading(true);
		const response = await fetchPhotos({
			perPage: 30,
			page: activePage,
		});
		dispatch(setList(response));
		setIsLoading(false);
	};

	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop !==
				document.documentElement.offsetHeight ||
			isLoading
		) {
			return;
		}
		getPhotos();
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isLoading]);

	useEffect(() => {
		getPhotos();
	}, []);

	return { isLoading, photos };
};
