import { useAuth } from '../components/context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import StudentInfo from '../components/display/StudentInfo'

const CertificatePage = () => {

    const { auth } = useAuth();
    const location = useLocation();
    console.log(auth);

    if (!auth?.roles.includes("student")) {
        return <Navigate to="/error" state={{ from: location }}></Navigate>
    }

    
    return (
        <>
            <StudentInfo />
        </>
    )
}

export default CertificatePage;