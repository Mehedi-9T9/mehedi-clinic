import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const DoctorsCart = ({ doctor }) => {
    const { id, img, name, disease, degree } = doctor;


    return (
        <div>
            <div className="card  bg-base-100 shadow-xl border m-5">
                <figure className="px-10 pt-10">
                    <img src={img} alt="doctor" className="rounded-xl h-[400px] w-[400px]" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-black-700 font-bold text-3xl">{name}</h2>
                    <h2 className='text-xl font-roboto text-red-700 font-semibold'>{degree} :</h2>
                    <div className='space-x-6 text-black font-poppins text-lg'>
                        {
                            disease.map((item, idx) => <span key={idx}>{item}</span>)
                        }

                    </div>

                    <div className="card-actions flex justify-between">
                        <Link to={`/doctor/${id}`}>
                            <button className="btn  bg-red-700 text-white text-lg font-roboto">Show Details</button>
                        </Link>
                        <button className="btn bg-red-700 text-white text-lg font-roboto">Visit Fee: 500</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

DoctorsCart.propTypes = {
    doctor: PropTypes.object.isRequired
}

export default DoctorsCart;