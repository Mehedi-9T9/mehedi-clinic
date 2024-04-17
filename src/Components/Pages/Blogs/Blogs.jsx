import { Helmet } from "react-helmet-async";

const Blogs = () => {
    // const animet = '../../../../public/img/Animated Shape.svg'
    return (
        <div style={{ backgroundImage: "url('../../../../public/img/Animated Shape.svg')" }} className="h-[700px] w-[1400px] ">
            <Helmet>
                <title>Mehedi Clinic | Blogs</title>
            </Helmet>
            <h2>hello Blogs</h2>
            {/* <img src={animet} alt="" /> */}

            <div className="tooltip tooltip-bottom" data-tip="hello">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="w-[200px] h-[200px]" />

            </div>




        </div>
    );
};

export default Blogs;