import { Link } from "react-router";
import styles from "../styles/navbar.module.css";
import { FaMoon, FaSun } from "react-icons/fa";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <div>Todo App</div>
      <div className="mobile:flex  mobile:items-center mobile:gap-4">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        {/* Toggle theme icon here based on theme  */}
        <FaMoon />
        {/* <FaSun /> */}
        {/* */}
      </div>
    </div>
  );
}

export default Navbar;
