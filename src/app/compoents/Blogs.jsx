'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../asserts/logo.png'; // Use import instead of getimage
import axios from 'axios';
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blogs');
        setBlogs(response.data.blogs);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow next" onClick={onClick}>
        <MdKeyboardArrowRight />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow prev" onClick={onClick}>
        <MdKeyboardArrowLeft />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <h1>Blogs</h1>
      <Slider {...settings}>
        {blogs.map((blog, index) => (
          <div key={index}>
            <Image src={logo} width={300} height={200} alt="Blog Logo" />
            <div>
              <h5>{blog.title}</h5>
              <p>{blog.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Blogs;
