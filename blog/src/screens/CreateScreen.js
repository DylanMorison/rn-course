import React, { useState, useContext } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	TouchableOpacity
} from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const { addBlogPost } = useContext(Context);

	return (
		<View>
			<Text style={styles.label}>Enter Title:</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={(text) => setTitle(text)}
			/>
			<Text style={styles.label}>Enter Content:</Text>
			<TextInput
				style={styles.input}
				value={content}
				onChangeText={(text) => setContent(text)}
			/>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => {
					addBlogPost(title, content, () => {
						navigation.navigate("Index");
					});
				}}
			>
				<Text style={styles.label}>Post To Blog</Text>
			</TouchableOpacity>
		</View>
	);
};

export default CreateScreen;

const styles = StyleSheet.create({
	input: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: "black",
		marginBottom: 15,
		padding: 10,
		margin: 5
	},
	label: {
		fontSize: 20,
		marginBottom: 5,
		marginHorizontal: 5
	},
	btn: {
		marginTop: 25,
		alignSelf: "center",
		borderWidth: 1,
		padding: 5,
		borderRadius: 4
	}
});
