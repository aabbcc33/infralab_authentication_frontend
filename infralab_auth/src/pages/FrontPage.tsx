import { useState, useEffect } from 'react';
import '../css/FrontPage.css'
import { generateState } from '../utils/RedirectUrlStateGenerator';
import axios from "axios";
import { useNavigate } from "react-router"
import { useAuth } from '../components/context/AuthProvider';

const FrontPage = () => {

    const [certificate, setCertificate] = useState<string>("");
    const { auth } = useAuth();
    const { saveAuth } = useAuth();
    const navigate = useNavigate();

    const redirectButton = () => {

        //building out the redirect url for fhict
        const authProviderUrl: string = "https://identity.fhict.nl/connect/authorize";
        const client_id: string = "i476232-infralabau";
        const scopes: string = "fhict fhict_personal openid profile roles";
        const redirectUri: string = "https://infralab.fontysict.nl:8080/";
        const response_type: string = "code";

        // this parameter is added for security to prevent forgery of the url
        const state: string = generateState();

        // HOW THINGS WORK
        // 1. get code from fontys API via window.location.replace
        // 2. receive code and send code to backend
        // 3. backend: exchange code to token and validate token
        // 4. backend: send redirect response to our auth page
        // 5. auth page: creds are stored into application context and redirect to home page
        // 6. home page: display and redirect depending on user creds

        window.location.replace(`${authProviderUrl}?client_id=${client_id}&scope=${scopes}&redirect_uri=${redirectUri}&response_type=${response_type}&state=${state}`);
    }

    useEffect(() => {

        // because fontys API response is a link, we need to get its code param and send it to our backend
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        // send code to backend
        axios.get("https://localhost:8080/?code=" + code).catch(error => console.log(error));

    }, [window.location]);

    const https = require('https');

    const agent = new https.Agent({
        rejectUnauthorized: false,
    });

    const client = axios.create({
        httpsAgent: agent
    });

    const getCert = () => {
        return client.get('https://infralab.fontysict.nl:8080/test').then((response) => {
            setCertificate(response.data);
        })
    };


    const sendStudent = () => {
        navigate("/certificates");
    }

    const sendTeacher = () => {
        navigate("/admin");
    }

    // change display of front page depending on user creds
    if (auth?.roles.includes("student")) {
        return (
            <>
                <div>
                    <div>You are logged in as {auth.name}</div>
                    <div>
                        <button onClick={sendStudent} className="button-30" role="button">View my credentials</button>
                    </div>

                </div>
            </>
        )
    } else if (auth?.roles.includes("teacher")) {
        return (
            <>
                <div>
                    <button onClick={sendTeacher} className="button-30" role="button">Access admin page</button>
                </div>
            </>
        )
    } else if (auth?.roles.includes("")) {
        return (
            <>
                <div>
                    <button onClick={redirectButton} className="button-30" role="button">Authenticate with fhict</button>
                </div>
                <label>{certificate}</label>
                <div>
                    <button onClick={getCert} className="button-30" role="button">get cert?</button>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div>
                    <button onClick={redirectButton} className="button-30" role="button">Authenticate with fhict</button>
                </div>
                <label>{certificate}</label>
                <div>
                    <button onClick={getCert} className="button-30" role="button">get cert?</button>
                </div>
            </>
        )
    }



}

export default FrontPage; 