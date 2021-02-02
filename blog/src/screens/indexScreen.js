import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const indexScreen = () => {
	const { state, addBlogPost } = useContext(BlogContext);

	return (
		<View>
			<Text>indexScreen</Text>
			<Button title="Add Post" onPress={addBlogPost} color="#841584" />

			<FlatList
				data={state}
				keyExtractor={(blogPost) => blogPost.title}
				renderItem={({ item }) => {
					return <Text>{item.title}</Text>;
				}}
			/>
		</View>
	);
};

export default indexScreen;

const styles = StyleSheet.create({});
