import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignUpScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<View style={styles.container}>
			<Spacer>
				<Text style={styles.titleStyle} h3>
					Sign Up
				</Text>
			</Spacer>
			<Spacer />

			<Input
				label="Email"
				value={email}
				onChangeText={setEmail}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Spacer />
			<Input
				secureTextEntry={true}
				label="Password"
				value={password}
				onChangeText={setPassword}
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Spacer>
				<Button type="outline" title="Sign Up" />
			</Spacer>
		</View>
	);
};

SignUpScreen.navigationOptions = () => {
	return {
		headerShown: false
	};
};

export default SignUpScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginBottom: 250,
		marginHorizontal: 10
	},
	titleStyle: {
		textAlign: "center"
	}
});
