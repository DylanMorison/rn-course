import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import config from "config";
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
	const { email, password } = req.body;

	const user = new User({ email, password });
	try {
		await user.save();

		const token = jwt.sign({ userId: user._id }, config.get("jwtSecret"));
		res.send({ token });
	} catch (error) {
		console.log(error.message);
		return res.status(422).send(error.message);
	}
});

export default router;
