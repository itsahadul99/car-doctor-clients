import { Link, useNavigate } from 'react-router-dom';
import login from '../assets/images/login/login.svg';
// import { useContext } from 'react';
// import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
const Signin = () => {
    // const {createUser} = useContext(AuthContext)
    const {createUser} = useAuth()
    const navigate = useNavigate()
    const handleForm = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(() => {
            Swal.fire({
                title: 'Successfully Create account!',
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
    return (
        <section className='my-5'>
            <div className="container flex flex-col justify-center items-center mx-auto lg:flex-row lg:justify-center gap-5">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={login} alt="" className="object-contain" />
                </div>
                <div className="flex flex-col justify-center text-center rounded-sm lg:text-left w-full h-full">
                    <div className=' lg:w-1/2 h-full border px-5 py-20 mx-auto'>
                        <h1 className='text-center text-lg lg:text-2xl font-bold mb-5'>Sign Up</h1>
                        <form onSubmit={handleForm} className="space-y-6">
                            <div className="space-y-2 text-sm">
                                <label htmlFor="username" className="block ">
                                    Your name
                                </label>
                                <input type="text" name="name" id="username" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border " />
                            </div>
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
                               Sign Up
                            </button>
                        </form>
                        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 mt-5 ">
                            Already have an account?
                            <Link to='/login' className="underline hover:text-[#ff3911ce] font-bold">
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Signin;