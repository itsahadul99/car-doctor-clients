import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        // fetch('./services.json')
        //     .then(res => res.json())
        //     .then(data => setServices(data))

        // using axios 
        const getData = async () => {
            const { data } =await axios.get(`${import.meta.env.VITE_API_URL}/services`)
            setServices(data)
        }
        getData()
    }, [])
    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-5">
                <h3 className='text-lg md:text-xl font-semibold text-[#FF3811]'>Services</h3>
                <h1 className="text-2xl md:text-4xl font-bold text-black">Our Service Area</h1>
                <p className="text-sm md:text-lg text-[#737373] text-center">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="my-5 md:my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 justify-center items-center">
                {
                    services.map(service => <div key={service._id}>
                        <div className="card md:w-96 border rounded-lg">
                            <figure className="p-5 ">
                                <img className="w-[300px] h-[250px] rounded-md" src={service.img} alt={service.title} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {service.title}
                                </h2>
                                <div className="flex justify-between items-center text-[#FF3811]">
                                    <p className="text-sm md:text-lg font-semibold">Price: ${service.price}</p>
                                    <Link to={`/serviceDetails/${service._id}`}>
                                        <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="flex justify-center mb-5">
                <button className=" px-1 md:px-3 py-2 border border-[#FF3811] text-[#FF3811] rounded-md font-semibold mt-5">More Services</button>
            </div>
        </div>
    );
};

export default Services;