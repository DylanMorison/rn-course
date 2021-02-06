import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			<Spacer>
				<Text style={styles.titleStyle} h3>
					{headerText}
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
			{errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
			<Spacer>
				<Button
					type="outline"
					title={headerText}
					onPress={() => onSubmit({ email, password })}
				/>
			</Spacer>
		</>
	);
};

export default AuthForm;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		marginBottom: 250,
		marginHorizontal: 10,
		maxHeight: 100
	},
	titleStyle: {
		textAlign: "center"
	},
	errorMessage: {
		fontSize: 16,
		textAlign: "center",
		color: "red"
	},
	link: {
		color: "navy",
		textAlign: "center"
	}
});
