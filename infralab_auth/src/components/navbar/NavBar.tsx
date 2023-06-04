import styles from '../../css/NavBar.module.css'
import logo from  '../../images/fontys.png'
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthProvider";
import { NavLink } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();
    const { saveAuth } = useAuth();
    const { auth } = useAuth();


    const logout = (e: { preventDefault: () => void; }) => {
        saveAuth({
            email: '',
            name: '',
            roles: [''],
            class: ''
        });
        navigate("/");
    }

    return (
        <div>
            <nav className={styles.navBar}>
                <div className={styles.logo}><NavLink to={"/"}><img src={logo}/></NavLink></div>
                <div className={styles.auth}>
                    <div className={styles.credbox}>
                        <div>Logged in as: {auth.name}</div>
                        <div>Email: {auth.email}</div>
                    </div>
                    <div  className={styles.buttonbox}>
                        <button onClick={logout} className="button-30" role="button">Logout</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
