import express from "express";
import { createBlog, getBlogById, getBlogs, updateBlog, deleteBlog } from "../controllers/blogcontroller.js";

const router = express.Router();

// Create a new blog post
router.post("/blogs", createBlog);

// Get all blog posts
router.get("/blogs", getBlogs);

// Get a single blog post by ID
router.get("/blogs/:id", getBlogById);

// Update a blog post by ID
router.put("/blogs/:id", updateBlog);

// Delete a blog post by ID
router.delete("/blogs/:id", deleteBlog);

export default router;
