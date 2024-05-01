/* eslint-disable react/no-unescaped-entities */
import { FaStar } from 'react-icons/fa';
import product1 from '../assets/images/products/1.png';
import product2 from '../assets/images/products/2.png';
import product3 from '../assets/images/products/3.png';
import product4 from '../assets/images/products/4.png';
import product5 from '../assets/images/products/5.png';
import product6 from '../assets/images/products/6.png';
const PopularProduct = () => {
    return (
        <div className="my-5 lg:my10">
            <div className="flex flex-col justify-center items-center gap-5">
                <h3 className='text-lg md:text-xl font-semibold text-[#FF3811]'>Popular Products</h3>
                <h1 className="text-2xl md:text-4xl font-bold text-black">Browse Our Products</h1>
                <p className="text-sm md:text-lg text-[#737373] text-center">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="my-5 md:my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 justify-center items-center">
                <div className="card md:w-96 border p-5">
                    <figure className="px-10 py-5 bg-[#F3F3F3] rounded-xl">
                        <img src={product1} alt="Car Engine plug" className='w-[150px] h-[150px]' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex items-center gap-2 text-[#FF912C] *:size-5'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h2 className="card-title font-bold">Car Engine Plug</h2>
                        <p className="text-sm md:text-lg font-semibold">$20.00</p>
                    </div>
                </div>
                <div className="card md:w-96 border p-5">
                    <figure className="px-10 pt-10   py-5 bg-[#F3F3F3] rounded-xl">
                        <img src={product2} alt="Car Engine plug" className='w-[150px] h-[150px]' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex items-center gap-2 text-[#FF912C] *:size-5'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h2 className="card-title font-bold">Car Air Filter</h2>
                        <p className="text-sm md:text-lg font-semibold">$20.00</p>
                    </div>
                </div>
                <div className="card md:w-96 border p-5">
                    <figure className=" pt-10 px-10  py-5 bg-[#F3F3F3] rounded-xl">
                        <img src={product3} alt="Car Engine plug" className='w-[150px] h-[150px]' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex items-center gap-2 text-[#FF912C] *:size-5'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h2 className="card-title font-bold">Car Engine Plug</h2>
                        <p className="text-sm md:text-lg font-semibold">$20.00</p>
                    </div>
                </div>
                <div className="card md:w-96 border p-5">
                    <figure className="px-10 pt-10  py-5 bg-[#F3F3F3] rounded-xl">
                        <img src={product4} alt="Car Engine plug" className='w-[150px] h-[150px]' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex items-center gap-2 text-[#FF912C] *:size-5'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h2 className="card-title font-bold">Car Engine Plug</h2>
                        <p className="text-sm md:text-lg font-semibold">$20.00</p>
                    </div>
                </div>
                <div className="card md:w-96 border p-5">
                    <figure className="px-10 pt-10 py-5 bg-[#F3F3F3] rounded-xl">
                        <img src={product5} alt="Car Engine plug" className='w-[150px] h-[150px]' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex items-center gap-2 text-[#FF912C] *:size-5'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h2 className="card-title font-bold">Car Engine Plug</h2>
                        <p className="text-sm md:text-lg font-semibold">$20.00</p>
                    </div>
                </div>
                <div className="card md:w-96 border p-5">
                    <figure className="px-10 pt-10  py-5 bg-[#F3F3F3] rounded-xl">
                        <img src={product6} alt="Car Engine plug" className='w-[150px] h-[150px]' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex items-center gap-2 text-[#FF912C] *:size-5'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <h2 className="card-title font-bold">Car Engine Plug</h2>
                        <p className="text-sm md:text-lg font-semibold">$20.00</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-5">
                <button className=" px-1 md:px-3 py-2 border border-[#FF3811] text-[#FF3811] rounded-md font-semibold mt-5">More Products</button>
            </div>
        </div>
    );
};

export default PopularProduct;