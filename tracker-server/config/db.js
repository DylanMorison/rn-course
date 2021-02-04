import mongoose from "mongoose";
import config from "config";
const mongoURI = config.get("mongoURI");

export default async () => {
	try {
		await mongoose.connect(
			mongoURI,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
				useFindAndModify: false
			},
			() => console.log("MongoDB Connected With no Errors!")
		);
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};
