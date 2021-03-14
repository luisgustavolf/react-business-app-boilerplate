import * as React from 'react'

export interface LoginPageProps {
    children?: any
}

export function LoginPage(props:LoginPageProps) {

    // ---------------------------------------------
    // Transformations
    // ---------------------------------------------
    // Render

    return (
        <div className={'login-page'}>
            Login form
        </div>
    )
}