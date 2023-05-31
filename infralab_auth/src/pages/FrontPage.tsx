import { useState, useEffect } from 'react';
import '../css/FrontPage.css'
import { generateState } from '../utils/RedirectUrlStateGenerator';
import axios from "axios";
import { useNavigate } from "react-router"

const FrontPage = () => {
    const [certificate, setCertificate] = useState<string>("");

    const redirectButton = async () => {
        //building out the redirect url for fhict
        const authProviderUrl: string = "https://identity.fhict.nl/connect/authorize";
        const client_id: string = "i476232-infralabau";
        const scopes: string = "fhict fhict_personal openid profile roles";
        const redirectUri: string = "http://localhost:3000";
        // can do 3000
        const response_type: string = "code";
        // this parameter is added for security to prevent forgery of the url
        const state: string = generateState();

        // get code
        // exchange to token front
        // save into storage
        // validate to get claims front
        // save context

        window.location.replace(`${authProviderUrl}?client_id=${client_id}&scope=${scopes}&redirect_uri=${redirectUri}&response_type=${response_type}&state=${state}`);

        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
    }

    // useEffect(() => {
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const code = urlParams.get('code');
    //     console.log(code); // Print the value of "code" parameter
    
    //     // You can perform any further actions with the code value here
    //   }, []);

    const getCert = () => {
        return axios.get("https://172.16.1.12:8080/certificates").then((response) => {
            setCertificate(response.data);
        })
    };


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
export default FrontPage; 