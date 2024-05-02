import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogOut = () => {
        logOut()
        .then(() => {
            Swal.fire({
                title: 'Successfully Logged in !',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
            navigate('/')
        })
        .catch(error => {
            Swal.fire({
                title: `${error.message}`,
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        })
    }
    const links = <>
        <li>
            <NavLink to="/"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#FF3811] pb-1 border-b-0 lg:border-b-2 border-red-600 font-bold"
                        : "font-bold "
                }>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/about"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#FF3811] pb-1 border-b-0 lg:border-b-2 border-red-600 font-bold"
                        : "font-bold "
                }>
                About
            </NavLink>
        </li>
        <li>
            <NavLink to="/services"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#FF3811] pb-1 border-b-0 lg:border-b-2 border-red-600 font-bold"
                        : "font-bold "
                }>
                Services
            </NavLink>
        </li>
        <li>
            <NavLink to="/blog"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#FF3811] pb-1 border-b-0 lg:border-b-2 border-red-600 font-bold"
                        : "font-bold "
                }>
                Blog
            </NavLink>
        </li>
        <li>
            <NavLink to="/contact"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#FF3811] pb-1 border-b-0 lg:border-b-2 border-red-600 font-bold"
                        : "font-bold "
                }>
                Contact
            </NavLink>
        </li>
        {
            user ? <button onClick={handleLogOut} className="btn btn-sm">Log Out</button>
                : <li>
                    <NavLink to="/login"
                        className={({ isActive }) =>
                            isActive
                                ? "text-[#FF3811] pb-1 border-b-0 lg:border-b-2 border-red-600 font-bold"
                                : "font-bold "
                        }>
                        Log In
                    </NavLink>
                </li>
        }
    </>
    return (
        <div className="navbar bg-base-100 my-5">
            <div className="navbar-start items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="w-20 h-1/2">
                    <Link to='/'>
                        <img src={logo} alt="" />
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center gap-5">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex justify-center items-center gap-5">
                    <FaSearch size={20} />
                    <button className="px-3 py-2 border-2 border-[#FF3811] font-semibold text-lg text-[#FF3811] rounded-md">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;