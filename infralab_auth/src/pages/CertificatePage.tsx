import { useAuth } from '../components/context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const CertificatePage = () => {

    const { auth } = useAuth();
    const location = useLocation();
    console.log(auth);

    if (!auth?.roles.includes("student")) {
        return <Navigate to="/error" state={{ from: location }}></Navigate>
    }

    
    return (
        <>
        <div>Certificate page</div>
        </>
    )
}

export default CertificatePage;