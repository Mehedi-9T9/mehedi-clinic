import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Rejister = () => {

    const navigate = useNavigate()
    const { rejisterUser, updateUser } = useContext(AuthContext)


    const submitHandler = (e) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')

        const pattan = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/
        const chek = pattan.test(password);

        const notify = () => toast("Please Type Strong Password!");
        if (!chek) {
            notify()
            return

        }


        // user Create
        rejisterUser(email, password)
            .then(resut => {
                const user = resut.user;
                e.target.reset();
                updateUser(user, name, photo)
                    .then(result => {
                        console.log(result.user);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                navigate('/login')


            })
            .catch(error => {
                console.log(error);
            })
    }
    const [show, setShow] = useState(false)
    return (
        <div>

            <div className="hero  bg-base-200 container mx-auto rounded-xl m-10 py-5 " style={{ backgroundImage: "url('../../../../public/img/Animated Shape.svg')" }}>
                <div className="hero-content ">

                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                        <form onSubmit={submitHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input name="photo" type="url" placeholder="Img URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label relative">
                                    <span className="label-text">Password</span>

                                </label>
                                <input name="password" type={show ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Rejister</button>
                            </div>
                        </form>
                        <button onClick={() => setShow(!show)} className="absolute left-[78%] top-[60%] right-4 text-2xl"> {show ? <FaEye /> : <FaEyeSlash />} </button>

                        <p className='text-center m-5 font-poppins'>Already Rejister <Link to="/login" className='font-bold text-blue-600'>Go to Login</Link></p>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Rejister;