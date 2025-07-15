import { DataTypes } from "sequelize";
import sequelize from "../config/config.js";

const Post = sequelize.define(
	"Blog",
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	}
);

export default Post;
