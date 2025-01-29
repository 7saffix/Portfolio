import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                tabIndex={0}
                className="flex flex-col gap-6 dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-screen h-[40vh] shadow font-medium">
                    <NavLink to={'/'} className={({ isActive }) =>
                    `px-3 ${isActive ? 'text-[#C778DD] underline  decoration-wavy' : 'text-gray-400'}`
                    }>#Home</NavLink>
                    <NavLink to={'/project'} className={({ isActive }) =>
                    `px-3 ${isActive ? 'text-[#C778DD] underline  decoration-wavy' : 'text-gray-400'}`
                    }>#Project</NavLink>
                    <NavLink to={'/about'} className={({ isActive }) =>
                    `px-3 ${isActive ? 'text-[#C778DD] underline  decoration-wavy' : 'text-gray-400'}`
                    }>#About</NavLink>
                    <NavLink to={'/contact'} className={({ isActive }) =>
                    `px-3 ${isActive ? 'text-[#C778DD] underline  decoration-wavy' : 'text-gray-400'}`
                    }>#Contact</NavLink>
                </ul>
            </div>
            <a className="font-semibold text-2xl hidden lg:block">_Safi.</a>
            </div>

            <div className="navbar-end">
            <a className="font-semibold text-2xl lg:hidden">_Safi.</a>

            <div className=" hidden lg:flex">
                <ul className="flex font-medium">
                    <NavLink to={'/'} className={({ isActive }) =>
                    `px-3 ${isActive ? 'text-[#C778DD] underline  decoration-wavy' : 'text-gray-400'}`
                    }>#Home</NavLink>
                    <NavLink to={'/project'} className={({ isActive }) =>
                    `px-3 ${isActive ? 'text-[#C778DD] underline  decoration-wavy' : 'text-gray-400'}`
                    }>#Project</NavLink>
                    <NavLink to={'/about'} className={({ isActive }) =>
                    `px-3 ${isActive ? 'text-[#C778DD] underline  decoration-wavy' : 'text-gray-400'}`
                    }>#About</NavLink>
                    <NavLink to={'/contact'} className={({ isActive }) =>
                    `px-3 ${isActive ? 'text-[#C778DD] underline  decoration-wavy' : 'text-gray-400'}`
                    }>#Contact</NavLink>
                </ul>
            </div>
            </div>
        </div>

      
        
    );
};

export default Navbar;