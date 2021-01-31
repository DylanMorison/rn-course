import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]);

	const searchApi = async () => {
		console.log(`Seaching for ${term}...`);
		const response = await yelp.get("/search", {
			params: {
				limit: 50,
				term,
				location: "san jose"
			}
		});
		setResults(response.data.businesses);
	};

	return (
		<View>
			<SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
			<Text>We have found {results.length} results</Text>
		</View>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({});
