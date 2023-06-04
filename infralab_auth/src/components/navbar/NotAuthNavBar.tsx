import { NavLink } from "react-router-dom"
import styles from '../../css/NavBar.module.css'
import logo from  '../../images/fontys.png'
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthProvider";

function NotAuthNavBar() {

    const navigate = useNavigate();
    const { saveAuth } = useAuth();


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
                <div className={styles.logo}><img src={logo}/></div>
            </nav>
        </div>
    )
}

export default NotAuthNavBar;