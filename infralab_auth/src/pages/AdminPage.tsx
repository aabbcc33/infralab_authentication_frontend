import { useAuth } from '../components/context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Adminpage = () => {

    const { auth } = useAuth();
    const location = useLocation();

    if (!auth?.roles.includes("teacher")) {
        return <Navigate to="/error" state={{ from: location }}></Navigate>
    }

    return (
        <>
            <div>admin page</div>
        </>
    )
}

export default Adminpage;