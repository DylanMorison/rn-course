import express from "express";
import mongoose from "mongoose";
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", (req, res) => {
	const { email, password } = req.body;
	res.send({ email, password });
});

export default router;
