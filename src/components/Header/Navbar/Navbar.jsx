import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import './nav.css'

const Navbar = () => {
  return (
    <div className="bannerOverlay" style={{backgroundImage: 'url(https://i.ibb.co/pJDsRtR/Rectangle-4281.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', height:'400px'}}>   
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
              to="/eee"
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
      <div className='flex justify-center items-center text-4xl font-bold mb-5'>
        <h1>I Grow By Helping People In Need</h1>
      </div>
      <div className='flex justify-center items-center'>
        <div className="form-control ">
            <label className="input-group">
              <input type="text" placeholder="Search Here" className="input input-bordered" />
              <span className='bg-orange-950 text-white font-semibold'>Search</span>
            </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
