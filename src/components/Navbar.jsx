import { Link } from "react-router";
import styles from "../styles/navbar.module.css";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector } from "react-redux";
function Navbar() {
  const { isLoggedIn, user } = useSelector((state) => state.loginReducer);

  return (
    <div className={styles.navbar}>
      <div>Todo App</div>
      <div className="mobile:flex  mobile:items-center mobile:gap-4">
        {isLoggedIn ? (
          // Create a Dropdown with name and logout button
          <div className="relative flex gap-1  items-center  ">
            <img
              className="w-9 h-9 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnbO0qRs8GP4j4_TmIFZYb0DDsoMdjaJWTw&s"
              alt="profile image"
            />

            <span className="top-0 start-7 absolute w-3 h-3 bg-darkGreen   dark:border-darkGray rounded-full"></span>
            <h3>{user}</h3>
          </div>
        ) : (
          <div className="relative flex gap-1  items-center  ">
            <img
              className="w-9 h-9 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnbO0qRs8GP4j4_TmIFZYb0DDsoMdjaJWTw&s"
              alt="profile image"
            />

            <span className="top-0 start-7 absolute w-3 h-3 bg-darkGray  dark:border-darkGray rounded-full"></span>

            <Link to="/login">Login</Link>
          </div>
        )}

        {/* Toggle theme icon here based on theme  */}
        <FaMoon />
        {/* <FaSun /> */}
        {/* */}
      </div>
    </div>
  );
}

export default Navbar;
