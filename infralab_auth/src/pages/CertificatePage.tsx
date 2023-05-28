import useAuthorization from "../utils/useAuthorization";

const CertificatePage = () => {
    useAuthorization();
    
    return (
        <>
        <div>Certificate page</div>
        </>
    )
}

export default CertificatePage;