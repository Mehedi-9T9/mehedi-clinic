import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../Pages/Home';
import Doctors from '../Pages/Doctors/Doctors';
import DoctorDetails from '../Shared/doctorDetails/DoctorDetails';
import Login from '../Shared/Login/Login';
import Rejister from '../Shared/Rejister/Rejister';
import SecureRoute from './SecureRoute';
import Blogs from '../Pages/Blogs/Blogs';
import Error from '../Pages/Error/Error';



const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/doctors',
                element: <Doctors></Doctors>
            },
            {
                path: '/doctor/:doctorId',
                element: <SecureRoute> <DoctorDetails></DoctorDetails></SecureRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/rejister',
                element: <Rejister></Rejister>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])



export default Routes;