import express from "express";
import mongoose from "mongoose";
import { connectDB } from "../config/db.js";

const app = express();

connectDB();

app.get("/", (req, res) => {
	res.send("hi!");
});

app.listen(3000, () => console.log("Listening on port 3000!"));
