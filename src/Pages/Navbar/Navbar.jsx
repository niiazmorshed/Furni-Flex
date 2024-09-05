import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Furni Flex</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/login"><a className="btn">Login</a></NavLink>
      </div>
    </div>
  );
};

export default Navbar;
