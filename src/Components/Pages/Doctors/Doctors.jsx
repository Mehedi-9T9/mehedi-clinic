import React, { useContext } from 'react';
import { AuthContext } from '../../Shared/authProvider/AuthProvider';
import DoctorsCart from '../../Shared/doctorsCart/DoctorsCart';
import { Helmet } from 'react-helmet-async';

const Doctors = () => {
    const { doctors } = useContext(AuthContext)
    return (
        <div className='grid grid-cols-3 gap-6 container mx-auto'>
            <Helmet>
                <title>Mehedi CLinic | Doctors</title>
            </Helmet>
            {
                doctors.map(doctor => <DoctorsCart doctor={doctor}></DoctorsCart>)
            }

        </div>
    );
};

export default Doctors;