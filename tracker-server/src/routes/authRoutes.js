import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
	const { email, password } = req.body;
	res.send({ email, password });
});

export default router;
