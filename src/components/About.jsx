/* eslint-disable react/no-unescaped-entities */
import parts from '../assets/images/about_us/parts.jpg';
import person from '../assets/images/about_us/person.jpg';
const About = () => {
    return (
        <div className="hero md:h-[600px] my-5">
            <div className="hero-content flex-col lg:flex-row gap-24">
                <div className='flex-1 relative'>
                    <img src={person} className=" rounded-lg shadow-2xl" />
                    <img src={parts} alt="" className='md:absolute md:w-[300px] md:h-[280px] md:-right-16 md:top-1/2 border-4 border-white' />
                </div>
                <div className='flex-1 space-y-5'>
                    <h4 className='text-lg md:text-xl font-semibold text-[#FF3811]'>About Us</h4>
                    <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className=" px-1 md:px-3 py-2 border-2 bg-[#FF3811] rounded-md text-white font-semibold mt-5">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;