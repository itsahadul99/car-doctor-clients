/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */

// import { useLoaderData, useParams } from 'react-router-dom';
import img5 from '../assets/images/banner/5.jpg';
import logo from '../assets/logo.svg'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
const ServiceDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/serviceDetails/${id}`)
            .then(data => {
                setData(data.data);
            })
    }, [id])
    return (
        <div>
            <div className='relative'>
                <img className='h-[100px] md:h-[250px] w-full object-cover rounded-xl' src={img5} alt="" />
                <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-xl w-full h-[100px] md:h-[250px] top-0 opacity-40'></div>
                <h1 className='absolute top-1/2 left-10 lg:left-20 text-white font-bold text-xl md:text-2xl lg:text-4xl'>Services Details</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-5 lg:gap-20 mt-5 md:mt-8 lg:mt-16'>
                <div className=' flex-1'>
                    <img className='rounded-md' src={data.img} alt="" />
                    <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold mt-3'>{data.title}</h1>
                </div>
                <div className='p-5 bg-gray-200 flex-1 space-y-3 rounded-lg'>
                    <h3 className='text-lg md:text-xl font-bold'>Services</h3>
                    <h2 className='py-3 px-5 rounded-lg flex justify-between items-center bg-[#FF3811] text-white font-semibold text-lg'>Battery Charge<FaArrowRight size={20} /> </h2>
                    <h2 className='py-3 px-5 rounded-lg flex justify-between items-center bg-white text-black font-semibold text-lg'>Engine Repair<FaArrowRight size={20} /> </h2>
                    <h2 className='py-3 px-5 rounded-lg flex justify-between items-center bg-white text-black font-semibold text-lg'>Automatic Services <FaArrowRight size={20} /> </h2>
                    <h2 className='py-3 px-5 rounded-lg flex justify-between items-center bg-white text-black font-semibold text-lg'>Engine Oil Change <FaArrowRight size={20} /> </h2>
                    <h2 className='py-3 px-5 rounded-lg flex justify-between items-center bg-white text-black font-semibold text-lg'>Electrical System<FaArrowRight size={20} /> </h2>
                </div>
            </div>
            <div className='my-5 lg:my-10'>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-5 lg:gap-20'>
                    <div className='col-span-2 space-y-5'>
                        <p>{data.description}</p>
                        <div className='grid grid-cols-2 gap-5 items-center'>
                            {/* {
                            data?.facility.map((item, idx) =>
                                
                            )
                            } */}
                            <div className='px-5 py-8 bg-[#F3F3F3] border-t-2 rounded-t-lg border-[#FF3811]'>
                                    <h5 className='text-center text-sm md:text-lg font-semibold my-2'>{item.name}</h5>
                                    <p className='text-center text-xs lg:text-sm'>{item.details}</p>
                                </div>
                            <div className='px-5 py-8 bg-[#F3F3F3] border-t-2 rounded-t-lg border-[#FF3811]'>
                                <h5 className='text-center text-sm md:text-lg font-semibold my-2'>24/7 Quality Service</h5>
                                <p className='text-center text-xs lg:text-sm'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-5 items-center'>
                            <div className='px-5 py-8 bg-[#F3F3F3] border-t-2 rounded-t-lg border-[#FF3811]'>
                                <h5 className='text-center text-sm md:text-lg font-semibold my-2'>Easy Customer Service</h5>
                                <p className='text-center text-xs lg:text-sm'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                            <div className='px-5 py-8 bg-[#F3F3F3] border-t-2 rounded-t-lg border-[#FF3811]'>
                                <h5 className='text-center text-sm md:text-lg font-semibold my-2'>Quality Cost Service</h5>
                                <p className='text-center text-xs lg:text-sm'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                            </div>
                        </div>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                    </div>
                    <div className='space-y-5'>
                        <div className='p-5 bg-[#151515] rounded-md text-white space-y-3 lg:space-y-5 mx-auto md:mx-0'>
                            <h3 className='text-lg lg:text-xl font-semibold'>Download</h3>
                            <div className='flex gap-3 justify-between items-center'>
                                <div className='flex gap-5 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M24.375 17.8125V14.5312C24.375 13.4124 23.9305 12.3393 23.1394 11.5481C22.3482 10.757 21.2751 10.3125 20.1562 10.3125H18.2812C17.9083 10.3125 17.5506 10.1643 17.2869 9.90062C17.0232 9.6369 16.875 9.27921 16.875 8.90625V7.03125C16.875 5.91237 16.4305 4.83931 15.6394 4.04814C14.8482 3.25697 13.7751 2.8125 12.6562 2.8125H10.3125M11.25 20.625V21.5625M15 17.8125V21.5625M18.75 15V21.5625M13.125 2.8125H7.03125C6.255 2.8125 5.625 3.4425 5.625 4.21875V25.7812C5.625 26.5575 6.255 27.1875 7.03125 27.1875H22.9688C23.745 27.1875 24.375 26.5575 24.375 25.7812V14.0625C24.375 11.0788 23.1897 8.21733 21.08 6.10755C18.9702 3.99776 16.1087 2.8125 13.125 2.8125V2.8125Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div>
                                        <p className='text-lg font-semibold'>Our Brochure</p>
                                        <p>Download</p>
                                    </div>
                                </div>
                                <div>
                                    <button className='px-1 md:px-3 py-2 bg-[#FF3811]'><FaArrowRight size={20} /></button>
                                </div>
                            </div>
                            <div className='flex gap-3 justify-between items-center'>
                                <div className='flex gap-5 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                        <path d="M24.375 17.8125V14.5312C24.375 13.4124 23.9305 12.3393 23.1394 11.5481C22.3482 10.757 21.2751 10.3125 20.1562 10.3125H18.2812C17.9083 10.3125 17.5506 10.1643 17.2869 9.90062C17.0232 9.6369 16.875 9.27921 16.875 8.90625V7.03125C16.875 5.91237 16.4305 4.83931 15.6394 4.04814C14.8482 3.25697 13.7751 2.8125 12.6562 2.8125H10.3125M11.25 20.625V21.5625M15 17.8125V21.5625M18.75 15V21.5625M13.125 2.8125H7.03125C6.255 2.8125 5.625 3.4425 5.625 4.21875V25.7812C5.625 26.5575 6.255 27.1875 7.03125 27.1875H22.9688C23.745 27.1875 24.375 26.5575 24.375 25.7812V14.0625C24.375 11.0788 23.1897 8.21733 21.08 6.10755C18.9702 3.99776 16.1087 2.8125 13.125 2.8125V2.8125Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div>
                                        <p className='text-lg font-semibold'>Our Brochure</p>
                                        <p>Download</p>
                                    </div>
                                </div>
                                <div>
                                    <button className='px-1 md:px-3 py-2 bg-[#FF3811]'><FaArrowRight size={20} /></button>
                                </div>
                            </div>
                        </div>
                        <div className='p-5 bg-[#151515] rounded-md text-white space-y-3 lg:space-y-5 pb-5 md:pb-10 mx-auto md:mx-0'>
                            <img className='mx-auto text-white' src={logo} alt="" />
                            <h3 className='text-sm md:text-lg font-semibold md:w-1/2 mx-auto text-center'>Need Help? We Are Here
                                To Help You
                            </h3>
                            <div className='px-5 py-3 bg-white relative'>
                                <p className='text-xm md:text-lg font-bold text-[#FF3811] text-center'>Car Doctor <span className='text-black'>Special</span></p>
                                <p className='text-xs md:text-sm font-bold text-[#737373] text-center mb-5'>save upto <span className='text-[#FF3811]'>60% off</span></p>
                                <div className='absolute -bottom-3 py-1 px-3 rounded-md bg-[#FF3811] left-1/3 text-white font-bold'>
                                    <p>Get A Quote</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>Price: ${data.price}</h1>
                            <button className='px-5 w-full rounded-md text-white py-2 bg-[#FF3811]'>Proceed Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;