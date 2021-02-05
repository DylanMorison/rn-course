import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TrackListScreen = ({ navigation }) => {
	return (
		<View>
			<Text>TrackListScreen</Text>
			<TouchableOpacity
				onPress={() => navigation.navigate("TrackDetail")}
				style={styles.btn}
			>
				<Text>Go to Track Detail</Text>
			</TouchableOpacity>
		</View>
	);
};

export default TrackListScreen;

const styles = StyleSheet.create({
	btn: {
		marginTop: 25,
		alignSelf: "center",
		borderWidth: 1,
		padding: 5,
		borderRadius: 4
	}
});
