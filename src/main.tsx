import {createRoot} from 'react-dom/client'
import {GetAuthCode} from "./gitHub/GetAuthCode";

createRoot(document.getElementById('root')!).render(
    <>
        <GetAuthCode/>
    </>,
)
