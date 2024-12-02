import React from "react";
import styles from "../styles/signup.module.css";
function SignUp() {
  return (
    <>
      <div>
        <form className={styles.formStyling}>
          {/* username */}
          <label>Username</label>
          <input
            className={styles.inputBox}
            type="text"
            placeholder="Enter your username"
            required
          />

          {/* Email */}
          <label>Email</label>
          <input
            className={styles.inputBox}
            type="email"
            placeholder="Enter your email"
            required
          />

          {/* Password */}
          <label>Password</label>
          <input
            className={styles.inputBox}
            type="password"
            placeholder="Enter your password"
            required
          />

          {/* submit */}
          <button
            className={styles.btnStyling}
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
