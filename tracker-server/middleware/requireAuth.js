import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import config from "config";

const User = mongoose.model("User");

export default (req, res, next) => {
	const { jwt_token } = req.headers;

	if (!jwt_token) {
		return res.status(401).send({ error: "You must be logged in!" });
	}

	// jwt_token === 'Bearer dlsfdskljsdkfj4389fhsjdehf'

	const token = jwt_token.replace("Bearer", "");
	jwt.verify(token, config.get("jwtSecret"), async (err, payload) => {
		if (err) {
			return res.status(401).send("You must be logged in");
		}

		const { userId } = payload;

		const user = await User.findById(userId);
		req.user = user;
		next();
	});
};
