import '../css/FrontPage.css'
const FrontPage = () => {

    const redirectButton = () => {
        window.location.replace("https://localhost:8080/auth/oauthCallback");
    }

    return (
        <div>
            <button onClick={redirectButton} className="button-30" role="button">Authenticate with fhict</button>
        </div>
    )
}
export default FrontPage; 