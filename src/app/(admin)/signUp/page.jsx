"use client"
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: '', // Added date of birth field
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    dateOfBirth: '', // Added date of birth error state
  });

  const [responseError, setResponseError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        error = value ? '' : 'Name is required';
        break;
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = 'Invalid email address';
        } else {
          error = '';
        }
        break;
      case 'password':
        error = value.length >= 6 ? '' : 'Password must be at least 6 characters';
        break;
      case 'dateOfBirth':
        error = value ? '' : 'Date of Birth is required';
        break;
      default:
        break;
    }
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = Object.values(errors).every((error) => error === '') &&
      Object.values(formData).every((field) => field !== '');
    if (isValid) {
      try {
        const res = await axios.post("/api/signUp", formData);
        if (res.data.status === "400") {
          setResponseError(res.data.message);
          toast.error("Signup failed");
        } else {
          toast.success("Signup successful");
          setFormData({
            name: '',
            email: '',
            password: '',
            dateOfBirth: '', // Reset date of birth field
          });
          setTimeout(() => {
            router.push("/signIn");
          }, 3000);
        }
      } catch (error) {
        setResponseError(error.response?.data?.message || 'An error occurred while submitting the form');
      }
    } else {
      console.log('Form contains errors');
    }
  };

  return (
    <div>
      <Container>
        <Row className='d-flex justify-content-center align-items-center my-5'>
          <Col md={6} className='box-containe d-flex justify-content-center align-items-center'>
            <div>
              <h1 style={{ fontWeight: 800 }}>Create an Account</h1>
              <br />
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="text-danger">{errors.name}</span>}
                </Form.Group>
                <br />
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="text-danger">{errors.email}</span>}
                </Form.Group>
                <br />
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <span className="text-danger">{errors.password}</span>}
                </Form.Group>
                <br />
                <Form.Group controlId="formDateOfBirth">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                  {errors.dateOfBirth && <span className="text-danger">{errors.dateOfBirth}</span>}
                </Form.Group>
                <br />
                {responseError && <div className="text-danger">{responseError}</div>}

                <Button type="submit" className='button'>Sign Up</Button>
                <ToastContainer />
              </Form>
              <br />
              <p className='text-sign'>Already have an account? <u onClick={() => router.push("/signIn")}><b>Sign in</b></u></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SignUpPage;
