import PropTypes from 'prop-types'

const Services = ({ service }) => {
    const { img, title, description } = service
    return (
        <div className="card  bg-base-100 shadow-xl border mb-6 md:mb-0">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-roboto">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};
Services.propTypes = {
    service: PropTypes.object.isRequired
}

export default Services;