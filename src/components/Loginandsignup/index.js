"use client";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Dashboard from "@/app/Dashboard/page";

export default function LoginAndSignup() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedin, setLoggedIn] = useState(false);

  // const navigate = useNavigate();

  const handleSignupClose = () => setShowSignup(false);
  const handleSignupShow = () => setShowSignup(true);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  // Validation schemas for Formik
  const signupValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    name: Yup.string().required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const loginValidationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSignupSubmit = (values, { resetForm }) => {
    console.log("Signup Data:", values);
    localStorage.setItem("formData", JSON.stringify(values));
    resetForm();
    handleSignupClose();
  };

  const handleLoginSubmit = (values, { resetForm }) => {
    console.log("Login Data:", values);
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (
      storedData &&
      storedData.email === values.email &&
      storedData.password === values.password
    ) {
      setLoggedIn(true);
      navigate("./Dashboard");
    } else {
      alert("Invalid Login Credentials");
    }
    resetForm();
    handleLoginClose();
  };

  if (loggedin) {
    return <Dashboard />;
  }

  return (
    <section className="login-page">
      {/* Sign Up Button */}
      <div>
        <Button className="btn btn-primary" onClick={handleSignupShow}>
          Sign Up
        </Button>
      </div>

      {/* Sign Up Modal */}
      <Modal show={showSignup} onHide={handleSignupClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ email: "", name: "", password: "" }}
            validationSchema={signupValidationSchema}
            onSubmit={handleSignupSubmit}
          >
            {() => (
              <Form>
                {/* Email Input */}
                <div className="form-group">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    className="form-control p-3 m-2"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>

                {/* Username Input */}
                <div className="form-group">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter Username"
                    className="form-control p-3 m-2"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
                  />
                </div>

                {/* Password Input */}
                <div className="form-group">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    className="form-control p-3 m-2"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>

                {/* Submit Button */}
                <div className="form-group">
                  <button type="submit" className="btn btn-primary m-2">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>

      <p className="p-3 m-3">Already an existing user?</p>

      {/* Log In Button */}
      <div>
        <Button className="btn btn-primary" onClick={handleLoginShow}>
          Login
        </Button>
      </div>

      {/* Log In Modal */}
      <Modal show={showLogin} onHide={handleLoginClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidationSchema}
            onSubmit={handleLoginSubmit}
          >
            {() => (
              <Form>
                {/* Email Input */}
                <div className="form-group">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    className="form-control p-3 m-2"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>

                {/* Password Input */}
                <div className="form-group">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    className="form-control p-3 m-2"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>

                {/* Submit Button */}
                <div className="form-group">
                  <button type="submit" className="btn btn-primary m-2">
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </section>
  );
}
