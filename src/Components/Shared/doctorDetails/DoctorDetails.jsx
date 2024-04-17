import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';

const DoctorDetails = () => {
    const { doctorId } = useParams()
    const { doctors } = useContext(AuthContext)
    const findItem = doctors.find(doctor => doctor.id == doctorId)
    const { id, name, img, collage, degree, disease, description, time, day } = findItem;
    console.log(id, name);
    return (
        <div className=" md:flex gap-x-6 bg-base-200 container mx-auto  p-10">
            <div className="">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl border" />
            </div>
            <div className='md:mt-0 mt-10'>
                <h1 className="text-5xl font-roboto font-bold">{name}</h1>
                <p className="font-poppins"><span className='text-2xl font-bold'>{degree}</span> {collage}</p>
                <div className='border-t-2 border-white py-4'>
                    <h2 className='text-2xl font-roboto font-semibold'>Tritment of disease</h2>
                    <div className='space-x-6 text-black font-poppins text-lg'>
                        {
                            disease.map((item, idx) => <span key={idx}>{item}</span>)
                        }

                    </div>
                </div>
                <p className='font-poppins text-base mb-3'>{description}</p>
                <div className='  bg-slate-300 flex justify-around rounded-lg p-4'>
                    <div>
                        <h3 className='text-xl font-roboto font-semibold text-red-700'>Servising Day </h3>
                        <p className='text-sm font-poppins'>{day}</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-roboto font-semibold text-red-700'>Servising Time</h3>
                        <p className='text-sm font-poppins'>{time}</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-roboto font-semibold text-red-700'>Expire Date</h3>
                        <p className='text-sm font-poppins'>30 Days</p>
                    </div>
                </div>
                <div className='py-6 text-center md:text-start  '>
                    <h3 className='btn bg-red-500 text-black text-lg font-poppins border border-black '>New Parson : <span className='text-white'> 500 TK</span></h3>
                    <h3 className=' mt-5 btn bg-red-500 text-black text-lg font-poppins border border-black md:ml-10'>Old Parson : <span className='text-white'> 250 TK</span></h3>
                </div>




            </div>
        </div >
    );
};

export default DoctorDetails;