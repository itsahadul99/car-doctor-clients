import axios from 'axios';
import img5 from '../assets/images/banner/5.jpg';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
    const navigate = useNavigate()
    const handleOrder = e => {
        e.preventDefault()
        const form = e.target;
        const firstName = form.first_name.value;
        const lastName = form.last_name.value;
        const name = firstName + ' ' + lastName;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        const order = { name, phone, email, message }
        // console.log(order);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm order!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post(`${import.meta.env.VITE_API_URL}/checkout`, order)
                    .then(data => {
                        if (data.data.insertedId) {
                            Swal.fire({
                                title: "Order Confirm!",
                                text: "Your order received.",
                                icon: "success"
                            });
                            navigate('/')
                        }
                    })

            }
        });
    }
    return (
        <div>
            <div className='relative'>
                <img className='h-[100px] md:h-[250px] w-full object-cover rounded-xl' src={img5} alt="" />
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl w-full h-[100px] md:h-[250px] top-0 opacity-40'></div>
                <h1 className='absolute top-1/2 left-10 lg:left-20 text-white font-bold text-xl md:text-2xl lg:text-4xl'>Check Out</h1>
            </div>
            <div className='my-5 md:my-10 lg:my-16 px-8 py-5 bg-[#F3F3F3] rounded-lg'>
                <form onSubmit={handleOrder}>
                    <div className='grid grid-cols-1 md:grid-cols-2 w-full md:w-1/2 mx-auto  gap-10 items-center'>
                        <div className='w-full'>
                            <input type="text" name="first_name" placeholder='First Name' className='px-5 py-3 bg-white rounded-md font-semibold w-full' />
                        </div>
                        <div className='w-full'>
                            <input type="text" name="last_name" placeholder='Last Name' className='px-5 py-3 bg-white rounded-md font-semibold w-full' />
                        </div>
                        <div className='w-full'>
                            <input type="text" name="phone" placeholder='Your Phone' className='px-5 py-3 bg-white rounded-md font-semibold w-full' />
                        </div>
                        <div className='w-full'>
                            <input type="email" name="email" placeholder='Your Email' className='px-5 py-3 bg-white rounded-md font-semibold w-full' />
                        </div>
                        <div className='w-full col-span-2'>
                            <textarea name="message" placeholder='Your Message' className='px-5 py-3 bg-white rounded-md font-semibold w-full h-40' />
                        </div>
                        <div className='col-span-2'>
                            <button className='px-5 w-full rounded-md text-white py-2 bg-[#FF3811]'>Order Confirm</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;