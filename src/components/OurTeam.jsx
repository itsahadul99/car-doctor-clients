/* eslint-disable react/no-unescaped-entities */
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import team1 from '../assets/images/team/1.jpg';
import team2 from '../assets/images/team/2.jpg';
import team3 from '../assets/images/team/3.jpg';
const OurTeam = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-5">
                <h3 className='text-lg md:text-xl font-semibold text-[#FF3811]'>Team</h3>
                <h1 className="text-2xl md:text-4xl font-bold text-black">Meet Our Team</h1>
                <p className="text-sm md:text-lg text-[#737373] text-center">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="my-5 md:my-12 flex flex-col lg:flex-row gap-5 md:gap-10 justify-center items-center">
                <div className="card md:w-96 border p-5">
                    <figure className="p-5 ">
                        <img src={team1} alt="Car Engine plug" className='rounded-xl' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Mical Jackson</h2>
                        <p className="text-sm  font-semibold">Engine Expert</p>
                        <div className='flex justify-center items-center gap-3 my-2'>
                            <FaFacebook size={30} className='text-blue-400' />
                            <FaInstagram size={30} className='text-red-400' />
                            <FaTwitter size={30} className='text-blue-400' />
                            <FaLinkedinIn size={30} className='text-sky-400' />
                        </div>
                    </div>
                </div>
                <div className="card md:w-96 border p-5">
                    <figure className="p-5 ">
                        <img src={team2} alt="Car Engine plug" className='rounded-xl' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Mahin Khan</h2>
                        <p className="text-sm  font-semibold">Engine Expert</p>
                        <div className='flex justify-center items-center gap-3 my-2'>
                            <FaFacebook size={30} className='text-blue-400' />
                            <FaInstagram size={30} className='text-red-400' />
                            <FaTwitter size={30} className='text-blue-400' />
                            <FaLinkedinIn size={30} className='text-sky-400' />
                        </div>
                    </div>
                </div>
                <div className="card md:w-96 border p-5">
                    <figure className="p-5 ">
                        <img src={team3} alt="Car Engine plug" className='rounded-xl' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">D J Bravo</h2>
                        <p className="text-sm  font-semibold">Engine Expert</p>
                        <div className='flex justify-center items-center gap-3 my-2'>
                            <FaFacebook size={30} className='text-blue-400' />
                            <FaInstagram size={30} className='text-red-400' />
                            <FaTwitter size={30} className='text-blue-400' />
                            <FaLinkedinIn size={30} className='text-sky-400' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;