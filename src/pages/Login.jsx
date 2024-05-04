import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import login from '../assets/images/login/login.svg';
import axios from "axios";

const Login = () => {
    const { Login } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        Login(email, password)
            .then(() => {
                Swal.fire({
                    title: 'Successfully Logged in !',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                const user = { email }
                //   console.log(user);
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                        }
                    })
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
    return (
        <section className='my-5'>
            <div className="container flex flex-col justify-center items-center mx-auto lg:flex-row lg:justify-center gap-5">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={login} alt="" className="object-contain" />
                </div>
                <div className="flex flex-col justify-center text-center rounded-sm lg:text-left w-full h-full">
                    <div className=' lg:w-1/2 h-full border px-5 py-20 mx-auto'>
                        <h1 className='text-center text-lg lg:text-2xl font-bold mb-5'>Log In</h1>
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-2 text-sm">
                                <label htmlFor="username" className="block ">
                                    Email:
                                </label>
                                <input type="text" name="email" id="username" placeholder="Username" className="w-full px-4 py-3 border rounded-md " />
                            </div>
                            <div className="space-y-2 text-sm">
                                <label htmlFor="password" className="block ">
                                    Password
                                </label>
                                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border" />
                            </div>
                            {/* Sign in Button */}
                            <button className="text-lg rounded-xl relative p-[10px] block w-full bg-[#ff3911ce] text-white border-y-4">
                                Log In
                            </button>
                        </form>
                        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 mt-5 ">
                            Already have an account?
                            <Link to='/signin' className="underline hover:text-[#ff3911ce] font-bold">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Login;