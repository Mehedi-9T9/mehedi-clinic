import { useContext } from "react";
import Slider from "./Slider/Slider";
import { AuthContext } from "../Shared/authProvider/AuthProvider";
import DoctorsCart from "../Shared/doctorsCart/DoctorsCart";
import { Link, useLoaderData } from "react-router-dom";
import Services from "./Services/Services";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
    const { doctors } = useContext(AuthContext)
    const sliceDoctors = doctors.slice(0, 3)
    const services = useLoaderData()

    useEffect(() => {
        Aos.init({ delay: 1000 })
    }, [])

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Mehedi CLinic | Home</title>
            </Helmet>
            <Slider></Slider>

            <div>
                <h2 className="text-4xl text-center my-10 text-red-700 font-roboto font-bold">Our Services</h2>
                <div data-aos="zoom-in-down" className="md:grid grid-cols-3 gap-6 ">
                    {
                        services.map((service, idx) => <Services key={idx} service={service}></Services>)
                    }
                </div>

            </div>

            <div>
                <h2 className="text-4xl text-center my-10 text-red-700 font-roboto font-bold">Our Speacial Doctors</h2>
                <div className="md:grid grid-cols-3 gap-6">
                    {
                        sliceDoctors.map((doctor, idx) => <DoctorsCart key={idx} doctor={doctor}></DoctorsCart>)
                    }

                </div>
                <div className="text-center" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" >
                    <Link to='/doctors'>
                        <h2 className=" btn text-xl text-center my-10 bg-red-700 text-white font-roboto font-bold">More Doctors <FaLongArrowAltRight /></h2>
                    </Link>
                </div>

            </div>


        </div>
    );
};

export default Home;