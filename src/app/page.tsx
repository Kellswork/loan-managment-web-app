"use client";
import { useState } from "react";
import Image from "next/image";
import "./page.scss";

export default function Home() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const toggleShowPassword = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    setShowPassword((prev: boolean) => (prev = !prev));
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
        <a href="/" rel="noopener noreferrer">
          <Image
            src="/lendsqr.svg"
            alt="Lendsqr Logo"
            width={173.76}
            height={36}
            priority
          />
        </a>
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
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                required
                onChange={handleInputChange}
                value={loginDetails.password}
              />
              <label htmlFor="password">Password</label>
              <div id="toggle" onClick={toggleShowPassword}>
                {showPassword ? "HIDE" : "SHOW"}
              </div>
            </div>
            <p>forgot password</p>
            <button
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
