import logo from '../images/logo.png'
import background from '../images/background.jpg'
import '../css/FrontPage.css'

const AuthenticatedPage = () => {
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
                        <label className='authLabel'>You have been authenticated.</label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AuthenticatedPage; 
