import React from "react";
import { Switch, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../reducers/theme";

const ThemeSwitch = () => {
	const dispatch = useDispatch();

	const isDarkMode = useSelector((state) => state.theme.isDarkMode);

	const handleOnChange = () => {
		dispatch(changeTheme());
	};

	return (
		<VStack>
			<p>Dark theme</p>
			<Switch
				isChecked={isDarkMode}
				colorScheme="teal"
				size="lg"
				onChange={handleOnChange}
			/>
		</VStack>
	);
};

export default ThemeSwitch;
