/* eslint-disable react/no-unescaped-entities */
import check from '../assets/icons/check.svg';
import delivery from '../assets/icons/deliveryt.svg';
import Group from '../assets/icons/group.svg';
import person from '../assets/icons/person.svg';
import Wrench from '../assets/icons/Wrench.svg';
const CoreFeature = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-5">
                <h3 className='text-lg md:text-xl font-semibold text-[#FF3811]'>Core Features</h3>
                <h1 className="text-2xl md:text-4xl font-bold text-black">Why Choose Us</h1>
                <p className="text-sm md:text-lg text-[#737373] text-center">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="flex flex-col md:flex-wrap md:flex-row lg:flex-row justify-center items-center gap-5 my-5 lg:my-10">
                <div className='flex flex-col justify-center items-center gap-3 p-3 border rounded-lg hover:bg-[#FF3811] hover:text-white'>
                    <img src={Group} alt="" className='bg-white' />
                    <h3 className='text-lg font-bold'>Expert Team</h3>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 p-3 border rounded-lg hover:bg-[#FF3811] hover:text-white'>
                    <img src={person} alt="" className='bg-white' />
                    <h3 className='text-lg font-bold'>24/7 Support</h3>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 p-3 border rounded-lg hover:bg-[#FF3811] hover:text-white'>
                    <img src={Wrench} alt="" className='bg-white' />
                    <h3 className='text-lg font-bold'>Best Equipment</h3>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 p-3 border rounded-lg hover:bg-[#FF3811] hover:text-white'>
                    <img src={check} alt="" className='bg-white' />
                    <h3 className='text-lg font-bold'>100% Guranty</h3>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 p-3 border rounded-lg hover:bg-[#FF3811] hover:text-white'>
                    <img src={delivery} alt="" className='bg-white' />
                    <h3 className='text-lg font-bold'>Timely Delivery</h3>
                </div>
            </div>
        </div>
    );
};

export default CoreFeature;