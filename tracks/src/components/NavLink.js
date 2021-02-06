import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text, routeName }) => {
	return (
		<>
			<TouchableOpacity onPress={() => navigation.navigate(routeName)}>
				<Spacer>
					<Text style={styles.link}>{text}</Text>
				</Spacer>
			</TouchableOpacity>
		</>
	);
};

export default withNavigation(NavLink);

const styles = StyleSheet.create({
	link: {
		color: "navy",
		textAlign: "center"
	}
});
