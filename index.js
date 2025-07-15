import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/config.js";
import postRoutes from "./routes/blog_route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/blog", postRoutes);

// Sync DB
sequelize
	.sync()
	.then(() => {
		console.log("Database connected & synced.");
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.error("Unable to connect to database:", err);
	});
