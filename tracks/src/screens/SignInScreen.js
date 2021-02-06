import React, { useContext } from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

import { Context } from "../context/AuthContext";

const SignInScreen = () => {
	const { state, signin, clearErrorMessage } = useContext(Context);
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			enabled={false}
		>
			<NavigationEvents onWillFocus={clearErrorMessage} />
			<AuthForm
				headerText="Sign in"
				errorMessage={state.errorMessage}
				onSubmit={signin}
			/>
			<NavLink text="Don't have an account? Click here to sign up!" routeName="Signup" />
		</KeyboardAvoidingView>
	);
};

SignInScreen.navigationOptions = () => {
	return {
		headerShown: false
	};
};

export default SignInScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginBottom: 250,
		marginHorizontal: 10
	},
	inner: {}
});
