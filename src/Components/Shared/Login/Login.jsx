import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { Helmet } from 'react-helmet-async';
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";


const Login = () => {
    const navigate = useNavigate()
    const { loginUser, googleLogin, githubLogin } = useContext(AuthContext)
    const location = useLocation()

    const submitHandler = (e) => {
        e.preventDefault()

        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        // Login User
        loginUser(email, password)
            .then(result => {
                console.log(result.user, 'login successfull');
                e.target.reset();
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.log(error.message);
            })

    }
    const googleHandler = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const githubHandler = () => {
        githubLogin()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const [show, setShow] = useState(false)


    return (
        <div className='container mx-auto m-10 '>
            <Helmet>
                <title>Mehedi Clinic | login</title>
            </Helmet>

            <div className="hero md:min-h-screen bg-base-200 rounded-xl " style={{ backgroundImage: "url('../../../../public/img/Moon.svg')" }}>
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={submitHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label relative">
                                    <span className="label-text">Password</span>

                                </label>
                                <input name='password' type={show ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>

                            </div>

                        </form>
                        <button onClick={() => setShow(!show)} className="absolute left-[78%] top-[36%] right-4 text-2xl"> {show ? <FaEye /> : <FaEyeSlash />} </button>

                        <div className="divider -mt-5">OR</div>
                        <div className='flex'>
                            <button onClick={googleHandler} className="btn bg-slate-300 text-lg font-poppins w-[40%] mx-auto"><FcGoogle /></button>
                            <button onClick={githubHandler} className="btn bg-slate-300 text-lg font-poppins w-[40%] mx-auto"><FaGithub /></button>



                        </div>
                        <p className='text-center m-5'>New user for <Link to="/rejister" className='font-bold text-blue-600'>Go to Rejister</Link></p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;