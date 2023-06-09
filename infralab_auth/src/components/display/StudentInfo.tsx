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

    const [ca, setCa] = useState<string>("");

    const [cert, setCert] = useState<string>("");
    const [prvkey, setPrvkey] = useState<string>("");

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
            if (certificate != null) {
                setEmpty(false);

                // set content
                setDev("tun");
                setDataciphers("AES-256-GCM,AES-128-GCM,CHACHA20-POLY1305,AES-128-CBC");
                setDataciphersfallback("AES-128-CBC");
                setDigest("SHA256");
                setLocalport("1194");
                setProtocol("UDP4");
                setTls("#\r\n# 2048 bit OpenVPN static key\r\n#\r\n-----BEGIN OpenVPN Static key V1-----\r\n62a085af04ed474ac51e2bd0d682be47\r\nb3dee4a5cc0e5b0dcfa280e659a9e340\r\n37ce92799c28f6d3d5bc7f2c6b4af0f5\r\n79afa8668a191d37cfbe3291bfe54fe1\r\n575bf519bd708054e0612313baa55e53\r\n6720c7df311fd6db97e9ee6cbe91c722\r\n64f5ca585544ece3a43d04b25f44c351\r\n539bee5f0efcb1da18ad3692efc719ea\r\nde51f8bab94bb1bda5b941a17d7bbc15\r\n5d7e8f00b2bfdd46e3e16ece7ce8bce2\r\n1e331db019c4a4cdc8d964ec853692e1\r\n2496aa5d61fdab16be25cc8794460c26\r\n218405d91d0ad03252470ff06b3cb547\r\n476ad19e7a90e5c7d58e4e48c48b8f19\r\n03c60f5fd5fc704115fecb165865af4a\r\nbd43543eba66c767005f17947f693519\r\n-----END OpenVPN Static key V1-----");

                setCa("-----BEGIN CERTIFICATE-----\r\nMIIEPzCCAyegAwIBAgIBADANBgkqhkiG9w0BAQsFADBzMRQwEgYDVQQDEwtpbnRl\r\ncm5hbC1jYTELMAkGA1UEBhMCTkwxFjAUBgNVBAgTDU5vcnRoIEJyYWJhbnQxEjAQ\r\nBgNVBAcTCUVpbmRob3ZlbjEPMA0GA1UEChMGRm9udHlzMREwDwYDVQQLEwhJbmZy\r\nYWxhYjAeFw0yMDEyMTUxNDQxNDNaFw0zMDEyMTMxNDQxNDNaMHMxFDASBgNVBAMT\r\nC2ludGVybmFsLWNhMQswCQYDVQQGEwJOTDEWMBQGA1UECBMNTm9ydGggQnJhYmFu\r\ndDESMBAGA1UEBxMJRWluZGhvdmVuMQ8wDQYDVQQKEwZGb250eXMxETAPBgNVBAsT\r\nCEluZnJhbGFiMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq5jieI0h\r\nAzk/qj6XhRGDb6PzndfsCC2lXoe6Ovp1W2IfV1YwLn7m7e4nlrpBNm/VMX4O8erW\r\nlB3oGoD2TSVgLMlDBRGfC0XyUA2TkmdYJDTL1xbJQHYJu+yhyaJyyDaHc4mEkwNu\r\nrb+YhdBdC3xgZfB0iAgsSGWsbuytyK9k3RM+99l5ne7nDRvIuMwH78UkGg2FV7zT\r\nBefArSANpRKl/NzcrfA0Q5xc0wgKKLILhOFli3aIJ4F/oYrn/JqQFW+pzawGyQwj\r\nbenbaauGuVxRAYVDVUpMa0J0uZ+vJPVNv7FvRrNKVvxxo1K68pjM0dtGpxMIojCC\r\nfq8z7AvBNNBmLQIDAQABo4HdMIHaMB0GA1UdDgQWBBQamoa3sPPcDqE/xM6Fl6TC\r\nhvwccTCBnQYDVR0jBIGVMIGSgBQamoa3sPPcDqE/xM6Fl6TChvwccaF3pHUwczEU\r\nMBIGA1UEAxMLaW50ZXJuYWwtY2ExCzAJBgNVBAYTAk5MMRYwFAYDVQQIEw1Ob3J0\r\naCBCcmFiYW50MRIwEAYDVQQHEwlFaW5kaG92ZW4xDzANBgNVBAoTBkZvbnR5czER\r\nMA8GA1UECxMISW5mcmFsYWKCAQAwDAYDVR0TBAUwAwEB/zALBgNVHQ8EBAMCAQYw\r\nDQYJKoZIhvcNAQELBQADggEBAHoBvygy0bxSFDoSHUWvmplRlCFcnd0sMC0rh+tX\r\nLhK0n2YOSTaxNhxDRvFLLE3wJmlVtpqY7iAhINwIkAPr7GtdrS7QI8DBk+GRIWvk\r\nrFFA0d+l+ysug4EbYb8Z+MRrtkXyFGk5Xv5dk7gsyhNdx+rx725GAKt0B6NGO/P3\r\n0rjx9eGn7HrNONZ/Bct89HEDAxJKSiIKxt2nKKbPXu5mIim23Lf+YOn0I48z1foa\r\npCo8XQBrKK9RMuhAxRg/Aa35ebPn9e5VoJx42BbH5twLP7HQpNytXVz8AKM1gAme\r\npGNnp1ZZQJjsVqUirPLCYuRpJzqbl8387DEt5s47OuU1/fw=\r\n-----END CERTIFICATE-----");

                setCert("-----BEGIN CERTIFICATE-----\nMIIEzzCCA7egAwIBAgIBATANBgkqhkiG9w0BAQsFADBzMRQwEgYDVQQDEwtpbnRl\ncm5hbC1jYTELMAkGA1UEBhMCTkwxFjAUBgNVBAgTDU5vcnRoIEJyYWJhbnQxEjAQ\nBgNVBAcTCUVpbmRob3ZlbjEPMA0GA1UEChMGRm9udHlzMREwDwYDVQQLEwhJbmZy\nYWxhYjAeFw0yMDEyMTUxNDQzMzBaFw0zMDEyMTMxNDQzMzBaMHcxGDAWBgNVBAMU\nD1ZQTl9zZXJ2ZXJfY2VydDELMAkGA1UEBhMCTkwxFjAUBgNVBAgTDU5vcnRoIEJy\nYWJhbnQxEjAQBgNVBAcTCUVpbmRob3ZlbjEPMA0GA1UEChMGRm9udHlzMREwDwYD\nVQQLEwhJbmZyYWxhYjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALxp\nEpglbaYHTZeZ/73sSVc0babxLfI9ksxtK13nzTt1TikmdDuDSPaoOCBE1UsC8cvy\nUSyRbPPAuOn75Z76FYmfZCtfrpIdYn4rMYnXU5v2c/lToYwulFqA1Z0GB6ZV+FtL\ng2A6/ZXQmBxja51wjKc0HUcihGui9Wk6TP3xZ4rMcinaK5ysipYcNOv9pS5PhzgD\nAQ5kDYj1xJHdi/dTORdw3R9e+RRr8jWGbHF5XGg40bWLeU8OPbxMRy01Mo6jvHKJ\nhbCun2A9jgkcATYZY70JUcB2YHQMjPvyQWMeV3/gJpiy43Q1KzBJ5X2iqqUs3GrK\nWIAYzrYDl8Oj2vjkNZECAwEAAaOCAWgwggFkMAkGA1UdEwQCMAAwEQYJYIZIAYb4\nQgEBBAQDAgZAMAsGA1UdDwQEAwIFoDAzBglghkgBhvhCAQ0EJhYkT3BlblNTTCBH\nZW5lcmF0ZWQgU2VydmVyIENlcnRpZmljYXRlMB0GA1UdDgQWBBT5kKnsHdxKCOAb\nZxqX4E/xCIlVGTCBnQYDVR0jBIGVMIGSgBQamoa3sPPcDqE/xM6Fl6TChvwccaF3\npHUwczEUMBIGA1UEAxMLaW50ZXJuYWwtY2ExCzAJBgNVBAYTAk5MMRYwFAYDVQQI\nEw1Ob3J0aCBCcmFiYW50MRIwEAYDVQQHEwlFaW5kaG92ZW4xDzANBgNVBAoTBkZv\nbnR5czERMA8GA1UECxMISW5mcmFsYWKCAQAwJwYDVR0lBCAwHgYIKwYBBQUHAwEG\nCCsGAQUFBwMCBggrBgEFBQgCAjAaBgNVHREEEzARgg9WUE5fc2VydmVyX2NlcnQw\nDQYJKoZIhvcNAQELBQADggEBAHrePIeCqNu3Cvs1LRs7+a3z2dvZL9QBy2e1m6r4\ngSOqGiSIoIYgCiekl5w3oo3Bnv23xDx4V6E50hxC7MTHUASe7ajWPmZLwd2qt/7b\nVpVKOGlPs+dapbyBLKK6MiN4OhdvCIVBtJzPc2kstaLZ22zDfOd4XOfcQNX+cY7n\nAcJLQlH+Rd6Q1TRNMU+3ZjLCS9IcFRusb0jgp3WapAFZYUCJO0zPKgLmMRbVZhia\n9BTsi+tEOE/TNcq687lQjpIxOrs7bj91dzS7fxANy9B0DwknO2oqiau6pLehtbc4\nsnlbZU27/fY2WiY6L7cyfisWecCMD9AOu2Klwk1SM9mq1EI=\n-----END CERTIFICATE-----");
                setPrvkey("-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC8aRKYJW2mB02X\nmf+97ElXNG2m8S3yPZLMbStd5807dU4pJnQ7g0j2qDggRNVLAvHL8lEskWzzwLjp\n++We+hWJn2QrX66SHWJ+KzGJ11Ob9nP5U6GMLpRagNWdBgemVfhbS4NgOv2V0Jgc\nY2udcIynNB1HIoRrovVpOkz98WeKzHIp2iucrIqWHDTr/aUuT4c4AwEOZA2I9cSR\n3Yv3UzkXcN0fXvkUa/I1hmxxeVxoONG1i3lPDj28TEctNTKOo7xyiYWwrp9gPY4J\nHAE2GWO9CVHAdmB0DIz78kFjHld/4CaYsuN0NSswSeV9oqqlLNxqyliAGM62A5fD\no9r45DWRAgMBAAECggEATvp8oOqPnBlTnUkguyxhUfzYOjK/X9wPvUHF/Ac/ML1r\nljRYZNoTq9G4NU6lWlxRn3xkKpqLYWJYIT1Gc+3BOX9nLgdd1kIbF2hjy7RHiAk3\ndDxqa6ja51U6Nihg7Ij9Isf0ulIAGtzl5oCGi+iyDST7YOZHPBeDaCjYPVsEXFm/\nE9DnVKetcOxmwQbTWTZ9rbLhORzx4Nz3kdFjg9b5sVDb0G0W/T8vrdqIQLzOSvS3\n5kKZgNsXuxvwu3vCG0wmEeOFlBVIsiFkXUzDKjQbtuS8+3DvMdFIRopQJd685h8Y\nd5mzkepM/hEUHkcHfuo1nw7HFZilDUSUMtWsY6OjQQKBgQDg9cRhvlO0c01Iknwz\nUl3nVoNxC79vDP6oQVOUifuoJgNe88JCE6E7wGV8F8n8fqw0qZbclUAFkZcjnC00\nnnpaxtuEMaDk3w6HjDphtJSk6+C8IuQTU89b4vACSmijnoEx9k6x3FbnuqALxUXP\n3x/KYgdhb10xjpQDynWCSvd7pwKBgQDWaETy0YitWi5GIVGLNJClqBc0WlRNZVAx\nMxVSoDxN69ASqMVZbDvB0QbKObspkY3HlhIiu2cc+SxOb/beQ4X1S5Jab76WgMqf\nUx+kqM/7/lSuXS5Ol10BKiF+nDlUaa7ih/sgCmUOwBS7m8gAcJo5KRMfR+bAu7Ko\nes29FYwMBwKBgQCU/1Lt5lCskT3b1mH64BAgHDX81uoZVIMK0BHarTWIXn0XE95T\nQ4sj9z+AXIVE/mVyj+zC9vurdI2lYVizpE+n9lQIj5JgZLjL4H3+nsthHHYCRh3I\nC1epJXsQGVaLIH2zqM7gkO7ilsJQaX3eu4rj0d/PkiIoo6W3iQ4hmSOnuwKBgEi0\n8yykgYTHoAmIIu7h1GtYpQXL2+qjAJ6ug/yQ+eIypUyujr3URi9jgrnw+dcO1NVp\nvpyokD7zAGNY9I5Kt5KHHgos+qRu6Ec/GOvtkxoRFQZL8vgTvCY480LMF2TYscV/\n91jWLY7i9CTqntgHV0Uq+KES8N1KyTr46evE8sjhAoGBAM60ZYCEWMKhwFi5oOmY\n7pbocQVgglOX/BVkfdEAkPEW7R7KBzpPhsN+lxf3te/C1djU4UKq+in1l123OBlR\nGQl/XucmfKjtlbt0/Ap1RB+RHpL91GZw65HytuSw0hIIf2M1Klant2XpSGr9uO4V\n6lxwwu01kJYpi4NFozIMjLDV\n-----END PRIVATE KEY-----");

                // text generation
                setOne("dev " + dev + "\r\n" + "persist-tun\r\n" + "persist-key\r\n" + "data-ciphers " + dataciphers + "\r\n" + "data-ciphers-fallback " + dataciphersfallback + "\r\n" + "auth " + digest + "\r\n"
                + "tls-client\r\n" + "client\r\n" + "resolv-retry infinite\r\n" + "remote 145.220.75.91 " + localpost + " " + protocol + "\r\n" + "nobind\r\n" 
                + `verify-x509-name "VPN_server_cert" name\r\n` + "auth-user-pass\r\n" + "remote-cert-tls server\r\n" + "explicit-exit-notify\r\n");

                setTwo("<ca>\r\n" + ca + "\r\n" + "</ca>" + "\r\n");

                setThree("<cert>\r\n" + cert + "\r\n" + "</cert>" + "\r\n");

                setFour("<key>\r\n" + prvkey + "\r\n" + "</key>" + "\r\n" + "key-direction 1" + "\r\n");

                setFive("<tls-auth>\r\n" + tls + "\r\n" + "</tls-auth>");

                setContent(one + two + three + four + five);
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
                <DownloadButton text={content} filename={"certificate.txt"} />
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