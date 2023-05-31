import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateState } from '../utils/RedirectUrlStateGenerator';
import { stat } from 'fs';

const useAuthorization = () => {
        const navigate = useNavigate();

       // Retrieve the value of the cookie
        function getCookieValue(cookieName: string | any[]) {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie.startsWith(cookieName + '=')) {
                return cookie.substring(cookieName.length + 1);
                }
                }
                return null;
        }
        
        // Usage example
        var yourCookieValue = getCookieValue('cookie');
        if (yourCookieValue == sessionStorage.getItem("state")) {
                // Use the cookie value as needed
                console.log("Your Cookie Value: " + yourCookieValue);
        } else {
                navigate("/error");
        }
}

export default useAuthorization;