import img1 from '../assets/images/banner/1.jpg';
import img2 from '../assets/images/banner/2.jpg';
import img3 from '../assets/images/banner/3.jpg';
import img4 from '../assets/images/banner/4.jpg';
import img5 from '../assets/images/banner/5.jpg';
import img6 from '../assets/images/banner/6.jpg';
const Banner = () => {
    return (
        <div className="carousel w-full my-5">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='w-full'>
                    <img src={img1} className="w-full h-[600px] object-cover rounded-lg" />
                </div>
                <div className='pl-10 lg:pl-20 absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full  text-white rounded-lg'>
                    <div className='space-y-5 mt-24 lg:mt-44'>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold w-1/2 lg:w-1/3'>Affordable Price For Car Servicing</h1>
                        <p className='text-sm md:text-lg w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className="px-1 md:px-3 py-2 border-2 bg-[#FF3811] rounded-md">Discover More</button>
                            <button className="px-1 md:px-3 py-2 border-2 rounded-md">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-16 bottom-5 gap-5">
                    <a href="#slide4" className="btn btn-circle text-xl">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811] text-xl text-white">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className='w-full'>
                <img src={img2} className="w-full h-[600px] object-cover rounded-lg" />
            </div>
                <div className='pl-10 lg:pl-20 absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full  text-white rounded-lg'>
                    <div className='space-y-5 mt-24 lg:mt-44'>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold w-1/2 lg:w-1/3'>Affordable Price For Car Servicing</h1>
                        <p className='text-sm md:text-lg w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className="px-1 md:px-3 py-2 border-2 bg-[#FF3811] rounded-md">Discover More</button>
                            <button className="px-1 md:px-3 py-2 border-2 rounded-md">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-16 bottom-5 gap-5">
                    <a href="#slide1" className="btn btn-circle text-xl">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811] text-xl text-white">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='w-full'>
                    <img src={img3} className="w-full h-[600px] object-cover rounded-lg" />
                </div>
                <div className='pl-10 lg:pl-20 absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full  text-white rounded-lg'>
                    <div className='space-y-5 mt-24 lg:mt-44'>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold w-1/2 lg:w-1/3'>Affordable Price For Car Servicing</h1>
                        <p className='text-sm md:text-lg w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className="px-1 md:px-3 py-2 border-2 bg-[#FF3811] rounded-md">Discover More</button>
                            <button className="px-1 md:px-3 py-2 border-2 rounded-md">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-16 bottom-5 gap-5">
                    <a href="#slide2" className="btn btn-circle text-xl">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811] text-xl text-white">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='w-full'>
                    <img src={img4} className="w-full h-[600px] object-cover rounded-lg" />
                </div>
                <div className='pl-10 lg:pl-20 absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full  text-white rounded-lg'>
                    <div className='space-y-5 mt-24 lg:mt-44'>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold w-1/2 lg:w-1/3'>Affordable Price For Car Servicing</h1>
                        <p className='text-sm md:text-lg w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className="px-1 md:px-3 py-2 border-2 bg-[#FF3811] rounded-md">Discover More</button>
                            <button className="px-1 md:px-3 py-2 border-2 rounded-md">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-16 bottom-5 gap-5">
                    <a href="#slide3" className="btn btn-circle text-xl">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-[#FF3811] text-xl text-white">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <div className='w-full'>
                    <img src={img5} className="w-full h-[600px] object-cover rounded-lg" />
                </div>
                <div className='pl-10 lg:pl-20 absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full  text-white rounded-lg'>
                    <div className='space-y-5 mt-24 lg:mt-44'>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold w-1/2 lg:w-1/3'>Affordable Price For Car Servicing</h1>
                        <p className='text-sm md:text-lg w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className="px-1 md:px-3 py-2 border-2 bg-[#FF3811] rounded-md">Discover More</button>
                            <button className="px-1 md:px-3 py-2 border-2 rounded-md">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-16 bottom-5 gap-5">
                    <a href="#slide4" className="btn btn-circle text-xl">❮</a>
                    <a href="#slide6" className="btn btn-circle bg-[#FF3811] text-xl text-white">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <div className='w-full'>
                    <img src={img6} className="w-full h-[600px] object-cover rounded-lg" />
                </div>
                <div className='pl-10 lg:pl-20 absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full  text-white rounded-lg'>
                    <div className='space-y-5 mt-24 lg:mt-44'>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold w-1/2 lg:w-1/3'>Affordable Price For Car Servicing</h1>
                        <p className='text-sm md:text-lg w-1/2'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-5'>
                            <button className="px-1 md:px-3 py-2 border-2 bg-[#FF3811] rounded-md">Discover More</button>
                            <button className="px-1 md:px-3 py-2 border-2 rounded-md">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-16 bottom-5 gap-5">
                    <a href="#slide5" className="btn btn-circle text-xl">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811] text-xl text-white">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;