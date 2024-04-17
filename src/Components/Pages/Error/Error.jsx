import React from 'react';

const Error = () => {
    return (
        <div className='m-10 container mx-auto  bg-base-300 rounded-2xl'>
            <h2 className="text-5xl text-center font-roboto py-10 ">Route not found</h2>
            <div>
                <img src="../../../../public/img/not found.svg" alt="" className='h-[500px]' />
            </div>
        </div>
    );
};

export default Error;