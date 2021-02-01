import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

const ResultList = ({ title, results, navigation }) => {
	if (!results.length) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={results}
				keyExtractor={(result) => result.id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() => navigation.navigate("ResultsShow", { id: item.id })}
						>
							<ResultsDetail result={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 15,
		marginBottom: 5
	},
	container: {
		marginBottom: 10
	}
});

export default withNavigation(ResultList);
