import axios from 'axios';
import styles from '../../css/StudentInfo.module.css'
import { useAuth } from '../context/AuthProvider';
import { useEffect, useState } from 'react';
import DownloadButton from './DownloadButton';

function StudentInfo() {

    const { auth } = useAuth();
    const [certificate, setCertificate] = useState<string>("");

    // certificate values
    const [dev, setDev] = useState<string>("");
    const [dataciphers, setDataciphers] = useState<string>("");
    const [dataciphersfallback, setDataciphersfallback] = useState<string>("");
    const [digest, setDigest] = useState<string>("");
    const [localpost, setLocalport] = useState<string>("");
    const [protocol, setProtocol] = useState<string>("");
    const [tls, setTls] = useState<string>("");
    const [name, setName] = useState<string>("");

    const [ca, setCa] = useState<string>("");

    const [cert, setCert] = useState<string>("");
    const [prvkey, setPrvkey] = useState<string>("");
    const [name, setName] = useState<string>("");
    // dividing the file into 5 sections for better code readability 
    // one: header part until start of ca
    // two: ca
    // three: cert
    // four: prvkey
    // five: tls
    const [one, setOne] = useState<string>("");
    const [two, setTwo] = useState<string>("");
    const [three, setThree] = useState<string>("");
    const [four, setFour] = useState<string>("");
    const [five, setFive] = useState<string>("");

    // final complete text
    const [content, setContent] = useState<string>("");

    // empty check
    const [empty, setEmpty] = useState<boolean>(true);


    useEffect(() => {
       
         getCertificate();
      
    })

    //get certificate here
    const getCertificate = () => {
        return axios.post("https://infralab.fontysict.nl:8080/certificates", auth.email).then((response) => {
            setCertificate(response.data);
	    console.log("please work");
            if (certificate != null) {
                setEmpty(false);

                // set content
                setDev(response.data.dev_mode);
                setDataciphers(response.data.data_ciphers);
                setDataciphersfallback(response.data.data_ciphers_fallback);
                setDigest(response.data.digest);
                setLocalport(response.data.local_port);
                setProtocol(response.data.protocol);
                setTls(response.data.tls);
		setName(response.data.name);

                setCa(response.data.ca_cert);

                setCert(response.data.cert);
                setPrvkey(response.data.prvkey);
                setName(response.data.name);

                // text generation
                setOne("dev " + dev + "\r\n" + "persist-tun\r\n" + "persist-key\r\n" + "data-ciphers " + dataciphers + "\r\n" + "data-ciphers-fallback " + dataciphersfallback + "\r\n" + "auth " + digest + "\r\n"
                    + "tls-client\r\n" + "client\r\n" + "resolv-retry infinite\r\n" + "remote 145.220.75.91 " + localpost + " " + protocol + "\r\n" + "nobind\r\n"
                    + `verify-x509-name "${name}" name\r\n` + "auth-user-pass\r\n" + "remote-cert-tls server\r\n" + "explicit-exit-notify\r\n");

                setTwo("<ca>\r\n" + ca + "</ca>" + "\r\n");

                setThree("<cert>\r\n" + cert + "</cert>" + "\r\n");

                setFour("<key>\r\n" + prvkey + "</key>" + "\r\n" + "key-direction 1" + "\r\n");

                setFive("<tls-auth>\r\n" + tls + "</tls-auth>");

                setContent(one + two + three + four + five);
		console.log(content);
            }
        });
    };

    // filter
    // display "No existing certificate." if certificate is null
    const filter = () => {
        if (empty) {
            return (
                <div>No existing certificate.</div>
            )
        } else {
            return (
                <DownloadButton text={content} filename={"certificate.ovpn"} />
            )
        }
    }

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
                        <div className={styles.content}>
                            {filter()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentInfo;
