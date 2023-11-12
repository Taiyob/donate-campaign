import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
  return ( 
    <div>
      <nav className="flex justify-between items-center py-6 px-5 max-w-[1300px] mx-auto mb-5">
        <Logo></Logo>
        <ul className="flex gap-5">
          <li className='text-2xl'>
            <NavLink
              to="/"
              className={({ isActive, isPending, }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? "text-red-400 underline font-semibold text-2xl"
                  : ''
              }
            >
              Home
            </NavLink>
          </li>
          <li className='text-2xl'>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-400 underline font-semibold text-2xl"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li className='text-2xl'>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-400 underline font-semibold text-2xl"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
