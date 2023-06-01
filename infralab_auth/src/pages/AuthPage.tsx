import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import queryString from 'query-string';


const AuthPage = () => {
    const params = useParams();
    //const navigate = useNavigate();


    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams);
        console.log(urlParams.get("auth"));
    }, [])

    return (
        <div>test</div>
    )
}

export default AuthPage;