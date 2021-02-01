import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
	const [result, setResult] = useState(null);
	const id = navigation.getParam("id");

	console.log(result);

	const getResult = async (id) => {
		try {
			const response = await yelp.get(`/${id}`);
			setResult(response.data);
		} catch (e) {}
	};

	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}

	return (
		<View>
			<Text>{result.name}</Text>
			<FlatList
				data={result.photos}
				keyExtractor={(photo) => photo}
				renderItem={({ item }) => {
					return <Image style={styles.img} source={{ uri: item }} />;
				}}
			/>
		</View>
	);
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
	img: {
		height: 200,
		width: 300
	}
});
