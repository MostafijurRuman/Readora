import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <div>
    <nav className="bg-base-100 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
            <a className="text-xl font-bold text-primary" href="/">Readora</a>
            <div className="flex space-x-4">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/listed-books"
                    className={({ isActive }) =>
                        isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
                    }
                >
                    Listed Books
                </NavLink>
                <NavLink
                    to="/pages-to-read"
                    className={({ isActive }) =>
                        isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
                    }
                >
                    Pages to Read
                </NavLink>
            
            </div>
        </div>
    </nav>
    </div>
  )
}
