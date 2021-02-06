import React, { useContext } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignUpScreen = ({ navigation }) => {
	const { state, signup, clearErrorMessage } = useContext(AuthContext);

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			enabled={false}
		>
			<NavigationEvents onWillFocus={clearErrorMessage} />
			<AuthForm
				headerText="Sign Up"
				errorMessage={state.errorMessage}
				onSubmit={signup}
			/>
			<NavLink routeName="Signin" text="Already have an account? Sign in instead!" />
		</KeyboardAvoidingView>
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
	}
});
