import "../src/models/User.js";
import "../src/models/Track.js";

import express from "express";
import connectDB from "../config/db.js";
import authRoutes from "./routes/authRoutes.js";
import trackRoutes from "./routes/trackRoutes.js";
import requireAuth from "../middleware/requireAuth.js";

connectDB();

const app = express();
const jsonNoExtended = express.json({ extended: false });

app.use(jsonNoExtended);
app.use(authRoutes);
app.use(trackRoutes);

app.get("/", requireAuth, async (req, res) => {
	res.send(`Your email is ${req.user.email}`);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
