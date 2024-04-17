import { useContext } from "react";
import { AuthContext } from "../Shared/authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const SecureRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname);
    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>
    }
    if (user) {
        return children
    } else {
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

};

export default SecureRoute;