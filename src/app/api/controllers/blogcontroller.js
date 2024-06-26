import expressAsyncHandler from "express-async-handler";
import Blogs from "../models/blogModel.js";

// Create a new blog post
export const createBlog = expressAsyncHandler(async (req, res) => {
  try {
    const { title, author, content } = req.body;

    if (!title || !author || !content) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (title.trim().length === 0 || author.trim().length === 0 || content.trim().length === 0) {
      return res.status(400).json({ message: "Input fields cannot be empty" });
    }

    const newBlog = new Blogs({ title, author, content, createdAt: new Date(), updatedAt: new Date() });

    const savedBlog = await newBlog.save();

    res.status(200).json({ message: "Blog created successfully", savedBlog });
  } catch (err) {
    res.status(500).json({ status: "FAILED", message: "Error: " + err });
    console.log(err);
  }
});

// Fetch all blog posts
export const getBlogs = expressAsyncHandler(async (req, res) => {
  try {
    const blogs = await Blogs.find();
    res.status(200).json({ message: "Blogs fetched successfully", blogs });
  } catch (error) {
    res.status(400).json({ status: "FAILED", message: "Error fetching blogs: " + error.message });
  }
});

// Fetch a single blog post by ID
export const getBlogById = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blogs.findById(id);

    if (!blog) {
      return res.status(404).json({ status: "FAILED", message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog fetched successfully", blog });
  } catch (error) {
    res.status(400).json({ status: "FAILED", message: "Error fetching blog: " + error.message });
  }
});

// Update an existing blog post
export const updateBlog = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, content } = req.body;

    if (!title || !author || !content) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const blog = await Blogs.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    blog.title = title;
    blog.author = author;
    blog.content = content;
    blog.updatedAt = new Date();

    const updatedBlog = await blog.save();

    res.status(200).json({ message: "Blog updated successfully", updatedBlog });
  } catch (err) {
    res.status(500).json({ status: "FAILED", message: "Error: " + err });
    console.log(err);
  }
});

// Delete a blog post
export const deleteBlog = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blogs.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    await Blogs.deleteOne({ _id: id });

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ status: "FAILED", message: "Error: " + err });
    console.log(err);
  }
});
