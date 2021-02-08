import "../_mockLocation";
import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";
import Map from "../components/Map";

const TrackCreateScreen = () => {
	const [err, setErr] = useState(null);

	const startWatching = async () => {
		try {
			const { granted } = await requestPermissionsAsync();
			await watchPositionAsync(
				{
					accuracy: Accuracy.BestForNavigation,
					timeInterval: 1000,
					distanceInterval: 10
				},
				(location) => {
					console.log(location);
				}
			);
			if (!granted) {
				throw new Error("Location permission not granted");
			}
		} catch (e) {
			setErr(e);
		}
	};

	useEffect(() => {
		startWatching();
	}, []);

	return (
		<View style={styles.container}>
			<Text h2 style={styles.text}>
				Create a Track
			</Text>
			<Map />
			{err ? <Text>Please enable location services</Text> : null}
		</View>
	);
};

export default TrackCreateScreen;

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		borderWidth: 4,
		justifyContent: "flex-start",
		top: 50
	},
	text: {}
});
