import AsyncStorage from "@react-native-async-storage/async-storage";
// https://stackoverflow.com/questions/62115591/local-storage-react-native
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
	switch (action.type) {
		case "auth_err":
			return { ...state, errorMessage: action.payload };
		case "signup":
			return { token: action.payload, isSignedIn: true, errorMessage: "" };
		case "logout":
			return { token: null, isSignedIn: false, errorMessage: "" };
		default:
			return state;
	}
};

const signup = (dispatch) => async ({ email, password }) => {
	try {
		const response = await trackerApi.post("/signup", { email, password });
		await AsyncStorage.setItem("token", response.data.token);
		dispatch({ type: "signup", paylod: response.data.token });

		navigate("mainFlow");
	} catch (err) {
		console.log(err.message);
		dispatch({ type: "auth_err", payload: "Something went wrong during Signup :-(" });
	}
};

const signin = (dispatch) => ({ email, password }) => {};

const signout = (dispatch) => async () => {
	try {
		await AsyncStorage.removeItem("token");
		dispatch({ type: "logout" });
	} catch (err) {
		dispatch({ type: "auth_err", payload: "Something went wrong during logout :-(" });
	}
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signup, signin },
	{ isSignedIn: false, errorMessage: "", token: null }
);
