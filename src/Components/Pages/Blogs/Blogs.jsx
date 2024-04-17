import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import BlogsDetails from "../BlogDetail/BlogsDetails";

const Blogs = () => {
    const blogs = useLoaderData()
    console.log(blogs);
    // const animet = '../../../../public/img/Animated Shape.svg'

    return (
        <div className="container mx-auto md:my-10 ">
            <Helmet>
                <title>Mehedi Clinic | Blogs</title>
            </Helmet>
            <div className="md:grid grid-cols-3 gap-6">
                {
                    blogs.map((blog, idx) => <BlogsDetails key={idx} blog={blog}></BlogsDetails>)
                }
            </div>




        </div>
    );
};

export default Blogs;