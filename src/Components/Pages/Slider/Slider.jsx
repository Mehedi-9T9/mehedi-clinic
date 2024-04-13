import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {

    return (
        <div className='container mx-auto'>
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
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=' flex w-full justify-around'>
                        <div className='p-[100px] text-black-700 space-y-3'>
                            <h2 className="text-5xl font-roboto font-bold">Our Skin Tips Doctor</h2>
                            <h2 className='text-3xl font-poppins font-bold'>Sumaiya Pervin</h2>
                            <h3 className='font-poppins text-lg'> <span className='text-xl font-semibold'>MBBS</span>  Rajshahi Medical Collage</h3>
                            <div className='mt-[50px]'>
                                <h2>Notification :</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Ea cumque beatae quae. Numquam laudantium accusamus quasi, atque exercitationem vitae molestias.</p>
                            </div>
                        </div>
                        <div className=' w-[500px] h-[500px] rounded-xl p-20'>
                            <img src="https://i.ibb.co/RNN1kt7/slider3-image.png" alt="" className='' />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=' flex w-full justify-around'>
                        <div className='p-[100px] text-black-700 space-y-3'>
                            <h2 className="text-5xl font-roboto font-bold">Our Skin Tips Doctor</h2>
                            <h2 className='text-3xl font-poppins font-bold'>Sumaiya Pervin</h2>
                            <h3 className='font-poppins text-lg'> <span className='text-xl font-semibold'>MBBS</span>  Rajshahi Medical Collage</h3>
                            <div className='mt-[50px]'>
                                <h2>Notification :</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Ea cumque beatae quae. Numquam laudantium accusamus quasi, atque exercitationem vitae molestias.</p>
                            </div>
                        </div>
                        <div className=' w-[500px] h-[500px] rounded-xl p-20'>
                            <img src="https://i.ibb.co/RNN1kt7/slider3-image.png" alt="" className='' />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className=' flex w-full justify-around'>
                        <div className='p-[100px] text-black-700 space-y-3'>
                            <h2 className="text-5xl font-roboto font-bold">Our Skin Tips Doctor</h2>
                            <h2 className='text-3xl font-poppins font-bold'>Sumaiya Pervin</h2>
                            <h3 className='font-poppins text-lg'> <span className='text-xl font-semibold'>MBBS</span>  Rajshahi Medical Collage</h3>
                            <div className='mt-[50px]'>
                                <h2>Notification :</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Ea cumque beatae quae. Numquam laudantium accusamus quasi, atque exercitationem vitae molestias.</p>
                            </div>
                        </div>
                        <div className=' rounded-xl p-20'>
                            <img src="https://i.ibb.co/s1D1cks/blog-new-13.jpg" alt="" className='w-[700px] h-[400px] rounded-xl' />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;