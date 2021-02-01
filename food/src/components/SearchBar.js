import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.background}>
			<Feather name="search" color="black" style={styles.iconStyle} />
			<TextInput
				style={styles.inputStyle}
				placeholder="Search"
				value={term}
				onChangeText={onTermChange}
				autoCorrect={false}
				autoCapitalize="none"
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

export default SearchBar;

const styles = StyleSheet.create({
	background: {
		backgroundColor: "#F0EEEE",
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: "row",
		marginTop: 10,
		margin: 20
	},
	inputStyle: {
		flex: 1,
		fontSize: 18
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: "center",
		marginHorizontal: 15
	}
});
