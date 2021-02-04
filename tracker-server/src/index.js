import User from "../src/models/User.js";
import express from "express";
import { connectDB } from "../config/db.js";
import authRoutes from "./routes/authRoutes.js";

connectDB();

const app = express();
const jsonNoExtended = express.json({ extended: false });

app.use(jsonNoExtended);
app.use(authRoutes);

app.listen(3000, () => console.log("Listening on port 3000!"));
