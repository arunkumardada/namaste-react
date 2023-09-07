import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  // If there is no dependency array,=>  useEffect called  every render.
  // If there is dependency array(empty array) [] => useEffect called on initial render (Just once).
  // If dependency array is [btnName] => useEffect called everytime when btnName state changes.
  useEffect(() => {
    // console.log("useEffect Rendered");
  }, [btnName]);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-orange-50 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About US</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact US</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
