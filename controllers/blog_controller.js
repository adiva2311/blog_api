import Post from "../models/blog_model.js";

// GET all posts
export const getPosts = async (req, res) => {
	try {
		const posts = await Post.findAll();
		res.json(posts);
	} catch (err) {
		res.status(500).json({
			status_code: 500,
			error: "Server Error",
		});
	}
};

// GET post by ID
export const getPostById = async (req, res) => {
	try {
		const post = await Post.findByPk(req.params.id);
		if (!post)
			return res.status(404).json({
				status_code: 404,
				error: "Post not found",
			});
		res.json(post);
	} catch (err) {
		res.status(500).json({
			status_code: 500,
			error: "Server Error",
		});
	}
};

// CREATE post
export const createPost = async (req, res) => {
	const { title, content } = req.body;
	if (!title || !content)
		return res.status(400).json({
			status_code: 400,
			error: "Title and Content are required",
		});

	try {
		const newPost = await Post.create({ title, content });
		res.status(201).json(newPost);
	} catch (err) {
		res.status(500).json({
			status_code: 500,
			error: "Server Error",
		});
	}
};

// UPDATE post
export const updatePost = async (req, res) => {
	const { title, content } = req.body;

	try {
		const post = await Post.findByPk(req.params.id);
		if (!post)
			return res.status(404).json({
				status_code: 404,
				error: "Post not found",
			});

		post.title = title || post.title;
		post.content = content || post.content;
		await post.save();

		res.json(post);
	} catch (err) {
		res.status(500).json({
			status_code: 500,
			error: "Server Error",
		});
	}
};

// DELETE post
export const deletePost = async (req, res) => {
	try {
		const post = await Post.findByPk(req.params.id);
		if (!post)
			return res.status(404).json({
				status_code: 404,
				error: "Post not found",
			});

		await post.destroy();
		res.json({ message: "Post deleted" });
	} catch (err) {
		res.status(500).json({
			status_code: 500,
			error: "Server Error",
		});
	}
};
