// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Aos from 'aos';
// import 'aos/dist/aos.css'


import 'animate.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect } from 'react';


const Slider = () => {

    return (
        <div className='container mx-auto '>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[600px] m-5 rounded-xl border bg-[#eee]"
            >
                <SwiperSlide>

                    <div className=' md:flex w-full justify-around md:m-0 m-5 '>
                        <div className='md:p-[100px]  md:text-black-700 md:space-y-3'>
                            <h2 className="text-3xl md:text-5xl font-roboto font-bold text-red-700 md:text-black">Our Skin Tips Doctor</h2>
                            <h2 className='text-xl md:text-3xl font-poppins font-bold'>Sumaiya Pervin</h2>
                            <h3 className='font-poppins text-lg'> <span className='text-xl font-semibold'>MBBS</span>  Rajshahi Medical Collage</h3>
                            <div className='mt-5 md:mt-[50px]'>
                                <h2 className='text-xl text-red-700 font-bold '>Notification :</h2>
                                <p className='font-poppins'>A dermatologist specializes in diagnosing and treating skin conditions. <br /> They offer medical and cosmetic solutions, promote preventive care,  <br /> and stay updated through continuing education.</p>
                            </div>
                        </div>
                        <div className=' md:w-[500px] md:h-[500px] rounded-xl p-5 md:p-20'>
                            <img src="https://i.ibb.co/RNN1kt7/slider3-image.png" alt="" className='' />
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className=' md:flex w-full justify-around md:m-0 m-5'>
                        <div className='md:p-[100px] md:text-black-700 md:space-y-3'>
                            <h2 className="text-3xl md:text-5xl font-roboto font-bold text-red-700 md:text-black">Our Pregment Tips Doctors</h2>
                            <h2 className='text-xl md:text-3xl font-poppins font-bold'>Sinthiya Akter</h2>
                            <h3 className='font-poppins text-lg'> <span className='text-xl font-semibold'>MBBS</span>  Rajshahi Medical Collage</h3>
                            <div className='mt-5 md:mt-[50px]'>
                                <h2 className='text-xl text-red-700 font-bold '>Notification :</h2>
                                <p className='font-poppins'>Pregnancy doctors, or obstetricians, provide medical care for <br /> pregnant women, ensuring a healthy pregnancy, safe delivery, <br /> and postnatal care for both mother and baby.</p>
                            </div>
                        </div>
                        <div className=' md:w-[500px] md:h-[500px] rounded-xl p-5 md:p-20'>
                            <img src="https://i.ibb.co/RNN1kt7/slider3-image.png" alt="" className='' />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=' md:flex w-full justify-around md:m-0 m-5'>
                        <div className='md:p-[100px] text-black-700 md:space-y-3'>
                            <h2 className="text-3xl md:text-5xl font-roboto font-bold text-red-700 md:text-black">Our Eyes Tips Doctor</h2>
                            <h2 className='text-xl md:text-3xl font-poppins font-bold'>Mansura Jannat</h2>
                            <h3 className='font-poppins text-lg'> <span className='text-xl font-semibold'>MBBS</span>  Rajshahi Medical Collage</h3>
                            <div className='mt-5 md:mt-[50px]'>
                                <h2 className='text-xl text-red-700 font-bold  '>Notification :</h2>
                                <p className='font-poppins'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Ea cumque beatae quae. Numquam laudantium accusamus quasi, atque exercitationem vitae molestias.</p>
                            </div>
                        </div>
                        <div className=' rounded-xl p-20'>
                            <img src="https://i.ibb.co/s1D1cks/blog-new-13.jpg" alt="" className='md:w-[700px] h-[400px]  rounded-xl' />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;