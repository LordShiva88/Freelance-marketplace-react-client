import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Image/Logo-name.png";
import { FaBars } from "react-icons/fa";
import userIcon from "../assets/Image/user.png";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className="transition duration-300 ease-in-out hover:text-blue-500 focus:text-blue-500 active:text-blue-500 hover:underline"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addJob"
          className="transition duration-300 ease-in-out hover:text-blue-500 focus:text-blue-500 active:text-blue-500 hover:underline"
        >
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/post"
          className="transition duration-300 ease-in-out hover:text-blue-500 focus:text-blue-500 active:text-blue-500 hover:underline"
        >
          My Posted Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bids"
          className="transition duration-300 ease-in-out hover:text-blue-500 focus:text-blue-500 active:text-blue-500 hover:underline"
        >
          My Bids
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/request"
          className="transition duration-300 ease-in-out hover:text-blue-500 focus:text-blue-500 active:text-blue-500 hover:underline"
        >
          My Request
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
        toast.success("Log Out Successful");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="lg:px-12 md:px-6 navbar bg-base-200 nav">
      <div className="container mx-auto">
        <div className="hidden md:flex ">
          <img src={logo} className="h-20" />
        </div>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <FaBars className="text-2xl"></FaBars>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content mt-3 z-[1] p-5 space-y-3 shadow bg-base-200 text-black rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="px-1 flex gap-10">{navLink}</ul>
        </div>

        <div className="navbar-end flex items-center">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user ? (
                  <img src={user?.photoURL} alt="" />
                ) : (
                  <img src={userIcon} alt="" />
                )}
              </div>
            </label>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="flex flex-col items-center space-y-2 mb-5">
                <div className="w-20 flex justify-center items-center">
                  {user ? (
                    <img
                      src={user?.photoURL}
                      alt=""
                      className="w-20 rounded-full border"
                    />
                  ) : (
                    <img src={userIcon} alt="" />
                  )}
                </div>
                <p>Name: {user?.displayName}</p>
                <p>{user?.email}</p>
              </div>

              <li>
                {user ? (
                  <button onClick={handleLogOut}>Log Out</button>
                ) : (
                  <Link to={"/login"}>Login</Link>
                )}
              </li>
              <li>
                <Link to={"/Register"}>Register</Link>
              </li>
              <li>
                <Link to={"/Register"}>Setting</Link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
