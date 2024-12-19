import { Link, useNavigate } from "react-router";
import styles from "../styles/navbar.module.css";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { handleLogout } from "../redux/actions/logout/logoutAction";

function Navbar() {
  const { isLoggedIn, user } = useSelector((state) => state.loginReducer);
  const { isSignedUp } = useSelector((state) => state.signupReducer);
  const dispatch = useDispatch();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutAction = () => {
    dispatch(handleLogout(navigate)); // Dispatch logout action
    // setIsDropdownOpen(false); // Close dropdown after logout
  };

  return (
    <div className={styles.navbar}>
      <div>Todo App</div>
      <div className="mobile:flex mobile:items-center mobile:gap-4">
        {isLoggedIn || isSignedUp ? (
          <div className="relative">
            {/* Profile Section */}
            <div
              className="relative flex gap-1 items-center cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img
                className="w-9 h-9 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnbO0qRs8GP4j4_TmIFZYb0DDsoMdjaJWTw&s"
                alt="profile image"
              />
              <span className="top-0 start-7 absolute w-3 h-3 bg-darkGreen dark:border-darkGray rounded-full"></span>
              <h3>{user}</h3>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: "white",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  width: "150px",
                  zIndex: 10,
                }}
                onClick={handleLogoutAction}
              >
                <ul style={{ listStyle: "none", margin: 0, padding: "10px" }}>
                  <li
                    style={{
                      padding: "8px 12px",
                      cursor: "pointer",
                      color: "black",
                      textAlign: "center",
                      border: "1px solid black",
                    }}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
            {/* <button >Logout</button> */}
          </div>
        ) : (
          <div className="relative flex gap-1 items-center">
            <img
              className="w-9 h-9 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvnbO0qRs8GP4j4_TmIFZYb0DDsoMdjaJWTw&s"
              alt="profile image"
            />
            <span className="top-0 start-7 absolute w-3 h-3 bg-darkGray dark:border-darkGray rounded-full"></span>
            <Link to="/login">Login</Link>
          </div>
        )}

        {/* Theme Toggle */}
        <FaMoon />
        {/* <FaSun /> */}
      </div>
    </div>
  );
}

export default Navbar;
