"use client";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function LoginAndSignup() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState();
  const [name, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleSignupClose = () => setShowSignup(false);
  const handleSignupShow = () => setShowSignup(true);

  const handleLoginClose = () => setShowLogin(false);
  const handleLoginShow = () => setShowLogin(true);

  const handleonsubmitGroup = (e) => {
    e.preventDefault();
    const formData = { email ,name, password };
    console.log(formData);
    if (formData){
        localStorage.setItem("formData", formData);
    }
  };

  useEffect(() => {
    
  })

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
          <form onSubmit={handleonsubmitGroup}>
            {/* Email Input */}
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email Address"
                size={40}
                className="form-control p-3 m-2"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Username Input */}
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter Username"
                size={40}
                className="form-control p-3 m-2"
                required
                value={name}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="form-group">
              <input
                type="password"
                placeholder="Your Password"
                size={40}
                className="form-control p-3 m-2"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit Button (optional) */}
            <div className="form-group">
              <button type="submit" className="btn btn-primary m-2">
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      <p className="p-3 m-3">Already Existing user?</p>

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
          <form>
            {/* Email Input */}
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email Address"
                size={40}
                className="form-control p-3 m-2"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Your Password"
                size={40}
                className="form-control p-3 m-2"
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary m-2">
                Login
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </section>
  );
}
