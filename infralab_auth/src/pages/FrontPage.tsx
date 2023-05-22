import '../css/FrontPage.css'
import { generateState } from '../utils/RedirectUrlStateGenerator';
import axios from "axios";


const FrontPage = () => {

    const redirectButton = () => {
         //building out the redirect url for fhict
         const authProviderUrl: string = "https://identity.fhict.nl/connect/authorize";
         const client_id: string = "i476232-infralabau";
         const scopes: string = "fhict fhict_personal openid profile roles";
         const redirectUri: string = "https://localhost:8080/";
         const response_type: string = "code";
         // this parameter is added for security to prevent forgery of the url
         const state: string = generateState();
         
         window.location.replace(`${authProviderUrl}?client_id=${client_id}&scope=${scopes}&redirect_uri=${redirectUri}&response_type=${response_type}&state=${state}`);
    }

    const getCert = () => {
        return axios.get("https://172.16.1.12:8080/certificates");
      };
      

    
    return (
        <>
        <div>
            <button onClick={redirectButton} className="button-30" role="button">Authenticate with fhict</button>
        </div>
        <div>
            <button onClick={getCert} className="button-30" role="button">get cert?</button>
        </div>
        </>
    )

}
export default FrontPage; 