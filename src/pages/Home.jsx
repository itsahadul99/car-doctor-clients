import { FaCalendar, FaPhone } from "react-icons/fa";
import About from "../components/About";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { FaLocationPin } from "react-icons/fa6";
import PopularProduct from "../components/PopularProduct";
const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <div className="mx-auto w-full h-[250px] bg-[#151515] rounded-md px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center my-5 lg:my-10">
                <div className="flex gap-5 items-center justify-center">
                    <FaCalendar size={30} className="text-white"/>
                    <div>
                    <p className="text-white">We are open monday-friday</p>
                    <h1 className="text-xl font-bold text-white">7:00 am - 9:00 pm</h1>
                    </div>
                </div>
                <div className="flex gap-5 items-center justify-center">
                    <FaPhone size={30} className="text-white"/>
                    <div>
                    <p className="text-white">Have a question?</p>
                    <h1 className="text-xl font-bold text-white">+2546 251 2658</h1>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                    <FaLocationPin size={30} className="text-white justify-center"/>
                    <div>
                    <p className="text-white">Need a repair? our address</p>
                    <h1 className="text-xl font-bold text-white">Liza Street, New York</h1>
                    </div>
                </div>
            </div>
            <PopularProduct />
        </div>
    );
};

export default Home;