import styles from "../styles/login.module.css";

function Login() {
  return (
    <>
      <div>
        <form className={styles.formStyling}>
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
          <button className={styles.btnStyling} type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
