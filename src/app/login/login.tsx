"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "../page.scss";


/**
 * Login component for user authentication.
 * @component
 */
export default function Login() {
  const [emailValid, setEmailValid] = useState<boolean>(true);
  const [passwordValid, setPasswordValid] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errMsg, setErrorMsg] = useState({ email: "", password: "" });
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  /**
   * Toggles password visibility
   * @returns {void}
   */
  const toggleShowPassword = (): void => {
    setShowPassword((prev: boolean) => !prev);
  };

  /**
   * Handles input change in email and password fields.
   * Validates input and updates error messages.
   * @param {React.ChangeEvent<HTMLInputElement>} e - Input change event.
   * @returns {void}
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;

    const isValidEmail =
      name === "email" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) : true;
    const isValidPassword = name === "password" ? value.length >= 4 : true;

    setEmailValid(isValidEmail);
    setPasswordValid(isValidPassword);

    setErrorMsg({
      email: isValidEmail ? "" : "Please enter a valid email address",
      password: isValidPassword
        ? ""
        : "Password must be at least 4 characters long",
    });

    setLoginDetails({
      ...loginDetails,
      [e.currentTarget.name]: e.target.value,
    });
  };

  /**
   * Handles form submission.
   * Stores user details in local storage and redirects to dashboard on successful login.
   * @param {React.FormEvent<HTMLFormElement>} e - Form submission event.
   * @returns {void}
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    if (!emailValid || !passwordValid) return;

    const user = JSON.stringify(loginDetails);
    localStorage.setItem("user", user);

    setTimeout(() => {
      setLoading(false);
      setLoginDetails({
        email: "",
        password: "",
      });
      router.push("/dashboard/users");
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-container-image">
        <Image
          src="/pablo-sign-in.jpg"
          alt="sign in image"
          width={600}
          height={337}
          layout="responsive"
          priority
        />
      </div>
      <section className="login-form-container">
        <div className="login-container-spacing">
          <div className="login-intro-text">
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
          </div>
          <form className="login-form" onSubmit={handleSubmit} method="post">
            <div className="form-field">
              <input
                className={emailValid ? "" : "error"}
                name="email"
                type="email"
                id="email"
                autoComplete="off"
                required
                onChange={handleInputChange}
                value={loginDetails.email}
              />
              <label htmlFor="email">Email</label>
              <p className={!emailValid ? "err-msg err-text" : "err-msg"}>
                {errMsg.email}
              </p>
            </div>
            <div className="form-field">
              <input
                className={passwordValid ? "" : "error"}
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                required
                onChange={handleInputChange}
                value={loginDetails.password}
              />
              <label htmlFor="password">Password</label>
              <div
                className={!passwordValid ? "err-msg-toggle" : ""}
                id="toggle"
                onClick={toggleShowPassword}
                role="button"
                tabIndex={0}
                onKeyDown={toggleShowPassword}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </div>
              <p
                className={!passwordValid ? "err-msg err-text" : "err-msg"}
              >
                {errMsg.password}
              </p>
            </div>
            <p>forgot password</p>
            <button
              type="submit"
              disabled={
                !loginDetails.email ||
                !loginDetails.password ||
                !emailValid ||
                !passwordValid
              }
              className={`form-button ${isLoading ? "button-loading" : ""}`}
            >
              <span className="btn-text">Log in</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
