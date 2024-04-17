import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const navigate = useNavigate()
    const { loginUser, googleLogin } = useContext(AuthContext)
    const location = useLocation()
    // console.log('login location', location);
    // const [inputValue, setInputValue] = useState(' ')
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
                console.log(result.user);
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='container mx-auto m-10 '>
            <Helmet>
                <title>Mehedi Clinic | login</title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200 rounded-xl " style={{ backgroundImage: "url('../../../../public/img/Moon.svg')" }}>
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
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>

                            </div>

                        </form>
                        <div className="divider -mt-5">OR</div>
                        <button onClick={googleHandler} className="btn bg-slate-300 text-lg font-poppins w-[80%] mx-auto"><FcGoogle /> Google</button>
                        <p className='text-center m-5'>New user for <Link to="/rejister" className='font-bold text-blue-600'>Go to Rejister</Link></p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;