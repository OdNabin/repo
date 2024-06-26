"use client";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
import { IoIosAdd, IoIosCreate, IoIosTrash } from "react-icons/io";

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentBlog, setCurrentBlog] = useState({
    title: "",
    author: "",
    content: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("/api/blogs");
      const data = await response.json();
      setBlogs(data.blogs);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/blogs${isEditing ? `/${currentBlog._id}` : ""}`, {
        method: isEditing ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentBlog),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(isEditing ? "Blog updated successfully!" : "Blog created successfully!");
        setCurrentBlog({ title: "", author: "", content: "" });
        setIsEditing(false);
        fetchBlogs();
      } else {
        setMessage(result.message || "Error saving blog");
      }
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  const handleEdit = (blog) => {
    setCurrentBlog(blog);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setMessage("Blog deleted successfully!");
        fetchBlogs();
      } else {
        setMessage("Error deleting blog");
      }
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)",
            backgroundColor: "#974c01",
            width: "80%",
            height: "350px",
          }}
        ></div>
        <Image
          // src={bgcontact}
          alt="image"
          style={{
            width: "auto",
            height: "350px",
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: -999,
          }}
        />
      </div>

      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="my-3 mb-3">
            <input 
              type="text"
              placeholder="Title"
              value={currentBlog.title}
              onChange={(e) => setCurrentBlog({ ...currentBlog, title: e.target.value })}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Author"
              value={currentBlog.author}
              onChange={(e) => setCurrentBlog({ ...currentBlog, author: e.target.value })}
              required
              className="form-control"
            />
          </div>
          <ReactQuill theme="snow" value={currentBlog.content} onChange={(content) => setCurrentBlog({ ...currentBlog, content })} />
          <div>
            <button className="btn btn-danger my-3"
              type="submit"
              style={{
                backgroundColor: "black",
                borderRadius: "2px",
                border: "1px solid #974c01",
              }}
            >
              <IoIosAdd />
              &nbsp;{isEditing ? "Update Blog" : "Add New Blog"}
            </button>
          </div>
          {message && <p>{message}</p>}
        </form>
        <div>
          {blogs.map((blog) => (
            <div key={blog._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
              <h3>{blog.title}</h3>
              <p>{blog.author}</p>
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              <button className="btn btn-success" onClick={() => handleEdit(blog)}>
                <IoIosCreate />
                &nbsp;Edit
              </button>
              <button className="btn btn-danger ms-3" onClick={() => handleDelete(blog._id)}>
                <IoIosTrash /> 
                &nbsp;Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
