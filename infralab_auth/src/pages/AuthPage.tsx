import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/context/AuthProvider";


const AuthPage = () => {

    const { saveAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);

        const authString = urlParams.get("auth")?.toString();

        if (authString) {
            const authObject = JSON.parse(authString);

            // save credentials to application context
            let newAuth = {
                email: authObject.email.toString(),
                name: authObject.name.toString(),
                roles: authObject.role,
                class: authObject["urn:nl.fhict:schedule"].toString()
            };
            
            saveAuth(newAuth);
            // send them to home
            navigate("/");

        } else {
            // send to error page, auth is null
            navigate("/error")
        }
        

        


    }, [])

    return (
        <div>test</div>
    )
}

export default AuthPage;