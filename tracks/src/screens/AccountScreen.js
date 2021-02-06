import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);

	return (
		<>
			<Text>AccountScreen</Text>
			<Spacer>
				<Button title="Sign Out" onPress={signout} />
			</Spacer>
		</>
	);
};

export default AccountScreen;

const styles = StyleSheet.create({});
