import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>Aboute</NavLink>
        <NavLink to='/doctors'>Doctors</NavLink>
        <NavLink to='/blogs'>Blogs</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-300 md:px-[100px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-roboto">Mehedi <span className="text-red-700">Clinic</span> <sup>+</sup></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-x-6 text-xl">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;