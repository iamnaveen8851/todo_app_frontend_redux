import { useState } from "react";
import styles from "../styles/signup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { handleSignupData } from "../redux/actions/signup/signupAction";
import { useNavigate } from "react-router";
function SignUp() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.signupReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleSignupData(formState, navigate));
  };

  return (
    <>
      <div>
        <form className={styles.formStyling} onSubmit={handleSubmit}>
          {/* username */}
          <label>Username</label>
          <input
            className={styles.inputBox}
            type="text"
            value={formState.username}
            onChange={(e) =>
              setFormState({
                ...formState,
                username: e.target.value,
              })
            }
            placeholder="Enter your username"
            required
          />

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

          {/* submit */}
          <button className={styles.btnStyling} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
