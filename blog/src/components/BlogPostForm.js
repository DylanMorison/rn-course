import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
	const [title, setTitle] = useState(initialValues.title);
	const [content, setContent] = useState(initialValues.content);

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
					onSubmit(title, content);
				}}
			>
				<Text style={styles.label}>Save To Blog</Text>
			</TouchableOpacity>
		</View>
	);
};

BlogPostForm.defaultProps = {
	initialValues: {
		title: "",
		content: ""
	}
};

export default BlogPostForm;

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
