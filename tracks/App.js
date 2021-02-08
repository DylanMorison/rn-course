import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import {} from "react-native";

import AccountScreen from "./src/screens/AccountScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { setNavigator } from "./src/navigationRef";

const switchNavigator = createSwitchNavigator({
	ResolveAuth: ResolveAuthScreen,
	loginFlow: createStackNavigator({
		Signup: SignUpScreen,
		Signin: SignInScreen
	}),
	mainFlow: createBottomTabNavigator({
		trackListFlow: createStackNavigator({
			TrackList: TrackListScreen,
			TrackDetail: TrackDetailScreen
		}),
		TrackCreate: TrackCreateScreen,
		Account: AccountScreen
	})
});

const App = createAppContainer(switchNavigator);

export default () => {
	return (
		<LocationProvider>
			<AuthProvider>
				<App
					ref={(navigator) => {
						setNavigator(navigator);
					}}
				/>
			</AuthProvider>
		</LocationProvider>
	);
};
