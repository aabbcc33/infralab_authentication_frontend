import useAuthorization from "../utils/useAuthorization";
import { useEffect, useState } from 'react';
import { generateState } from '../utils/RedirectUrlStateGenerator';

const CertificatePage = () => {
    useAuthorization();
    
    return (
        <>
        <div>Certificate page</div>
        </>
    )
}

export default CertificatePage;