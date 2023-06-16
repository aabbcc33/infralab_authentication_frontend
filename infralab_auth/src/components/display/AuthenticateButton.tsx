import React from 'react'

export const AuthenticateButton = (props:any) => {
    return (

        <div className="center">
            <h1>Infralab - Fontys ICT</h1>
            <p>Are you a <strong>semester 3 infrastructure</strong> student in need of an infralab certificate? , then proceed by authenticating.<br />
                If a certificate is not provided to you after you log in, please contant your teacher.
            </p>
            <button onClick={props.redirectButton()} className="button-30" role="button">Authenticate with fhict</button>
        </div>

    )
}
