import { NavLink } from "react-router-dom";

// import toast from "react-hot-toast";
import UseAuth from "../../Hooks/UseAuth";

const Navbar = () => {
  const { user, logOut } = UseAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // toast.success("Logout Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <NavLink to="/">
        {" "}
        <li>
          <a className="text-white text-base font-semibold">Home</a>
        </li>
      </NavLink>
      <NavLink to="/products">
        {" "}
        <li>
          <a className="text-white text-base font-semibold">Products</a>
        </li>
      </NavLink>
      <NavLink to="/categories">
        {" "}
        <li>
          <a className="text-white text-base font-semibold">Categories</a>
        </li>
      </NavLink>
      <NavLink to="/custom">
        {" "}
        <li>
          <a className="text-white text-base font-semibold">Custom</a>
        </li>
      </NavLink>
      <NavLink to="/blog">
        {" "}
        <li>
          <a className="text-white text-base font-semibold">Blog</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar  z-10 top-0">
      {/* fixed */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <h1 className="text-5xl font-bold">
          <span className="text-white">Furni</span>{" "}
          <span className="text-blue-500">Flex</span>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end sm: pr-12 md:pr-2">
        {/* <DarkMode></DarkMode> */}

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            {user ? (
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="../../../public/user.svg"
                />
              </div>
            ) : (
              <NavLink to="/login">
                {user ? "" : <a className="btn">Login</a>}
              </NavLink>
            )}
          </div>

          {user ? (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">{user?.email}</a>
              </li>

              {user ? (
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              ) : (
                ""
              )}
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
