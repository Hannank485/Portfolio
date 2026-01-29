import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router";
import logo from "public/assets/logo.svg";
function Navbar({ setOpen }: { setOpen: () => void }) {
  const hoverEffect =
    "hover:text-primary hover:underline transition-all duration-200 ease-in-out";
  return (
    <nav className="sticky w-screen z-40 top-0 py-3 md:py-5 px-10 md:px-20 border-b border-b-border flex items-center justify-between backdrop-blur-2xl shadow-sm select-none ">
      <Link to="/">
        <img src={logo} alt="" width={60} />
      </Link>
      <button onClick={setOpen}>
        <GiHamburgerMenu className="text-lg block  md:hidden cursor-pointer" />
      </button>
      <ul className="hidden items-center md:flex gap-4 text-secondary">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline  text-accent font-semibold" : hoverEffect
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline  text-accent font-semibold" : hoverEffect
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive ? "underline  text-accent font-semibold" : hoverEffect
            }
          >
            Project
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline  text-accent font-semibold" : hoverEffect
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
