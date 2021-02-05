import React, { useState, useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignUpScreen = ({ navigation }) => {
	const { state, signup } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<AuthForm
				headerText="Sign Up"
				errorMessage={state.errorMessage}
				onSubmit={signup}
			/>
			<TouchableOpacity onPress={() => navigation.navigate("Signin")}>
				<Spacer>
					<Text style={styles.link}>Already have an account? Sign in instead!</Text>
				</Spacer>
			</TouchableOpacity>
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
	link: {
		color: "navy",
		textAlign: "center"
	}
});
