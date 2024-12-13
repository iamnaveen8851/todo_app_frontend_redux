import { useState } from "react";
import styles from "../styles/login.module.css";
import { useDispatch } from "react-redux";
import { handleLogin } from "../redux/actions/login/loginAction";
import { Link, useNavigate } from "react-router";

function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(formState, navigate));
  };

  return (
    <>
      <div>
        <form className={styles.formStyling} onSubmit={handleSubmit}>
          {/* Email */}
          <label>Email</label>
          <input
            className={styles.inputBox}
            type="email"
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            placeholder="Enter your email"
            required
          />

          {/* Password */}
          <label>Password</label>
          <input
            className={styles.inputBox}
            type="password"
            value={formState.password}
            onChange={(e) =>
              setFormState({ ...formState, password: e.target.value })
            }
            placeholder="Enter your password"
            required
          />

          <p>
            If you don't have account? {" "}
            <Link className="text-lightBlue hover:text-darkBlue" to="/signup">
              Sign up
            </Link>
          </p>
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
