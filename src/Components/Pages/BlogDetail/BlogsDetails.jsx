import PropTypes from 'prop-types';

const BlogsDetails = ({ blog }) => {
    const { img, title, description } = blog
    return (
        <div className="card bg-base-100 shadow-xl border md:mt-0 mt-5">
            <figure className="px-10 pt-10">
                <img src={img} alt="doctor" className="rounded-xl" />
            </figure>
            <div className="card-body  items-center">
                <h2 className="card-title font-roboto">{title}</h2>
                <p className='font-poppins'>{description}</p>

            </div>
        </div>
    );
};
BlogsDetails.propTypes = {
    blog: PropTypes.object.isRequired
}

export default BlogsDetails;