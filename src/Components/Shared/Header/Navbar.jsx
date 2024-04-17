import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import './Navbar.css'

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)

    const logOutHandle = () => {
        logOutUser()
            .then(() => {
                alert("log Out Successfull")
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/doctors'>Doctors</NavLink>
        <NavLink to='/blogs'>Blogs</NavLink>
        <NavLink to='/login'>Login</NavLink>
    </>

    console.log(user);
    return (

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
                <a className="btn btn-ghost text-2xl md:text-3xl font-roboto">Mehedi <span className="text-red-700">Clinic</span> <sup>+</sup></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-x-6 text-xl">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">

                {
                    user ?
                        <div className="avatar online mr-3 md:mr-5 user-photo ">
                            <div className="w-[50px] rounded-full">

                                <div className="">
                                    <img src={user?.photoURL ? user?.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                                    <div className=" right-0 top-[52px] absolute custom-name z-10 w-[150px] text-center ">
                                        <p className="text-xl font-roboto text-red-700 font-bold " >{user?.displayName ? user?.displayName : "Nameless"}</p>
                                    </div>


                                </div>






                                {/* <img src={user?.photoURL ? user?.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} /> */}
                            </div>
                        </div> : null
                }



                {
                    user ? <a className="btn" onClick={logOutHandle}>Log Out</a> : <Link to="/login"><a className="btn">Login</a></Link>
                }


            </div>
        </div>

    );
};

export default Navbar;