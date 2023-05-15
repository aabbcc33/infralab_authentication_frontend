import logo from '../images/logo.png'
import background from '../images/background.jpg'
import '../css/FrontPage.css'
const FrontPage = () => {

    const redirectButton = () => {
        window.location.replace("https://localhost:8080/auth/oauthCallback");
    }

    return (
        <div className='page'>
            <div className='background'>
                <div className='purple-container'>
                    <img alt='fontys-background' className='main-background' src={background} />
                </div>
            </div>
            <div>
                <div className='authenticate-container'>
                    <img alt='fontys-icon' className='fontys-logo' src={logo} />
                    <form  >
                        <label>Access your infralab certificates.</label><br />
                        <button onClick={redirectButton} type='submit'><strong>Authenticate with FHICT</strong></button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default FrontPage; 
