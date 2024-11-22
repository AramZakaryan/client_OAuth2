// src/gitHub/GetAuthCode.tsx

import styles from "./GetAuthCode.module.css"
import gitHubIcon from "../assets/gitHubIcon.png"

/**
 * GetAccessToken component receives Access Token (GitHub OAuth2)
 * by sending client id, client secret and authorization code
 * Than received Access Token is stored in local storage
 */
export const GetAccessToken = () => {

    const getAccessToken = async () => {
        const client_id = import.meta.env.VITE_GITHUB_CLIENT_ID;
        const client_secret = import.meta.env.VITE_GITHUB_CLIENT_SECRET;
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code')
        const url: string = "https://github.com/login/oauth/access_token"

        const response = await fetch(url, {
            method: "POST", body: JSON.stringify({
                client_id,
                client_secret,
                code
            })
            , headers: {'Content-Type': 'application/json'}
        });

        console.log(response)
    }

    return <button className={styles.gitHubButton} onClick={getAccessToken}>
        <h4>STEP 2</h4>
        <img className={styles.gitHubIcon} src={gitHubIcon} alt="github logo"/>
        <h4>Get Access Token</h4>
    </button>
}
