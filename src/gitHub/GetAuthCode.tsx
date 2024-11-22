// src/gitHub/GetAuthCode.tsx

import styles from "./GetAuthCode.module.css"
import gitHubIcon from "../assets/gitHubIcon.png"

/**
 * GetAuthCode component receives Authorization Code (GitHub OAuth2)
 */
export const GetAuthCode = () => {
    const login = (): void => {
        const CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
        const url: string = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user:email`
        window.location.assign(url);
    }
    return <button className={styles.gitHubButton} onClick={login}>
        <h4>STEP 1</h4>
        <img className={styles.gitHubIcon} src={gitHubIcon} alt="github logo"/>
        <h4>Get Authorization Code</h4>
    </button>
}
