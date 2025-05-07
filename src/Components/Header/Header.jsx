import { NavLink } from "react-router-dom";


export default function Header() {
    const links =<>
            <li><a><NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "btn border-main text-main font-bold  btn-sm" : "btn btn-ghost btn-sm"
                    }
                >
                    Home
                </NavLink></a></li>

            <li><a><NavLink
                    to="/listed-books"
                    className={({ isActive }) =>
                        isActive ? "btn border-main text-main font-bold  btn-sm" : "btn btn-ghost btn-sm"
                    }
                >
                    Listed Books
                </NavLink></a></li>

            <li><a><NavLink
                    to="/pages-to-read"
                    className={({ isActive }) =>
                        isActive ? "btn border-main text-main font-bold  btn-sm" : "btn btn-ghost btn-sm"
                    }
                >
                    Pages to Read
                </NavLink></a></li>
    </>
  return (
    <div className="navbar mb-14 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-playfair">
        {links}
      </ul>
    </div>
    <NavLink to="/">  
        <a className=" text-[28px]  font-bold">Readora</a>
    </NavLink>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-playfair">
      {links}
    </ul>
  </div>
  <div className="navbar-end font-worksans">
    <a className="btn mr-4  text-white text-[18px] rounded-[8px] bg-main">Sign In</a>
    <a className="btn text-white text-[18px] rounded-[8px] bg-[#59C6D2]">Sign Up</a>
  </div>
</div>
  )
}

{/* <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
                    }
                >
                    Home
                </NavLink> */}