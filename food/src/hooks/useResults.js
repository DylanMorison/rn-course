import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
	const [results, setResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");

	const searchApi = async (SearchTerm) => {
		if (errorMessage) {
			setErrorMessage("");
		}

		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: SearchTerm,
					location: "san jose"
				}
			});
			setResults(response.data.businesses);
		} catch (e) {
			setErrorMessage("Something went wrong!");
		}
	};

	useEffect(() => {
		searchApi("pasta");
	}, []);

	return [searchApi, results, errorMessage];
};
