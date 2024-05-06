/* eslint-disable jsx-a11y/label-has-associated-control */

"use client";

import { useState } from "react";
import Image from "next/image";
import "./page.scss";
import Logo from "./components/logo";

export default function Home() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const toggleShowPassword = (): void => {
    setShowPassword((prev: boolean) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoginDetails({
      ...loginDetails,
      [e.currentTarget.name]: e.target.value,
    });
  };

  return (
    <main className="main-container">
      <nav>
        <Logo/>
      </nav>
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
            <form className="login-form">
              <div className="form-field">
                <input
                  name="email"
                  type="email"
                  id="email"
                  autoComplete="off"
                  required
                  onChange={handleInputChange}
                  value={loginDetails.email}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-field">
                <input
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="off"
                  required
                  onChange={handleInputChange}
                  value={loginDetails.password}
                />
                <label htmlFor="password">Password</label>
                <div id="toggle" onClick={toggleShowPassword} role="button" tabIndex={0} onKeyDown={toggleShowPassword}>
                  {showPassword ? "HIDE" : "SHOW"}
                </div>
              </div>
              <p>forgot password</p>
              <button type="submit"
                disabled={!loginDetails.email || !loginDetails.password}
                className="form-button"
              >
                Log in
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
