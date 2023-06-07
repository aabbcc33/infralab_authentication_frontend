import axios from 'axios';
import styles from '../../css/StudentInfo.module.css'
import { useAuth } from '../context/AuthProvider';
import { useEffect, useState } from 'react';

function StudentInfo() {

    const { auth } = useAuth();
    const [certificate, setCertificate] = useState<string>("");

    useEffect(() => {
        getCertificate();
    })

    //get certificate here

    const getCertificate = () => {
        return axios.post("https://infralab.fontysict.nl:8080/certificates", auth.email).then((response) => {
            console.log(response);
            console.log(response.data);
            setCertificate(response.data);
        })
    };


    return (
        <div className={styles.infoarea}>
            <div className={styles.infobox}>
                <div className={styles.titlebox}>Student Information</div>
                <div className={styles.contentbox}>
                    <div className={styles.row}>
                        <div className={styles.title}>Name</div>
                        <div className={styles.content}>{auth.name}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.title}>Email</div>
                        <div className={styles.content}>{auth.email}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.title}>Class</div>
                        <div className={styles.content}>{auth.class.slice(6)}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.title}>Roles</div>
                        <div className={styles.content}>
                            {auth.roles.map((role) => (
                                <li>{role}</li>
                            ))}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.title}>Certificate</div>
                        <div className={styles.content}>{certificate}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentInfo;