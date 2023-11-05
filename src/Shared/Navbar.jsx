import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Image/Logo-name.png";
import { FaBars } from "react-icons/fa";
import user from "../assets/Image/user.png";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-[#eb347a]" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addJob"
          className={({ isActive }) => (isActive ? "text-[#eb347a]" : "")}
        >
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/post"
          className={({ isActive }) => (isActive ? "text-[#eb347a]" : "")}
        >
          My Post
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bids"
          className={({ isActive }) => (isActive ? "text-[#eb347a]" : "")}
        >
          My Bids
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/request"
          className={({ isActive }) => (isActive ? "text-[#eb347a]" : "")}
        >
          My Request
        </NavLink>
      </li>
    </>
  );

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
          {/* <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user} />
              </div>
            </label>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="w-10 rounded-full flex justify-center">
                <img src={user} />
              </div>
              <li>
                <Link>Login</Link>
              </li>
              <li>
               
              </li>
            </div>
          </div> */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user} />
              </div>
            </label>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-20 flex justify-center items-center">
                    <img src={user} alt="" />
                  </div>
                  <p>Name: </p>
                  <p>Email: </p>
                </div>

                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/Register"}>Register</Link>
                </li>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
